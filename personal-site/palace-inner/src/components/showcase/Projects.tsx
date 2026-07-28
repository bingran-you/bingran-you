import React from 'react';

interface ProjectEntry {
    title: string;
    blurb: string;
    href: string;
    tag: 'Agent' | 'Physics';
}

const PROJECTS: ProjectEntry[] = [
    {
        title: 'TasksMiner',
        blurb:
            'Pipeline for mining, reviewing, and operating authentic specialist tasks, with live infrastructure monitoring.',
        href: 'https://bingran.ai/projects/tasksminer',
        tag: 'Agent',
    },
    {
        title: 'FrontierPhysics',
        blurb:
            'Authentic specialist physics tasks for evaluating frontier agents.',
        href: 'https://www.benchflow.ai/frontierphysics',
        tag: 'Agent',
    },
    {
        title: 'BenchFlow',
        blurb:
            'Frontier environment lab building the runtime and benchmarks AI agents learn in.',
        href: 'https://www.benchflow.ai/',
        tag: 'Agent',
    },
    {
        title: 'SkillsBench',
        blurb: 'Benchmark for evaluating how well AI agents use skills.',
        href: 'https://github.com/benchflow-ai/skillsbench',
        tag: 'Agent',
    },
    {
        title: 'first-tree',
        blurb:
            'Git-native context layer for decisions, ownership, and shared team knowledge.',
        href: 'https://first-tree.ai/',
        tag: 'Agent',
    },
    {
        title: 'DoWhiz',
        blurb:
            'Agent-native product that gets work done across email, chat, docs, and the tools you already use.',
        href: 'https://github.com/KnoWhiz/DoWhiz',
        tag: 'Agent',
    },
    {
        title: 'DeepTutor',
        blurb:
            'AI research assistant built on Zotero — cited answers, figure/formula understanding, multi-paper comparison.',
        href: 'https://deeptutor.knowhiz.us/',
        tag: 'Agent',
    },
    {
        title: 'mews',
        blurb:
            'Local GitHub notification daemon that triages inbox activity and dispatches Codex / Claude Code work for allow-listed repos.',
        href: 'https://github.com/bingran-you/mews',
        tag: 'Agent',
    },
    {
        title: 'smolclaw',
        blurb:
            'Seeded mock environments for testing agent behavior in realistic workflows.',
        href: 'https://github.com/bingran-you/smolclaw',
        tag: 'Agent',
    },
    {
        title: 'SBTI CLI',
        blurb:
            'Offline CLI for testing agent behavior with bundled logic and exportable results.',
        href: 'https://github.com/bingran-you/sbti-cli',
        tag: 'Agent',
    },
    {
        title: 'bem',
        blurb:
            'Scientific computing code for boundary element and fast multipole methods in Python.',
        href: 'https://github.com/HaeffnerLab/bem',
        tag: 'Physics',
    },
    {
        title: 'artiq_photonics_integration',
        blurb:
            'ARTIQ control framework for photonics-integration experiments at HaeffnerLab.',
        href: 'https://github.com/HaeffnerLab/artiq_photonics_integration',
        tag: 'Physics',
    },
];

const ProjectRow: React.FC<ProjectEntry> = ({ title, blurb, href, tag }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="big-button-container"
        style={styles.row}
    >
        <div style={styles.rowLeft}>
            <div style={styles.tagBadge}>
                <span style={styles.tagText}>{tag}</span>
            </div>
            <div style={styles.rowText}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.blurb}>{blurb}</p>
            </div>
        </div>
        <div style={styles.rowRight}>
            <span style={styles.openExt}>↗</span>
        </div>
    </a>
);

const Projects = () => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>Agent stuff & ion-trap stuff</h3>
            <br />
            <p>
                Selected open-source work. The <b>Agent</b> row is software I
                build to make AI agents more useful and more honest. The{' '}
                <b>Physics</b> row is code we use inside HaeffnerLab for
                trapped-ion experiments. Click any title to open the project.
            </p>
            <br />
            <div style={styles.list}>
                {PROJECTS.map((p) => (
                    <ProjectRow key={p.title} {...p} />
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
        flex: 1,
    },
    row: {
        marginBottom: 16,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: 'inherit',
        padding: 12,
    },
    rowLeft: {
        alignItems: 'center',
        flex: 1,
    },
    rowText: {
        flexDirection: 'column',
        marginLeft: 16,
        flex: 1,
    },
    title: {
        fontSize: 24,
        marginBottom: 4,
    },
    blurb: {
        opacity: 0.85,
    },
    rowRight: {
        marginLeft: 8,
    },
    openExt: {
        fontSize: 20,
        opacity: 0.6,
    },
    tagBadge: {
        minWidth: 64,
        padding: '4px 8px',
        boxSizing: 'border-box',
        textAlign: 'center',
        border: '2px solid black',
        background: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
};

export default Projects;
