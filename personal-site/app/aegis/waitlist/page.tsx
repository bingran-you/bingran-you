import type { Metadata } from "next";
import { PageHero } from "../_components/page-hero";
import { WaitlistForm } from "./_form";
import { CheckIcon, ShieldIcon } from "../_components/icons";

export const metadata: Metadata = {
  title: "Send us your incident",
  description:
    "First 50 partners. Sanitized log in. Forensic report in 48 hours. New attack class lands in the public threat catalog. That&rsquo;s the deal.",
  alternates: { canonical: "/aegis/waitlist" },
};

const RETURNS = [
  {
    title: "A forensic report in 48 hours",
    body: "Within two business days you get a signed, deterministic incident bundle: what the agent reached, what it touched, what it tried to write or send, and where the policy boundary was crossed.",
  },
  {
    title: "The CLI binary, plus a hardening review",
    body: "We sit with your team for an hour, walk your stack, and produce a written hardening review. Every recommendation has a reproducer.",
  },
  {
    title: "Direct line to the builder",
    body: "Shared Slack. Bug fixes ship the same day. Roadmap moves on what you actually need. No support queue, no SLA — until we earn one.",
  },
  {
    title: "Co-authored case study (or not)",
    body: "When the work&rsquo;s done, you decide whether we publish. Public case study, private playbook with a public threat-catalog entry, or nothing at all. Your call, every time.",
  },
];

const QUALIFY = [
  "You ship an agent that interacts with the open web, third-party tools, or persistent memory.",
  "You can dedicate ~2h/week of an engineer or security lead for 4 weeks.",
  "You have, or can produce, one redacted log of an agent run from your last week.",
  "You&rsquo;re willing to share enough about a redacted incident that we can shape SecureBench around it.",
];

export default function WaitlistPage() {
  return (
    <>
      <PageHero
        eyebrow="The deal"
        title={
          <>
            Send us your incident.{" "}
            <span className="ag-text-amber italic">
              We send back a forensic report in 48 hours.
            </span>
          </>
        }
        lead={
          <>
            First 50 partners. Sanitized log in, signed bundle out. New attack
            class lands in the public threat catalog (with or without your
            name &mdash; your call). It&rsquo;s reciprocal: you get
            deterministic evidence for your auditor; we get a real incident,
            the catalog gets smarter.
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
                Tell us about your incident, or the agent you&rsquo;re afraid of.
              </h2>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--ag-fg-mute)" }}
              >
                Submitting opens an email draft addressed to the founders &mdash;
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
                  What you get back
                </h3>
                <ul className="mt-5 space-y-4">
                  {RETURNS.map((b) => (
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
                      <span dangerouslySetInnerHTML={{ __html: q }} />
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
                  We respond within 3 business days. Forensic report within 48
                  hours of receiving your sanitized log.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
