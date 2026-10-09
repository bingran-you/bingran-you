import type { Metadata } from "next";
import Image from "next/image";
import { EducationTable } from "@/components/article/blocks";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { education, TRACK_LABEL } from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import { PERSON, SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bingran You — PhD candidate at UC Berkeley working on reliable AI systems and trapped-ion experiments in atomic, molecular and optical physics.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const contacts = [
    { label: "E-mail", value: PERSON.email, href: `mailto:${PERSON.email}` },
    { label: "Lab", value: `${PERSON.lab}, UC Berkeley`, href: PERSON.labHref },
    ...SOCIALS.map((social) => ({
      label: social.label,
      value: social.href.replace(/^https?:\/\/(www\.)?/, ""),
      href: social.href,
    })),
  ];

  return (
    <Sheet current="/about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/about")),
        }}
      />
      <h1 className={styles.title}>{PERSON.name}</h1>

      <div className={styles.front}>
        <ul className={styles.meta}>
          <li>{TRACK_LABEL.ai}</li>
          <li>{TRACK_LABEL.ion}</li>
          <li>{PERSON.location}</li>
        </ul>
        <div>
          <p className={styles.lead}>{PERSON.position}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.columns}>
          <div>
            <EducationTable number={1} items={education} />
            <div className={styles.block}>
              <p className={styles.tableTitle}>
                <b>Table 2 | Contact</b>
              </p>
              <table className={styles.table}>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.label}>
                      <th scope="row" className={styles.nowrap}>
                        {contact.label}
                      </th>
                      <td>
                        <a
                          href={contact.href}
                          target={
                            contact.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {contact.value}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <figure className={styles.figure}>
            <div className={styles.plate}>
              <Image
                src={PERSON.portrait}
                alt={PERSON.name}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 560px"
              />
            </div>
            <figcaption className={styles.caption}>
              <b>Fig. 1 | {PERSON.name}.</b>
            </figcaption>
          </figure>
        </div>
      </div>
    </Sheet>
  );
}
