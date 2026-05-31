import React from 'react';

export interface ContactProps {}

interface ChannelEntry {
    label: string;
    handle: string;
    href: string;
}

const CHANNELS: ChannelEntry[] = [
    { label: 'Email', handle: 'me@bingranyou.com', href: 'mailto:me@bingranyou.com' },
    {
        label: 'Email (academic)',
        handle: 'bingran.you@berkeley.edu',
        href: 'mailto:bingran.you@berkeley.edu',
    },
    { label: 'X / Twitter', handle: '@bingran_bry', href: 'https://x.com/bingran_bry' },
    { label: 'GitHub', handle: 'bingran-you', href: 'https://github.com/bingran-you' },
    {
        label: 'LinkedIn',
        handle: 'bingran-you',
        href: 'https://www.linkedin.com/in/bingran-you/',
    },
    {
        label: 'Google Scholar',
        handle: 'Bingran You',
        href: 'https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en',
    },
    {
        label: 'ORCID',
        handle: '0000-0002-0316-2115',
        href: 'https://orcid.org/0000-0002-0316-2115',
    },
    {
        label: 'Hugging Face',
        handle: 'bingran-you',
        href: 'https://huggingface.co/bingran-you',
    },
    {
        label: 'YouTube',
        handle: '@BingranBRY',
        href: 'https://www.youtube.com/@BingranBRY',
    },
    {
        label: 'Bilibili',
        handle: '85906410',
        href: 'https://space.bilibili.com/85906410',
    },
    { label: 'Rednote', handle: '小红书', href: 'https://xhslink.com/m/gFj0Vwr2Ak' },
    { label: 'Discord', handle: 'invite', href: 'https://discord.gg/jsAnjCep' },
];

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Contact</h1>
            <h3>Different platforms, same person</h3>
            <br />
            <p>
                I read most of these regularly. The fastest is email
                (<a href="mailto:me@bingranyou.com">me@bingranyou.com</a>) or a
                DM on{' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://x.com/bingran_bry"
                >
                    X
                </a>
                . For academic stuff, my Berkeley email works.
            </p>
            <br />
            <div style={styles.list}>
                {CHANNELS.map((c) => (
                    <a
                        key={c.label}
                        href={c.href}
                        target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noreferrer"
                        className="big-button-container"
                        style={styles.row}
                    >
                        <div style={styles.rowLeft}>
                            <span style={styles.label}>{c.label}</span>
                        </div>
                        <div style={styles.rowRight}>
                            <span style={styles.handle}>{c.handle}</span>
                            <span style={styles.arrow}>
                                {c.href.startsWith('mailto:') ? '✉' : '↗'}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    list: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
    },
    row: {
        marginBottom: 8,
        padding: 12,
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
    },
    rowLeft: { alignItems: 'center', flex: 1 },
    rowRight: { alignItems: 'center' },
    label: { fontWeight: 'bold', fontSize: 16 },
    handle: { marginRight: 12, opacity: 0.8 },
    arrow: { opacity: 0.6, fontSize: 18 },
};

export default Contact;
