import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOSTS = new Set([
  "bingran.ai",
  "www.bingran.ai",
  "bingranyou.com",
  "www.bingranyou.com",
]);

// Paths probed almost exclusively by automated scanners and credential
// harvesters. None of them correspond to a real route on this site, so we
// reject them at the edge instead of letting Next render its styled 404.
// Decision is path-only; we never sniff the User-Agent so AI/agent traffic
// is unaffected.
const SCANNER_PATHS: RegExp[] = [
  /^\/\.env(\b|$)/i,
  /^\/\.git(\/|$)/i,
  /^\/\.aws(\/|$)/i,
  /^\/\.ssh(\/|$)/i,
  /^\/\.docker(\/|$)/i,
  /^\/\.htaccess$/i,
  /^\/wp-(admin|login|content|includes)/i,
  /^\/wordpress(\/|$)/i,
  /^\/admin(\/|$)/i,
  /^\/administrator(\/|$)/i,
  /^\/phpmyadmin(\/|$)/i,
  /^\/pma(\/|$)/i,
  /^\/config\.(yml|yaml|json)$/i,
  /^\/server-status$/i,
  /^\/owa(\/|$)/i,
];

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (SCANNER_PATHS.some((rx) => rx.test(pathname))) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=600",
      },
    });
  }

  const host = (req.headers.get("host") ?? "").toLowerCase().split(":")[0];
  const res = NextResponse.next();
  if (!CANONICAL_HOSTS.has(host)) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
