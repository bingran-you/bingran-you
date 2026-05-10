type IconProps = { className?: string };

// Lucide-style icons — single-stroke, 1.5px, currentColor. Sized to cap
// height of the surrounding text via className.
const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LaptopIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} aria-hidden className={className}>
      <rect x="3" y="5" width="18" height="11" rx="1.5" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function AtomIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} aria-hidden className={className}>
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} aria-hidden className={className}>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} aria-hidden className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} aria-hidden className={className}>
      <path d="M15 3h6v6" />
      <line x1="10" y1="14" x2="21" y2="3" />
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
