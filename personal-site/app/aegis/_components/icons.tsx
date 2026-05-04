type IconProps = { className?: string; size?: number };

const baseProps = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

export function ShieldIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M12 3l8 3.2v6.4c0 4.6-3.4 8.6-8 9.4-4.6-.8-8-4.8-8-9.4V6.2L12 3z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </svg>
  );
}

export function TerminalIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </svg>
  );
}

export function GlobeIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

export function MemoryIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 6v12M11 6v12M15 6v12M19 6v12" />
      <path d="M3 10h2M3 14h2M19 10h2M19 14h2" />
    </svg>
  );
}

export function GaugeIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M3.6 17a9 9 0 1 1 16.8 0" />
      <path d="M12 12l4-3" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function BoltIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function EyeIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function LinkIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 10-5.66-5.66l-1.5 1.5" />
      <path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1.5-1.5" />
    </svg>
  );
}

export function ArrowRight({ className, size = 14 }: IconProps) {
  return (
    <svg {...baseProps(size, className)} viewBox="0 0 14 14">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export function CheckIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M5 12.5l4 4L19 6" />
    </svg>
  );
}

export function DotIcon({ className, size = 6 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 6 6" className={className}>
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  );
}

export function PlusIcon({ className, size = 14 }: IconProps) {
  return (
    <svg {...baseProps(size, className)} viewBox="0 0 14 14">
      <path d="M7 1v12M1 7h12" />
    </svg>
  );
}

export function CpuIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export function LockIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}

export function FlaskIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M9 3v6L4 19a2 2 0 002 3h12a2 2 0 002-3l-5-10V3" />
      <path d="M8 3h8" />
      <path d="M7 14h10" />
    </svg>
  );
}
