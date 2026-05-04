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

const PRIORITIES = [
  { id: "sentinel", label: "Aegis Sentinel — runtime hygiene" },
  { id: "attest", label: "Aegis Attest — web/tool attestation" },
  { id: "cleanse", label: "Aegis Cleanse — memory hygiene" },
  { id: "securebench", label: "SecureBench — adversarial benchmark" },
  { id: "all", label: "Not sure yet — recommend one" },
] as const;

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [surfaces, setSurfaces] = useState<string[]>([]);
  const [priority, setPriority] = useState<string>("all");
  const [stack, setStack] = useState("");
  const [notes, setNotes] = useState("");

  function toggleSurface(id: string) {
    setSurfaces((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function buildMailto() {
    const subject = `Aegis early-access — ${org || name || "applicant"}`;
    const surfaceList = SURFACES.filter((s) =>
      surfaces.includes(s.id),
    ).map((s) => `  - ${s.label}`).join("\n") || "  (none specified)";
    const priorityLabel =
      PRIORITIES.find((p) => p.id === priority)?.label ?? "(not specified)";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org}`,
      `Role: ${role}`,
      "",
      "Attack surfaces in scope:",
      surfaceList,
      "",
      `Priority Aegis layer: ${priorityLabel}`,
      "",
      "Current agent stack:",
      stack || "(not specified)",
      "",
      "Anything else:",
      notes || "(none)",
      "",
      "—",
      "Submitted via aegis waitlist · bingranyou.com/aegis/waitlist",
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

      <Field label="Which Aegis layer interests you most?">
        <div className="grid gap-2">
          {PRIORITIES.map((p) => (
            <label
              key={p.id}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm transition"
              style={{
                border:
                  priority === p.id
                    ? "1px solid var(--ag-amber)"
                    : "1px solid var(--ag-line)",
                background:
                  priority === p.id
                    ? "var(--ag-amber-soft)"
                    : "var(--ag-canvas-2)",
                color: "var(--ag-fg)",
              }}
            >
              <input
                type="radio"
                name="priority"
                value={p.id}
                checked={priority === p.id}
                onChange={() => setPriority(p.id)}
                className="sr-only"
              />
              <span
                className="inline-block h-3 w-3 shrink-0 rounded-full"
                style={{
                  border:
                    priority === p.id
                      ? "1px solid var(--ag-amber)"
                      : "1px solid var(--ag-line-strong)",
                  background: priority === p.id ? "var(--ag-amber)" : "transparent",
                }}
              />
              {p.label}
            </label>
          ))}
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

      <Field label="Anything else we should know?">
        <textarea
          className="ag-input"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="A specific incident, a deadline, a constraint, a colleague we should talk to."
        />
      </Field>

      <div
        className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between"
      >
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
