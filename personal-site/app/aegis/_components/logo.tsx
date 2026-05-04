type LogoProps = {
  className?: string;
  size?: number;
};

export function AegisMark({ className, size = 22 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id="aegis-mark-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F4D055" />
          <stop offset="100%" stopColor="#F0B90B" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5l11.5 4.4v8.6c0 6.7-4.7 12.7-11.5 14-6.8-1.3-11.5-7.3-11.5-14V6.9L16 2.5z"
        fill="url(#aegis-mark-grad)"
        opacity="0.16"
      />
      <path
        d="M16 2.5l11.5 4.4v8.6c0 6.7-4.7 12.7-11.5 14-6.8-1.3-11.5-7.3-11.5-14V6.9L16 2.5z"
        fill="none"
        stroke="url(#aegis-mark-grad)"
        strokeWidth="1.4"
      />
      <path
        d="M16 9v14M9.4 12.6l13.2 6.8M22.6 12.6L9.4 19.4"
        stroke="url(#aegis-mark-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.78"
      />
      <circle cx="16" cy="16" r="2.4" fill="url(#aegis-mark-grad)" />
    </svg>
  );
}

export function AegisWordmark({
  className,
  showMark = true,
}: {
  className?: string;
  showMark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className ?? ""}`}
      aria-label="Aegis"
    >
      {showMark ? <AegisMark size={20} /> : null}
      <span
        className="ag-mono"
        style={{
          fontSize: 13,
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "var(--ag-fg)",
        }}
      >
        Aegis
      </span>
    </span>
  );
}
