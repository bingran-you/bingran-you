import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOSTS = new Set([
  "bingran.ai",
  "www.bingran.ai",
  "bingranyou.com",
  "www.bingranyou.com",
]);

export function proxy(req: NextRequest) {
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
