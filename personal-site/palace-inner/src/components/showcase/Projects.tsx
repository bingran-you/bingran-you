import React from 'react';

interface ProjectEntry {
    title: string;
    blurb: string;
    href: string;
    tag: 'Agent' | 'Physics';
}

// Descriptions are each project's own wording, as in lib/content.ts of the
// parent site.
const PROJECTS: ProjectEntry[] = [
    {
        title: 'FrontierPhysics',
        blurb:
            'FrontierPhysics is an open benchmark measuring whether AI agents can carry out authentic, specialist-level physics research.',
        href: 'https://www.benchflow.ai/frontierphysics',
        tag: 'Agent',
    },
    {
        title: 'BenchFlow',
        blurb:
            'BenchFlow is a frontier environment lab. We build the environments AI agents learn in. We ship SkillsBench, ClawsBench, PostTrain, and the runtime.',
        href: 'https://www.benchflow.ai/',
        tag: 'Agent',
    },
    {
        title: 'SkillsBench',
        blurb:
            'SkillsBench evaluates how well skills work and how effective agents are at using them.',
        href: 'https://github.com/benchflow-ai/skillsbench',
        tag: 'Agent',
    },
    {
        title: 'first-tree',
        blurb:
            'Open-source agent orchestration for engineers. Put Claude Code, Codex, Cursor and your own agents on one backlog — parallel runs on your keys, review before merge, everything lands as a pull request.',
        href: 'https://first-tree.ai/',
        tag: 'Agent',
    },
    {
        title: 'DeepTutor',
        blurb:
            'DeepTutorZotero is a research sources manager based on Zotero, with amazing AI capability powered by DeepTutor.',
        href: 'https://github.com/KnoWhiz/DeepTutorZotero',
        tag: 'Agent',
    },
    {
        title: 'mews',
        blurb: 'Represent you to finish all the work, when you are sleeping.',
        href: 'https://github.com/bingran-you/mews',
        tag: 'Agent',
    },
    {
        title: 'smolclaw',
        blurb:
            'High resolution mock environments for testing and improving claw like agents',
        href: 'https://github.com/bingran-you/smolclaw',
        tag: 'Agent',
    },
    {
        title: 'SBTI CLI',
        blurb: 'SBTI CLI - Test SBTI for your agents.',
        href: 'https://github.com/bingran-you/sbti-cli',
        tag: 'Agent',
    },
    {
        title: 'bem',
        blurb:
            'triangulation, boundary element method (BEM), fast multipole method (FMM) code for python',
        href: 'https://github.com/HaeffnerLab/bem',
        tag: 'Physics',
    },
    {
        title: 'artiq_photonics_integration',
        blurb: 'ARTIQ Control Framework (ACF) of Photonics Integration',
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
