import React from 'react';
import ResumeDownload from './ResumeDownload';

interface RoleEntry {
    org: string;
    role: string;
    period: string;
    lines: string[];
    href: string;
}

// Experience and Education as on the parent site (`experience` and
// `education` in lib/content.ts), worded as on Bingran's LinkedIn.
const EXPERIENCE: RoleEntry[] = [
    {
        org: 'BenchFlow',
        role: 'Co-Founder',
        period: '2026 – Present',
        href: 'https://www.benchflow.ai/',
        lines: [
            'San Francisco, California, United States',
            'FrontierPhysics, SkillsBench, PostTrain (Feynman-1)',
        ],
    },
];

const EDUCATION: RoleEntry[] = [
    {
        org: 'University of California, Berkeley',
        role: 'Doctor of Philosophy (PhD), Quantum Physics',
        period: '2022 – 2027',
        href: 'https://www.berkeley.edu/',
        lines: ['Advised by Hartmut Haeffner'],
    },
    {
        org: 'University of Chinese Academy of Sciences',
        role: 'Bachelor of Science (BS), Majoring in Physics, Minoring in Computer Science',
        period: '2018 – 2022',
        href: 'https://english.ucas.ac.cn/',
        lines: ['Rank 1/54'],
    },
];

const PAPERS = [
    {
        venue: 'NeurIPS 2026',
        title: 'SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks',
        href: 'https://arxiv.org/abs/2602.12670',
    },
    {
        venue: 'arXiv',
        title: 'FrontierPhysics: Evaluating Agents for End-to-End Physics Research',
        href: 'https://arxiv.org/abs/2611.06910',
    },
    {
        venue: 'arXiv',
        title: 'Agents’ Last Exam',
        href: 'https://arxiv.org/abs/2606.05405',
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
        venue: 'Phys. Rev. Applied',
        title: 'Temporally multiplexed ion-photon quantum interface via fast ion-chain transport',
        href: 'https://doi.org/10.1103/ppm8-8kx5',
    },
    {
        venue: 'arXiv',
        title: 'A broadband, individually addressing two- and three-dimensional photonic integrated circuit for trapped-ion qubit control',
        href: 'https://arxiv.org/abs/2607.25062',
    },
    {
        venue: 'Nature',
        title: '3D-printed micro ion trap technology for quantum information applications',
        href: 'https://doi.org/10.1038/s41586-025-09474-1',
    },
    {
        venue: 'Phys. Rev. Lett.',
        title: 'Test of Causal Nonlinear Quantum Mechanics by Ramsey Interferometry with a Trapped Ion',
        href: 'https://doi.org/10.1103/PhysRevLett.130.200201',
    },
    {
        venue: 'npj Nanophotonics',
        title: 'Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits',
        href: 'https://doi.org/10.1038/s44310-025-00102-4',
    },
];

const RoleSection: React.FC<{ title: string; roles: RoleEntry[] }> = ({
    title,
    roles,
}) => (
    <div style={styles.section}>
        <h1>{title}</h1>
        <br />
        {roles.map((r) => (
            <div key={r.org} style={styles.role}>
                <div style={styles.roleHeader}>
                    <a
                        href={r.href}
                        rel="noreferrer"
                        target="_blank"
                        style={styles.orgLink}
                    >
                        <h2>{r.org}</h2>
                    </a>
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
);

const Experience = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <RoleSection title="Experience" roles={EXPERIENCE} />
            <RoleSection title="Education" roles={EDUCATION} />
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
