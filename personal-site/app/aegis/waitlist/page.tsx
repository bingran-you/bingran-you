import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero";
import { WaitlistForm } from "./_form";
import { CheckIcon, ShieldIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Apply to become an Aegis early-access partner. Twelve teams in 2026 — verifiable security evidence in a week.",
  alternates: { canonical: "/aegis/waitlist" },
};

const BENEFITS = [
  {
    title: "First-cohort tooling",
    body: "Sentinel binary, Cleanse policy starter kit, and a sealed SecureBench run for your stack.",
  },
  {
    title: "A hardening review",
    body: "We sit with your team and produce a written risk audit of your current agent stack — your stack, your threat model.",
  },
  {
    title: "Direct line to the builders",
    body: "Shared Slack with the Aegis team. Bug fixes ship the same day. Roadmap moves on what you actually need.",
  },
  {
    title: "Co-authored case study",
    body: "When the work&rsquo;s done, you decide whether we publish — and on what terms. Public case study, private playbook, or both.",
  },
];

const QUALIFY = [
  "You ship an agent that interacts with the open web, third-party tools, or persistent memory.",
  "You can dedicate ~2h/week of an engineer or security lead for 4 weeks.",
  "You can run a single binary or attach a process supervisor to your agent runtime.",
  "You&rsquo;re willing to share a redacted incident or threat model that helped us shape SecureBench.",
];

export default function WaitlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Early access"
        title={
          <>
            Twelve teams in 2026.{" "}
            <span className="ag-text-amber italic">
              Verifiable evidence in a week.
            </span>
          </>
        }
        lead={
          <>
            Aegis is in private research preview. Tell us about your stack and
            your threat surface — we&rsquo;ll come back with a one-page
            proposal: which Aegis layer to start with, what we&rsquo;ll
            instrument, and what evidence you&rsquo;ll have to show after
            week one.
          </>
        }
      />

      <section className="ag-section">
        <div className="ag-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="ag-card p-8 lg:p-10">
              <p className="ag-eyebrow">Apply</p>
              <h2
                className="ag-display mt-5"
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2rem)",
                  letterSpacing: "-0.018em",
                }}
              >
                Tell us what your agent touches.
              </h2>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Submitting opens an email draft addressed to the Aegis team —
                no servers, no analytics, no wait. Edit it before you send.
              </p>
              <WaitlistForm />
            </div>

            <aside className="space-y-6">
              <div className="ag-card p-8">
                <ShieldIcon size={28} className="ag-text-amber" />
                <h3
                  className="ag-display mt-5"
                  style={{ fontSize: "1.4rem", letterSpacing: "-0.015em" }}
                >
                  What partners get
                </h3>
                <ul className="mt-5 space-y-4">
                  {BENEFITS.map((b) => (
                    <li key={b.title} className="flex items-start gap-3">
                      <CheckIcon
                        size={14}
                        className="mt-[5px] shrink-0 ag-text-amber"
                      />
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--ag-fg)" }}
                        >
                          {b.title}
                        </p>
                        <p
                          className="mt-1 text-sm leading-relaxed"
                          style={{ color: "var(--ag-fg-mute)" }}
                        >
                          {b.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ag-card p-8">
                <p
                  className="ag-mono text-[11px] tracking-[0.28em]"
                  style={{ color: "var(--ag-fg-faint)" }}
                >
                  WHO QUALIFIES
                </p>
                <ul
                  className="mt-5 space-y-2.5 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  {QUALIFY.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="ag-mono mt-[2px] text-[11px]"
                        style={{ color: "var(--ag-fg-faint)" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{ __html: q }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-6"
                style={{
                  border: "1px solid var(--ag-line-amber)",
                  background: "var(--ag-amber-soft)",
                }}
              >
                <p
                  className="ag-mono text-[11px] tracking-[0.28em]"
                  style={{ color: "var(--ag-amber)" }}
                >
                  RESPONSE WINDOW
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--ag-fg)" }}
                >
                  We respond within 3 business days. Cohorts close on the 1st
                  and 15th of each month.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
