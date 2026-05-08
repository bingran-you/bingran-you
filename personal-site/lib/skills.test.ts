import { describe, expect, it } from "vitest";
import { SKILL_CATEGORIES, inferCategory } from "./skills";

describe("inferCategory", () => {
  it("classifies html-ppt-* slugs as Slides & Decks", () => {
    expect(inferCategory("html-ppt-pitch-deck")).toBe("Slides & Decks");
    expect(inferCategory("html-ppt-weekly-report")).toBe("Slides & Decks");
  });

  it("classifies named slide skills as Slides & Decks", () => {
    expect(inferCategory("simple-deck")).toBe("Slides & Decks");
    expect(inferCategory("frontend-slides")).toBe("Slides & Decks");
  });

  it("classifies document skills", () => {
    expect(inferCategory("docx")).toBe("Documents");
    expect(inferCategory("pdf")).toBe("Documents");
    expect(inferCategory("pptx")).toBe("Documents");
    expect(inferCategory("xlsx")).toBe("Documents");
    expect(inferCategory("invoice")).toBe("Documents");
  });

  it("classifies web-prototype-* slugs as Apps & Web", () => {
    expect(inferCategory("web-prototype")).toBe("Apps & Web");
    expect(inferCategory("web-prototype-taste-soft")).toBe("Apps & Web");
  });

  it("classifies playwright-* slugs as Browser & Testing", () => {
    expect(inferCategory("playwright")).toBe("Browser & Testing");
    expect(inferCategory("playwright-cli")).toBe("Browser & Testing");
    expect(inferCategory("playwright-interactive")).toBe("Browser & Testing");
  });

  it("classifies media skills", () => {
    expect(inferCategory("video")).toBe("Media");
    expect(inferCategory("image-poster")).toBe("Media");
    expect(inferCategory("audio-jingle")).toBe("Media");
  });

  it("classifies review/plan skills", () => {
    expect(inferCategory("review")).toBe("Reviews & Plans");
    expect(inferCategory("design-review")).toBe("Reviews & Plans");
    expect(inferCategory("plan-eng-review")).toBe("Reviews & Plans");
  });

  it("classifies security skills", () => {
    expect(inferCategory("security-best-practices")).toBe("Security");
    expect(inferCategory("cso")).toBe("Security");
    expect(inferCategory("skill-vetter")).toBe("Security");
  });

  it("classifies research skills", () => {
    expect(inferCategory("deep-research")).toBe("Research & Analysis");
    expect(inferCategory("equity-investment-memo")).toBe("Research & Analysis");
  });

  it("classifies design system skills", () => {
    expect(inferCategory("frontend-design")).toBe("Design Systems");
    expect(inferCategory("theme-factory")).toBe("Design Systems");
    expect(inferCategory("design-shotgun")).toBe("Design Systems");
  });

  it("classifies marketing skills", () => {
    expect(inferCategory("ad-creative")).toBe("Marketing & Growth");
    expect(inferCategory("seo-audit")).toBe("Marketing & Growth");
    expect(inferCategory("xiaohongshu-knowledge")).toBe("Marketing & Growth");
  });

  it("classifies engineering skills", () => {
    expect(inferCategory("ship")).toBe("Engineering");
    expect(inferCategory("careful")).toBe("Engineering");
    expect(inferCategory("vercel-deploy")).toBe("Engineering");
    expect(inferCategory("gh-fix-ci")).toBe("Engineering");
  });

  it("falls back to Other for unknown slugs", () => {
    expect(inferCategory("totally-novel-skill")).toBe("Other");
    expect(inferCategory("zzz")).toBe("Other");
  });

  it("returns a value from SKILL_CATEGORIES for any input", () => {
    const samples = ["html-ppt-foo", "playwright-bar", "unknown", ""];
    for (const slug of samples) {
      const cat = inferCategory(slug);
      expect(SKILL_CATEGORIES).toContain(cat);
    }
  });
});
