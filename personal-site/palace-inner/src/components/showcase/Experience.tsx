import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

interface RoleEntry {
    org: string;
    role: string;
    period: string;
    lines: string[];
    href?: string;
}

const ROLES: RoleEntry[] = [
    {
        org: 'UC Berkeley · HaeffnerLab',
        role: 'PhD Candidate, Applied Science & Technology',
        period: 'Berkeley, CA',
        href: 'https://haeffner.physics.berkeley.edu/',
        lines: [
            'Trapped-ion experiments in atomic, molecular and optical physics.',
            'Integrated photonics for scalable ion addressing; ion-photon interfaces for multiplexed networking.',
            'Novel trap architectures, including 3D-printed microtraps.',
            'Stack: ARTIQ, laser control, RF engineering, ultra-high vacuum.',
        ],
    },
    {
        org: 'Agentic Builder · Open source',
        role: 'Independent / collaborative work on agent infrastructure',
        period: 'Ongoing',
        lines: [
            'Skills-based benchmarking for AI agents (SkillsBench).',
            'Deterministic mock environments for long-horizon agent tasks (smolclaw, SBTI CLI).',
            'Git-native context layer for team decisions and ownership (first-tree).',
            'Agent-native productivity products across email/chat/docs (DoWhiz, DeepTutor).',
            'Local notification daemons that dispatch Codex / Claude Code work (mews).',
        ],
    },
];

const PAPERS = [
    {
        venue: 'arXiv',
        title: 'ClawsBench: Evaluating Capability and Safety of LLM Productivity Agents in Simulated Workspaces',
        href: 'https://arxiv.org/abs/2604.05172',
    },
    {
        venue: 'arXiv',
        title: 'SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks',
        href: 'https://arxiv.org/abs/2602.12670',
    },
    {
        venue: 'npj Nanophotonics',
        title: 'Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits',
        href: 'https://www.nature.com/articles/s44310-025-00102-4',
    },
    {
        venue: 'arXiv',
        title: 'Temporally multiplexed ion-photon quantum interface via fast ion-chain transport',
        href: 'https://arxiv.org/abs/2405.10501',
    },
    {
        venue: 'Nature',
        title: '3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing',
        href: 'https://www.nature.com/articles/s41586-025-09474-1',
    },
    {
        venue: 'Phys. Rev. Lett.',
        title: 'Test of Causal Non-Linear Quantum Mechanics by Ramsey Interferometry on the Vibrational Mode of a Trapped Ion',
        href: 'https://doi.org/10.1103/PhysRevLett.130.200201',
    },
];

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.section}>
                <h1>Experience</h1>
                <h3>Where I spend my time</h3>
                <br />
                {ROLES.map((r) => (
                    <div key={r.org} style={styles.role}>
                        <div style={styles.roleHeader}>
                            {r.href ? (
                                <a
                                    href={r.href}
                                    rel="noreferrer"
                                    target="_blank"
                                    style={styles.orgLink}
                                >
                                    <h2>{r.org}</h2>
                                </a>
                            ) : (
                                <h2>{r.org}</h2>
                            )}
                            <p style={styles.period}>{r.period}</p>
                        </div>
                        <h3 style={styles.roleTitle}>{r.role}</h3>
                        <ul style={styles.ul}>
                            {r.lines.map((l) => (
                                <li key={l}>{l}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div style={styles.section}>
                <h1>Selected papers</h1>
                <br />
                <ul style={styles.ul}>
                    {PAPERS.map((p) => (
                        <li key={p.title} style={styles.paperItem}>
                            <em>{p.venue}</em> ·{' '}
                            <a href={p.href} target="_blank" rel="noreferrer">
                                {p.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    section: {
        flexDirection: 'column',
        width: '100%',
        marginBottom: 32,
    },
    role: {
        flexDirection: 'column',
        marginBottom: 24,
        paddingBottom: 16,
        borderBottom: '2px solid #d4d4d4',
    },
    roleHeader: {
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    orgLink: { textDecoration: 'none', color: 'inherit' },
    period: { opacity: 0.7, fontSize: 14 },
    roleTitle: { marginTop: 4, marginBottom: 8, opacity: 0.85 },
    ul: { paddingLeft: 24, marginTop: 8, lineHeight: 1.6 },
    paperItem: { marginBottom: 8 },
};

export default Experience;
