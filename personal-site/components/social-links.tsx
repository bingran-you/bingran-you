type IconProps = { className?: string };

// Lucide-style outlined icons for the connect bar — single-stroke, currentColor.
// Stroke 1.5 reads as airier than the 1.75 default and matches the rest of the
// system's iconography (per design bundle ui_kits/personal-site/icons.jsx).
const baseStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ScholarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <path d="M22 9L12 4 2 9l10 5 10-5z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5" />
      <line x1="22" y1="9" x2="22" y2="15" />
    </svg>
  );
}

function OrcidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="8" x2="8" y2="17" />
      <circle cx="8" cy="6" r="0.7" fill="currentColor" stroke="none" />
      <path d="M11 8h3.5a4.5 4.5 0 0 1 0 9H11z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BilibiliIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 4l3 3" />
      <path d="M16 4l-3 3" />
      <circle cx="9" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <path d="M5 7c2-1 4-1.5 7-1.5S17 6 19 7l1.5 9-3 2c-.7-.5-1.4-1.4-1.4-1.4-1 .8-2.5 1.4-4.1 1.4s-3.1-.6-4.1-1.4c0 0-.7.9-1.4 1.4l-3-2L5 7z" />
      <circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HuggingFaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XiaohongshuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
      >
        xhs
      </text>
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  );
}

function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...baseStroke}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const links = [
  { href: "https://github.com/bingran-you", label: "GitHub", icon: GitHubIcon },
  { href: "https://x.com/bingran_bry", label: "X", icon: XIcon },
  {
    href: "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
    label: "Scholar",
    icon: ScholarIcon,
  },
  {
    href: "https://orcid.org/0000-0002-0316-2115",
    label: "ORCID",
    icon: OrcidIcon,
  },
  {
    href: "https://huggingface.co/bingran-you",
    label: "Hugging Face",
    icon: HuggingFaceIcon,
  },
  {
    href: "https://xhslink.com/m/gFj0Vwr2Ak",
    label: "Xiaohongshu",
    icon: XiaohongshuIcon,
  },
  {
    href: "https://www.youtube.com/@BingranBRY",
    label: "YouTube",
    icon: YouTubeIcon,
  },
  {
    href: "https://space.bilibili.com/85906410",
    label: "Bilibili",
    icon: BilibiliIcon,
  },
  {
    href: "https://discord.gg/jsAnjCep",
    label: "Discord",
    icon: DiscordIcon,
  },
  {
    href: "https://www.linkedin.com/in/bingran-you-775b4017b/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  { href: "mailto:me@bingranyou.com", label: "Email", icon: EmailIcon },
];

// Editorial connect bar — bordered mono badges. Border stays hairline at rest;
// hover inverts (paper text on ink fill, ink border) per design system spec
// for footer connect grid (ui_kits/personal-site/site.css `.connect a:hover`).
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <li key={href}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="connect-badge"
          >
            <Icon className="h-[14px] w-[14px]" />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
