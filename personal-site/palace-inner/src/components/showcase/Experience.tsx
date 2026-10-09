import React from 'react';
import ResumeDownload from './ResumeDownload';

interface RoleEntry {
    org: string;
    role: string;
    period: string;
    lines: string[];
    href?: string;
}

const ROLES: RoleEntry[] = [
    {
        org: 'University of California, Berkeley',
        role: 'PhD Candidate in Applied Science & Technology',
        period: '2022 — Present',
        href: 'https://ions.berkeley.edu/',
        lines: ['Berkeley, California', 'Haeffner Lab'],
    },
    {
        org: 'University of Chinese Academy of Sciences',
        role: 'BS in Physics, Minor in Computer Science',
        period: '2018 — 2022',
        lines: ['Beijing, China', 'GPA 3.95 / 4.00', 'Rank 1 / 54'],
    },
];

const PAPERS = [
    {
        venue: 'NeurIPS 2026',
        title: 'SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks',
        href: 'https://arxiv.org/abs/2602.12670',
    },
    {
        venue: 'COLM 2026',
        title: 'ClawsBench: Evaluating Capability and Safety of LLM Productivity Agents in Simulated Workspaces',
        href: 'https://arxiv.org/abs/2604.05172',
    },
    {
        venue: 'arXiv',
        title: 'BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure',
        href: 'https://arxiv.org/abs/2609.11028',
    },
    {
        venue: 'Nature',
        title: '3D-printed micro ion trap technology for quantum information applications',
        href: 'https://www.nature.com/articles/s41586-025-09474-1',
    },
    {
        venue: 'Phys. Rev. Lett.',
        title: 'Test of Causal Nonlinear Quantum Mechanics by Ramsey Interferometry with a Trapped Ion',
        href: 'https://doi.org/10.1103/PhysRevLett.130.200201',
    },
    {
        venue: 'Phys. Rev. Applied',
        title: 'Temporally multiplexed ion-photon quantum interface via fast ion-chain transport',
        href: 'https://doi.org/10.1103/ppm8-8kx5',
    },
    {
        venue: 'npj Nanophotonics',
        title: 'Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits',
        href: 'https://www.nature.com/articles/s44310-025-00102-4',
    },
    {
        venue: 'arXiv',
        title: 'A broadband, individually addressing two- and three-dimensional photonic integrated circuit for trapped-ion qubit control',
        href: 'https://arxiv.org/abs/2607.25062',
    },
];

const Experience = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.section}>
                <h1>Education</h1>
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
