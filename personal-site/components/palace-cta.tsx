// The "Enter the Memory Palace" button. Its markup and class list are fixed:
// the look comes from .palace-cta in app/globals.css, and .palace-cta-slot
// pins everything the button would otherwise inherit from its surroundings.
// It is a plain anchor because /palace is a static document served by a
// rewrite: the router can neither prefetch it nor navigate to it.
export function PalaceCta() {
  return (
    <span className="palace-cta-slot">
      <a
        href="/palace"
        className="palace-cta inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]"
      >
        <span aria-hidden className="relative inline-flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-[var(--accent)]" />
          <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-70" />
        </span>
        Enter the Memory Palace
        <span aria-hidden>→</span>
      </a>
    </span>
  );
}
