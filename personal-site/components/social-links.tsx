const links = [
  { href: "https://x.com/bingran_bry", label: "X" },
  {
    href: "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en",
    label: "Scholar",
  },
  { href: "https://orcid.org/0000-0002-0316-2115", label: "ORCID" },
  { href: "https://github.com/bingran-you", label: "GitHub" },
  { href: "https://huggingface.co/bingran-you", label: "🤗" },
  {
    href: "https://www.linkedin.com/in/bingran-you-775b4017b/",
    label: "LinkedIn",
  },
  { href: "mailto:bingran.bry@gmail.com", label: "Email" },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-foreground transition"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
