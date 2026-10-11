import type { Metadata } from "next";
import { EducationTable, Portrait } from "@/components/article/blocks";
import { Front } from "@/components/article/front";
import { Bar, InlineContent } from "@/components/article/inline";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import tables from "@/components/article/table.module.css";
import { PORTRAIT_CAPTION } from "@/lib/article";
import { education } from "@/lib/content";
import { sheetLength } from "@/lib/layout";
import {
  jsonLdScriptContent,
  profilePageJsonLd,
  SITE_DESCRIPTION,
} from "@/lib/jsonld";
import { PERSON, SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const contacts = [
    { label: "E-mail", value: PERSON.email, href: `mailto:${PERSON.email}` },
    ...SOCIALS.map((social) => ({
      label: social.label,
      value: social.href.replace(/^https?:\/\/(www\.)?/, ""),
      href: social.href,
    })),
  ];

  return (
    <Sheet current="/about" length={sheetLength("about")}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/about")),
        }}
      />
      <h1 className={styles.title}>{PERSON.name}</h1>
      <Front />

      <div className={styles.body}>
        <div className={styles.columns}>
          <div>
            <EducationTable number={1} items={education} />
            <div className={styles.block}>
              <p className={tables.tableTitle}>
                <b>
                  Table 2 <Bar /> Contact
                </b>
              </p>
              <table className={tables.table}>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.label}>
                      <th scope="row" className={tables.nowrap}>
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
            <Portrait square />
            <figcaption className={styles.caption}>
              <InlineContent nodes={PORTRAIT_CAPTION} />
            </figcaption>
          </figure>
        </div>
      </div>
    </Sheet>
  );
}
