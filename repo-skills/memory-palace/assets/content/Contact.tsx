// Placeholder for palace-inner/src/components/showcase/Contact.tsx
//
// Upstream renders a row of icon buttons (GitHub, Twitter, email). The
// pattern here keeps it simple — replace the entries with your channels.

import React from 'react';

interface Channel {
    label: string;
    href: string;
}

const CHANNELS: Channel[] = [
    { label: 'Email', href: 'mailto:you@example.com' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'Twitter / X', href: 'https://x.com/your-handle' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
];

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Contact</h1>
            <h3>The fastest way to reach me.</h3>
            <br />
            <ul>
                {CHANNELS.map((c) => (
                    <li key={c.label}>
                        <b>{c.label}:</b>{' '}
                        <a href={c.href} target="_blank" rel="noreferrer">
                            {c.href.replace(/^mailto:/, '')}
                        </a>
                    </li>
                ))}
            </ul>
            <br />
            <p>
                Replace this paragraph with one sentence on what kind of
                messages you welcome (collaborations, intros, hire-me notes,
                random questions, etc.).
            </p>
        </div>
    );
};

export default Contact;
