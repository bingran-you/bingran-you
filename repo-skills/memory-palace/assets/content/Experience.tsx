// Placeholder for palace-inner/src/components/showcase/Experience.tsx
//
// A reverse-chronological list of roles. Keep entries short.

import React from 'react';

interface Role {
    org: string;
    title: string;
    period: string;
    bullets: string[];
    href?: string;
}

const ROLES: Role[] = [
    {
        org: 'CURRENT_COMPANY',
        title: 'YOUR_ROLE',
        period: '2026 – Present',
        href: 'https://example.com',
        bullets: [
            'One sentence on what you do here.',
            'Another sentence on something concrete you shipped.',
        ],
    },
    {
        org: 'PREVIOUS_COMPANY',
        title: 'PREVIOUS_ROLE',
        period: '2023 – 2026',
        bullets: [
            'What you did. Past tense.',
            'A second bullet if there is something memorable.',
        ],
    },
];

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <h3>Where I&apos;ve worked.</h3>
            <br />
            {ROLES.map((r) => (
                <div key={`${r.org}-${r.period}`} style={{ marginBottom: 24 }}>
                    <h3>
                        {r.href ? (
                            <a href={r.href} target="_blank" rel="noreferrer">
                                {r.org}
                            </a>
                        ) : (
                            r.org
                        )}{' '}
                        <span>— {r.title}</span>
                    </h3>
                    <p>
                        <span>{r.period}</span>
                    </p>
                    <ul>
                        {r.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
