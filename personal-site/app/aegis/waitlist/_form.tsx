"use client";

import { useState } from "react";
import { ArrowRight } from "../_components/icons";

const SURFACES = [
  { id: "web", label: "Open web (browser-use, fetch, scraping)" },
  { id: "tools", label: "Third-party tools (MCP, npm, pip)" },
  { id: "memory", label: "Persistent memory (vector / SQL / file)" },
  { id: "operator", label: "Operator privileges (shell, mailbox, files)" },
  { id: "multi", label: "Multi-agent orchestration" },
] as const;

const INTENT = [
  {
    id: "incident",
    label: "I have a redacted incident log — audit it.",
  },
  {
    id: "preflight",
    label: "I&rsquo;m about to give an agent more reach. Audit my stack.",
  },
  {
    id: "framework",
    label: "I&rsquo;m an agent framework / platform team. Let&rsquo;s integrate.",
  },
  {
    id: "research",
    label: "I&rsquo;m a security researcher / red-teamer. Let&rsquo;s collaborate.",
  },
  {
    id: "watch",
    label: "Just watching for now &mdash; keep me on the list.",
  },
] as const;

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [surfaces, setSurfaces] = useState<string[]>([]);
  const [intent, setIntent] = useState<string>("incident");
  const [stack, setStack] = useState("");
  const [notes, setNotes] = useState("");

  function toggleSurface(id: string) {
    setSurfaces((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function buildMailto() {
    const intentText =
      INTENT.find((i) => i.id === intent)?.label.replace(/&rsquo;/g, "'").replace(/&mdash;/g, "—") ??
      "(not specified)";
    const subject = `Aegis early-access — ${org || name || "applicant"} — ${intent}`;
    const surfaceList = SURFACES.filter((s) =>
      surfaces.includes(s.id),
    ).map((s) => `  - ${s.label}`).join("\n") || "  (none specified)";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org}`,
      `Role: ${role}`,
      "",
      `What I want: ${intentText}`,
      "",
      "Attack surfaces in scope:",
      surfaceList,
      "",
      "Current agent stack:",
      stack || "(not specified)",
      "",
      "Anything else (incident summary, deadline, constraint):",
      notes || "(none)",
      "",
      "—",
      "Submitted via aegis · bingranyou.com/aegis/waitlist",
    ].join("\n");

    return `mailto:bingran.you@berkeley.edu?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = buildMailto();
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required>
          <input
            className="ag-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Bingran You"
            required
          />
        </Field>
        <Field label="Email" required>
          <input
            className="ag-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organization">
          <input
            className="ag-input"
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="Acme · UC Berkeley · independent"
          />
        </Field>
        <Field label="Role">
          <input
            className="ag-input"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Security lead · Agent eng · Researcher"
          />
        </Field>
      </div>

      <Field label="What do you want from this?">
        <div className="grid gap-2">
          {INTENT.map((p) => (
            <label
              key={p.id}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm transition"
              style={{
                border:
                  intent === p.id
                    ? "1px solid var(--ag-amber)"
                    : "1px solid var(--ag-line)",
                background:
                  intent === p.id
                    ? "var(--ag-amber-soft)"
                    : "var(--ag-canvas-2)",
                color: "var(--ag-fg)",
              }}
            >
              <input
                type="radio"
                name="intent"
                value={p.id}
                checked={intent === p.id}
                onChange={() => setIntent(p.id)}
                className="sr-only"
              />
              <span
                className="inline-block h-3 w-3 shrink-0 rounded-full"
                style={{
                  border:
                    intent === p.id
                      ? "1px solid var(--ag-amber)"
                      : "1px solid var(--ag-line-strong)",
                  background: intent === p.id ? "var(--ag-amber)" : "transparent",
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: p.label }} />
            </label>
          ))}
        </div>
      </Field>

      <Field label="What does your agent touch? (pick all)">
        <div className="grid gap-2 sm:grid-cols-2">
          {SURFACES.map((s) => {
            const active = surfaces.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggleSurface(s.id)}
                className="flex items-start gap-3 rounded-xl px-4 py-3 text-left text-sm transition"
                style={{
                  border: active
                    ? "1px solid var(--ag-amber)"
                    : "1px solid var(--ag-line)",
                  background: active
                    ? "var(--ag-amber-soft)"
                    : "var(--ag-canvas-2)",
                  color: "var(--ag-fg)",
                }}
              >
                <span
                  className="mt-[3px] inline-block h-3 w-3 shrink-0 rounded-sm"
                  style={{
                    border: active
                      ? "1px solid var(--ag-amber)"
                      : "1px solid var(--ag-line-strong)",
                    background: active ? "var(--ag-amber)" : "transparent",
                  }}
                />
                {s.label}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Current agent stack (one line)">
        <input
          className="ag-input"
          type="text"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          placeholder="OpenAI Agents SDK · pgvector · Mem0 · MCP"
        />
      </Field>

      <Field label="Incident summary, or anything else we should know">
        <textarea
          className="ag-input"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Sanitized version: which agent, what surface, what went wrong (or what you&rsquo;re afraid of). Plus any deadlines or constraints."
        />
      </Field>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="ag-mono text-[11px] tracking-[0.18em]"
          style={{ color: "var(--ag-fg-faint)" }}
        >
          → Opens your email client. We never log this form.
        </p>
        <button type="submit" className="ag-btn ag-btn-primary">
          Send application
          <ArrowRight className="ag-btn-arrow" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="ag-mono text-[11px] tracking-[0.24em]"
        style={{
          color: "var(--ag-fg-mute)",
          textTransform: "uppercase",
        }}
      >
        {label}
        {required ? (
          <span style={{ color: "var(--ag-amber)" }}> *</span>
        ) : null}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
