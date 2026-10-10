import Link from "next/link";
import { TRACK_LABEL } from "@/lib/content";
import { AFFILIATIONS, PERSON, SITE_URL } from "@/lib/site";
import styles from "./article.module.css";

/**
 * Front matter of a title page: the fact rows on the left; the byline, the
 * position and the affiliations on the right. `action` becomes one more row
 * under the facts.
 */
export function Front({ action }: { action?: React.ReactNode }) {
  return (
    <div className={styles.front}>
      <ul className={styles.meta}>
        <li>
          <Link href="/" className={styles.link}>
            {SITE_URL}
          </Link>
        </li>
        <li>
          <a href={`mailto:${PERSON.email}`} className={styles.link}>
            {PERSON.email}
          </a>
        </li>
        <li>{PERSON.location}</li>
        {action ? <li className={styles.action}>{action}</li> : null}
      </ul>

      <div>
        <p className={styles.byline}>
          {TRACK_LABEL.ai} | {TRACK_LABEL.ion}
        </p>
        <div className={styles.lead}>
          <p>{PERSON.position}</p>
          {AFFILIATIONS.map((affiliation) => (
            <p key={affiliation.href}>
              <a
                href={affiliation.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {affiliation.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
