from __future__ import annotations

import json
import mimetypes
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

from .jobs import discover_tasks, read_artifact, scan_run
from .models import DEFAULT_DATA_DIR, ExperimentConfig
from .runner import default_paths, refresh_processes, start_run, stop_run
from .store import StateStore


PROJECT_ROOT = Path(__file__).resolve().parents[1]
STATIC_ROOT = PROJECT_ROOT / "app" / "static"


class AppContext:
    def __init__(self, data_dir: Path = DEFAULT_DATA_DIR):
        self.store = StateStore(data_dir)


class Handler(BaseHTTPRequestHandler):
    context: AppContext

    def do_GET(self) -> None:
        try:
            self.route_get()
        except Exception as exc:
            self.json_response({"error": str(exc)}, status=500)

    def do_POST(self) -> None:
        try:
            self.route_post()
        except Exception as exc:
            self.json_response({"error": str(exc)}, status=500)

    def route_get(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/defaults":
            self.json_response(default_paths())
        elif parsed.path == "/api/state":
            refresh_processes(self.context.store)
            runs = [scan_run(run) for run in reversed(self.context.store.list_runs())]
            self.json_response({"runs": runs})
        elif parsed.path == "/api/tasks":
            query = parse_qs(parsed.query)
            self.json_response({"tasks": discover_tasks(query.get("tasks_dir", [""])[0])})
        elif parsed.path.startswith("/api/runs/"):
            self.handle_run_get(parsed.path, parsed.query)
        else:
            self.static_response(parsed.path)

    def route_post(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/runs":
            payload = self.read_json_body()
            run = start_run(ExperimentConfig.from_dict(payload), self.context.store)
            self.json_response({"run": scan_run(run)}, status=201)
        elif parsed.path.startswith("/api/runs/") and parsed.path.endswith("/stop"):
            run_id = parsed.path.split("/")[3]
            run = stop_run(run_id, self.context.store)
            self.json_response({"run": scan_run(run)} if run else {"error": "run not found"}, status=200 if run else 404)
        else:
            self.json_response({"error": "not found"}, status=404)

    def handle_run_get(self, path: str, query: str) -> None:
        parts = path.strip("/").split("/")
        if len(parts) < 3:
            self.json_response({"error": "not found"}, status=404)
            return
        run = self.context.store.get_run(parts[2])
        if run is None:
            self.json_response({"error": "run not found"}, status=404)
            return
        if len(parts) == 3:
            self.json_response(scan_run(run))
        elif len(parts) == 4 and parts[3] == "log":
            self.json_response({"log": scan_run(run)["log_tail"]})
        elif len(parts) == 4 and parts[3] == "artifact":
            rel = parse_qs(query).get("path", [""])[0]
            self.json_response(read_artifact(run, unquote(rel)))
        else:
            self.json_response({"error": "not found"}, status=404)

    def static_response(self, request_path: str) -> None:
        rel = "index.html" if request_path in {"", "/"} else request_path.lstrip("/")
        path = (STATIC_ROOT / rel).resolve()
        if not str(path).startswith(str(STATIC_ROOT.resolve())) or not path.is_file():
            path = STATIC_ROOT / "index.html"
        content_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.end_headers()
        self.wfile.write(path.read_bytes())

    def read_json_body(self) -> dict:
        length = int(self.headers.get("Content-Length") or "0")
        if length <= 0:
            return {}
        return json.loads(self.rfile.read(length).decode())

    def json_response(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args: object) -> None:
        return


def main() -> int:
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    Handler.context = AppContext()
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"BenchFlow experiment control: http://127.0.0.1:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

