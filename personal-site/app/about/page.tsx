import type { Metadata } from "next";
import { education } from "@/lib/content";
import { jsonLdScriptContent } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bingran You — PhD candidate at UC Berkeley working on reliable AI systems and trapped-ion experiments in atomic, molecular and optical physics.",
  alternates: { canonical: "/about" },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://bingranyou.com/about",
  mainEntity: {
    "@type": "Person",
    name: "Bingran You",
    url: "https://bingranyou.com",
    jobTitle: "PhD Candidate",
    description:
      "PhD candidate at UC Berkeley building reliable AI systems and running trapped-ion experiments in atomic, molecular and optical physics.",
    affiliation: {
      "@type": "Organization",
      name: "Haeffner Lab, University of California, Berkeley",
      url: "https://haeffnerlab.berkeley.edu/",
    },
    knowsAbout: [
      "Reliable AI Systems",
      "AI Agents",
      "Atomic, Molecular and Optical Physics",
      "Trapped Ions",
      "Integrated Photonics",
      "Ion-Photon Interfaces",
    ],
    sameAs: [
      "https://www.wikidata.org/wiki/Q139620371",
      "https://x.com/bingran_bry",
      "https://github.com/bingran-you",
      "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
      "https://orcid.org/0000-0002-0316-2115",
      "https://huggingface.co/bingran-you",
      "https://www.linkedin.com/in/bingran-you-775b4017b/",
      "https://www.youtube.com/@BingranBRY",
    ],
  },
};

const facts = [
  "I am Bingran You, a PhD candidate in Applied Science & Technology at UC Berkeley, advised in the Haeffner Lab.",
  "I build reliable AI systems — agent infrastructure, evaluation harnesses, and applied AI products that need to behave under noisy real-world conditions.",
  "I run trapped-ion experiments in atomic, molecular and optical physics — integrated photonics for individual ion addressing, ion-photon interfaces, and 3D-printed micro ion traps for scalable hardware.",
  "Both tracks share one craft: turning complex, noisy systems into something that behaves on purpose.",
];

const focusAreas = [
  {
    label: "AI Builder",
    items: [
      "Agent skills and tool use, with an emphasis on evaluation that mirrors real workflows.",
      "Productivity agents that triage notifications, dispatch background work, and stay out of the way.",
      "Open-source benchmarks for measuring agent capability and safety in simulated workspaces.",
    ],
  },
  {
    label: "Ion Trapper",
    items: [
      "Adjoint-optimized integrated photonic circuits for individual trapped-ion addressing.",
      "Temporally multiplexed ion-photon interfaces via fast ion-chain transport.",
      "3D-printed micro ion trap technology for scalable atomic-physics platforms.",
      "Trapped-ion Ramsey interferometry probing fundamental physics of single-ion vibrational modes.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd),
        }}
      />

      <header>
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
          {facts.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </div>
      </header>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-6">
          Focus
        </h2>
        <div className="space-y-10">
          {focusAreas.map((area) => (
            <div key={area.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                {area.label}
              </p>
              <ul className="mt-3 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="py-4 text-base leading-relaxed text-[var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-6">
          Education
        </h2>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {education.map((item) => (
            <li
              key={`${item.institution}-${item.period}`}
              className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <span className="font-mono text-xs text-[var(--muted)] tabular-nums">
                {item.period}
              </span>
              <div>
                <p className="text-base font-medium">{item.institution}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {item.degree} · {item.location}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-6">
          Contact
        </h2>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)] text-sm">
          <li className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <span className="font-mono text-xs text-[var(--muted)]">Email</span>
            <a
              className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-foreground"
              href="mailto:bingran.you@berkeley.edu"
            >
              bingran.you@berkeley.edu
            </a>
          </li>
          <li className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <span className="font-mono text-xs text-[var(--muted)]">Lab</span>
            <a
              className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-foreground"
              href="https://haeffnerlab.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haeffner Lab, UC Berkeley
            </a>
          </li>
          <li className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <span className="font-mono text-xs text-[var(--muted)]">
              Elsewhere
            </span>
            <span className="text-[var(--muted)]">
              Profiles linked in the footer.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
