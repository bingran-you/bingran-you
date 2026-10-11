#!/usr/bin/env node
// Typeset the home article. Loads the proof view (/proof) from a running
// development server in headless Chrome, reads back where the browser broke
// every line and how tall every box is, paginates (lib/paginate.ts) and
// writes content/layout/home.json.
//
//   npm run dev                                  in another terminal
//   npm run typeset [-- http://localhost:3000]

import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LEADING, PAGE, paginate } from "../lib/paginate.ts";

const ORIGIN = process.argv[2] ?? "http://localhost:3000";
const CHROME =
  process.env.CHROME ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT = fileURLToPath(
  new URL("../content/layout/home.json", import.meta.url),
);
// The result does not depend on it: the proof is laid out at the size of a
// full sheet in any window that is not narrow enough for the fluid column.
const VIEWPORT = { width: 1440, height: 900 };

// A word space is stretched to this many times its width before the letters
// of its line are let out instead.
const LOOSEST = 1.33;

/**
 * Runs in the proof view. Returns what lib/paginate.ts calls a Proof: the
 * lines of every text block and the height of every box, in points.
 * `textWidth` and `leading` (per kind of text) are what the paginator
 * assumes: a proof that is set otherwise is refused. `loosest` is LOOSEST.
 */
async function measure({ textWidth, leading, loosest }) {
  await document.fonts.ready;
  const proof = document.querySelector("[data-proof]");
  if (!proof) throw new Error("This page is not the proof view.");

  const failed = [...document.fonts].find((face) => face.status === "error");
  if (failed) throw new Error(`The font ${failed.family} did not load.`);
  const loaded = new Set(
    [...document.fonts]
      .filter((face) => face.status === "loaded")
      .map((face) => face.family.replace(/^["']|["']$/g, "")),
  );
  // The face a block is set in is the first of its font-family.
  const faceOf = (element) =>
    getComputedStyle(element).fontFamily.split(",")[0].replace(/["']/g, "");

  const ruler = document.createElement("div");
  ruler.style.width = "calc(var(--pt) * 100)";
  proof.append(ruler);
  const pt = ruler.getBoundingClientRect().width / 100;
  ruler.remove();
  const points = (px) => Math.round((px / pt) * 100) / 100;
  const width = points(proof.getBoundingClientRect().width);
  if (Math.abs(width - textWidth) > 0.05) {
    throw new Error(
      `The proof is ${width} pt wide, not the ${textWidth} pt of a page's text. Is the window narrower than 900 px?`,
    );
  }

  // An empty inline box stands on the baseline of the line it is in.
  const baseline = (element, where) => {
    const probe = document.createElement("span");
    probe.style.display = "inline-block";
    element[where](probe);
    const { bottom } = probe.getBoundingClientRect();
    probe.remove();
    return bottom;
  };

  // The lines of a text block. The line a character is on is the one its
  // box is centred in. Where a word is hyphenated the hyphen counts as a box
  // of the letters around it, so the last box is the letter's own. A space
  // dropped at a break has a box without width on either line, or none: it
  // ends the line before.
  const readLines = (element) => {
    const { block: id, kind } = element.dataset;
    const { top, height } = element.getBoundingClientRect();
    const pitch = parseFloat(getComputedStyle(element).lineHeight);
    if (!(Math.abs(pitch / pt - leading[kind]) <= 0.01)) {
      throw new Error(
        `${id}: set on ${points(pitch)} pt, paginated on ${leading[kind]} pt.`,
      );
    }
    const range = document.createRange();
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const starts = [0];
    let text = "";
    for (let node; (node = walker.nextNode()); ) {
      for (let i = 0; i < node.length; i++) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const boxes = [...range.getClientRects()];
        const box = boxes.findLast(({ width }) => width > 0) ?? boxes[0];
        const line = box
          ? Math.floor(((box.top + box.bottom) / 2 - top) / pitch)
          : starts.length - 1;
        if (line === starts.length) starts.push(text.length + i);
        if (line >= starts.length) throw new Error(`${id}: a line is empty.`);
      }
      text += node.data;
    }
    // Every line is as tall as the leading, or the count above is off.
    if (Math.abs(height - starts.length * pitch) > 0.5) {
      throw new Error(
        `${id}: ${starts.length} lines are ${points(height)} pt tall, not ${starts.length} times ${leading[kind]} pt.`,
      );
    }
    for (let n = 1; n < starts.length; n++) {
      while (text[starts[n]] === " ") starts[n] += 1;
    }
    // A break between two Latin letters is one the browser hyphenated.
    return starts.map((start, n) => {
      const end = starts[n + 1] ?? text.length;
      const broken = /^\p{Script=Latin}{2}$/u.test(
        text.slice(end - 1, end + 1),
      );
      return broken ? [start, end, 1] : [start, end];
    });
  };

  // Forbids the browser to break the word around character `at` of a block.
  // False where it is forbidden already, or the word runs across markup.
  const unbreak = (element, at) => {
    const text = element.textContent;
    let start = at;
    let end = at;
    while (/\p{L}/u.test(text[start - 1] ?? "")) start -= 1;
    while (/\p{L}/u.test(text[end] ?? "")) end += 1;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let offset = 0;
    for (let node; (node = walker.nextNode()); offset += node.length) {
      if (start < offset || end > offset + node.length) continue;
      if (getComputedStyle(node.parentElement).hyphens === "manual") break;
      const range = document.createRange();
      range.setStart(node, start - offset);
      range.setEnd(node, end - offset);
      const word = document.createElement("span");
      word.style.hyphens = "manual";
      range.surroundContents(word);
      return true;
    }
    return false;
  };

  // Characters `start` to `end` of a block.
  const rangeOf = (element, start, end) => {
    const range = document.createRange();
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let offset = 0;
    for (let node; (node = walker.nextNode()); offset += node.length) {
      const last = offset + node.length;
      if (start >= offset && start < last) range.setStart(node, start - offset);
      if (end > offset && end <= last) range.setEnd(node, end - offset);
    }
    return range;
  };

  // How much tighter or looser than the rest each line of a block is set:
  // the --track of the styles. The proof sets running text as tight as a
  // line may be, which is where its lines were broken. A line that is too
  // long as the rest is set stays as tight as it must. One whose word spaces
  // would be stretched past `loosest` has its letters let out, as far as
  // they may be. A copy of each line is measured for it at all three.
  const tracked = (element, lines) => {
    const style = getComputedStyle(element);
    const limit = -Number(style.getPropertyValue("--track"));
    if (!limit) return lines;
    const { block: id } = element.dataset;
    const text = element.textContent;
    const column = parseFloat(style.width);
    const indent = parseFloat(style.textIndent);

    const copy = element.cloneNode(false);
    copy.style.cssText =
      "position: absolute; width: max-content; text-indent: 0; white-space: nowrap";
    element.after(copy);
    const widthAt = (track) => {
      copy.style.setProperty("--track", track);
      return copy.getBoundingClientRect().width;
    };
    copy.textContent = "n n";
    const pair = widthAt(0);
    copy.textContent = "nn";
    const space = pair - widthAt(0);

    const result = lines.map(([start, end, hyphen], n) => {
      const line = text.slice(start, end).trimEnd();
      copy.replaceChildren(
        rangeOf(element, start, start + line.length).cloneContents(),
        hyphen ? "\u2010" : "",
      );
      const [tight, normal, loose] = [-limit, 0, limit].map(widthAt);
      const room = column - (start === 0 ? indent : 0);
      if (tight > room + 0.5) {
        throw new Error(`${id}: line ${n + 1} is wider than its measure.`);
      }
      // What the word spaces of a justified line may take up between them.
      const spaces = line.split(" ").length - 1;
      const stretch = n < lines.length - 1 ? spaces * (loosest - 1) * space : 0;
      const spare = room - normal;
      const track =
        spare < 0
          ? Math.floor((spare * limit) / (normal - tight))
          : stretch > 0 && spare > stretch
            ? Math.floor(((spare - stretch) * limit) / (loose - normal))
            : 0;
      const clamped = Math.max(-limit, Math.min(limit, track));
      if (clamped) return [start, end, hyphen ?? 0, clamped];
      return hyphen ? [start, end, hyphen] : [start, end];
    });
    copy.remove();
    return result;
  };

  // A break the page must not have: the third in a row, one in a word that
  // has a hyphen of its own, or one that leaves fewer than three letters on
  // either side (the limit in the styles counts punctuation as well).
  const unwanted = (text, lines) =>
    lines.find(([, end, hyphen], n) => {
      const [before] = text.slice(0, end).match(/\S*$/);
      const [after] = text.slice(end).match(/^\S*/);
      const run = lines[n - 1]?.[2] && lines[n - 2]?.[2];
      const compound = /[-\u2010-\u2014]/.test(before + after);
      const stub =
        /(^|\P{L})\p{L}{1,2}$/u.test(before) ||
        /^\p{L}{1,2}(\P{L}|$)/u.test(after);
      return hyphen && (run || compound || stub);
    });

  // The lines of a block: the word an unwanted break is in is kept whole,
  // and the block is read again.
  const linesOf = (element) => {
    const { block: id } = element.dataset;
    if (!loaded.has(faceOf(element))) {
      throw new Error(`${id}: the font ${faceOf(element)} did not load.`);
    }
    for (;;) {
      const lines = readLines(element);
      const broken = unwanted(element.textContent, lines);
      if (!broken) return tracked(element, lines);
      if (!unbreak(element, broken[1])) {
        throw new Error(
          `${id}: the word at character ${broken[1]} runs across markup and cannot be kept whole.`,
        );
      }
    }
  };

  const blocks = [...proof.querySelectorAll("[data-block]")].map((element) => {
    const { block: id, kind, box } = element.dataset;
    const { height } = element.getBoundingClientRect();
    return box
      ? { id, kind: box, height: points(height) }
      : { id, kind, lines: linesOf(element) };
  });

  // The footnotes are the paragraph in the foot of the sheet the proof is on.
  const footnotes = document.querySelector("footer p");
  const rise = baseline(footnotes, "append") - baseline(footnotes, "prepend");

  return { hash: proof.dataset.proof, footnotes: points(rise), blocks };
}

/** Opens `url` in headless Chrome and returns what `fn(argument)` returns there. */
async function evaluateIn(url, fn, argument) {
  const profile = mkdtempSync(path.join(tmpdir(), "typeset-"));
  const chrome = spawn(
    CHROME,
    [
      "--headless=new",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--use-mock-keychain",
      `--user-data-dir=${profile}`,
      "--remote-debugging-port=0",
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  try {
    const endpoint = await new Promise((resolve, reject) => {
      let log = "";
      chrome.on("error", reject);
      chrome.on("exit", () => reject(new Error("Chrome did not start.")));
      chrome.stderr.on("data", (chunk) => {
        log += chunk;
        const match = log.match(/DevTools listening on (ws:\/\/\S+)/);
        if (match) resolve(match[1]);
      });
    });
    const socket = new WebSocket(endpoint);
    await new Promise((resolve) =>
      socket.addEventListener("open", resolve, { once: true }),
    );

    let lastId = 0;
    const pending = new Map();
    const waiting = new Map();
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      const reply = pending.get(message.id);
      if (reply) {
        pending.delete(message.id);
        if (message.error) reply.reject(new Error(message.error.message));
        else reply.resolve(message.result);
      }
      waiting.get(message.method)?.(message.params);
    });
    const send = (method, params, sessionId) =>
      new Promise((resolve, reject) => {
        const id = ++lastId;
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params, sessionId }));
      });
    const event = (method) =>
      new Promise((resolve) => waiting.set(method, resolve));

    const { targetId } = await send("Target.createTarget", {
      url: "about:blank",
    });
    const { sessionId } = await send("Target.attachToTarget", {
      targetId,
      flatten: true,
    });
    await send("Page.enable", {}, sessionId);
    await send(
      "Emulation.setDeviceMetricsOverride",
      { ...VIEWPORT, deviceScaleFactor: 1, mobile: false },
      sessionId,
    );
    const loaded = event("Page.loadEventFired");
    const { errorText } = await send("Page.navigate", { url }, sessionId);
    if (errorText) {
      throw new Error(`${url}: ${errorText}. Is the server running?`);
    }
    const late = new Promise((_, reject) => {
      const fail = () => reject(new Error(`${url} did not load in a minute.`));
      setTimeout(fail, 60_000).unref();
    });
    await Promise.race([loaded, late]);
    const { result, exceptionDetails } = await send(
      "Runtime.evaluate",
      {
        expression: `(${fn})(${JSON.stringify(argument)})`,
        awaitPromise: true,
        returnByValue: true,
      },
      sessionId,
    );
    if (exceptionDetails) {
      const { exception, text } = exceptionDetails;
      throw new Error(exception?.description ?? text);
    }
    socket.close();
    return result.value;
  } finally {
    chrome.removeAllListeners("exit");
    chrome.kill("SIGKILL");
    // Chrome may still be writing to its profile as it dies.
    rmSync(profile, { recursive: true, force: true, maxRetries: 10 });
  }
}

/** One piece per line, so a change of layout reads as a change of lines. */
function serialize({ hash, pages }) {
  const list = (items, indent) => items.join(`,\n${indent}`);
  const page = (pieces) =>
    `[\n   ${list(pieces.map((piece) => JSON.stringify(piece)), "   ")}\n  ]`;
  return [
    "{",
    ` "hash": ${JSON.stringify(hash)},`,
    ' "pages": [',
    `  ${list(pages.map(page), "  ")}`,
    " ]",
    "}",
    "",
  ].join("\n");
}

const proof = await evaluateIn(`${ORIGIN}/proof`, measure, {
  textWidth: PAGE.textWidth,
  leading: LEADING,
  loosest: LOOSEST,
});
const { layout, fills } = paginate(proof);
writeFileSync(OUTPUT, serialize(layout));

// Per column, the lines left empty under the text; then the floats on the page.
fills.forEach(({ floats, free }, i) => {
  const columns = free.map((lines) =>
    lines === null ? "no text" : `${lines} free`,
  );
  console.log(`page ${i + 1}: ${[...columns, ...floats].join(", ")}`);
});
console.log(`Wrote ${path.relative(process.cwd(), OUTPUT)}`);
