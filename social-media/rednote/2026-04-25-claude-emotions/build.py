#!/usr/bin/env python3
"""Render Xiaohongshu cards from HTML templates using Playwright.

Output: 1080×1440 PNG cards.
"""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).parent
HTML_DIR = ROOT / "html"
OUT_DIR = ROOT / "output"
OUT_DIR.mkdir(exist_ok=True)

W, H = 1080, 1440


async def render(html_files):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        ctx = await browser.new_context(
            viewport={"width": W, "height": H},
            device_scale_factor=2,
        )
        page = await ctx.new_page()
        for hf in html_files:
            url = f"file://{hf.resolve()}"
            await page.goto(url, wait_until="networkidle")
            out = OUT_DIR / (hf.stem + ".png")
            await page.screenshot(path=str(out), full_page=False, omit_background=False)
            print(f"  {out.name}")
        await browser.close()


def main():
    files = sorted(HTML_DIR.glob("card-*.html"))
    print(f"Rendering {len(files)} cards…")
    asyncio.run(render(files))
    print("Done.")


if __name__ == "__main__":
    main()
