import Link from "next/link";
import { NAV, PERSON, SITE_HOST, SOCIALS } from "@/lib/site";
import styles from "./article.module.css";

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 12 9" aria-hidden className={styles.envelope}>
      <rect
        x="0.5"
        y="0.5"
        width="11"
        height="8"
        fill="none"
        stroke="currentColor"
      />
      <path d="M0.5 0.5 6 5l5.5-4.5" fill="none" stroke="currentColor" />
    </svg>
  );
}

/** The e-mail address and the profile links, as the footnote of a title page. */
function Contacts() {
  return (
    <>
      <EnvelopeIcon />
      e-mail:{" "}
      <a href={`mailto:${PERSON.email}`} className={styles.link}>
        {PERSON.email}
      </a>
      .{" "}
      {SOCIALS.map((social, i) => (
        <span key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {social.label}
          </a>
          {i < SOCIALS.length - 1 ? "; " : "."}
        </span>
      ))}
    </>
  );
}

type SheetProps = {
  /** 1-based. Odd pages are left-hand pages; page 1 also carries the navigation. */
  page?: number;
  /** Route this sheet belongs to, to mark it in the navigation. */
  current: string;
  children: React.ReactNode;
};

/**
 * One sheet of paper: margin rule, head rule, content, page number. The whole
 * site is set as one article, so every left-hand page is headed alike and the
 * first page carries the contacts as its footnote.
 */
export function Sheet({ page = 1, current, children }: SheetProps) {
  const first = page === 1;
  const recto = page % 2 === 0;
  const year = new Date().getFullYear();

  const number = <b key="page">{page}</b>;
  const imprint = [
    <span key="host">
      <Link href="/" className={styles.link}>
        {SITE_HOST}
      </Link>
    </span>,
    <span key="copyright">
      © {year} {PERSON.name}
    </span>,
    <span key="location">{PERSON.location}</span>,
  ];

  return (
    <div className={styles.sheet}>
      <div className={recto ? `${styles.page} ${styles.recto}` : styles.page}>
        {recto ? null : (
          <header className={styles.runningHead}>
            <p className={styles.kind}>Article</p>
            {first ? (
              <nav aria-label="Primary" className={styles.nav}>
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={item.href === current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            ) : null}
          </header>
        )}

        {children}

        <footer className={styles.footer}>
          {first ? (
            <p className={styles.footnotes}>
              <Contacts />
            </p>
          ) : null}
          <p className={styles.folio}>
            {recto ? [...imprint, number] : [number, ...imprint]}
          </p>
        </footer>
      </div>
    </div>
  );
}
