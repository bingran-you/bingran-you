// Placeholder for palace-inner/src/components/showcase/Projects.tsx
//
// Upstream renders a grid of project cards, each with an image, title,
// short description, and a link. The structure below is the minimum.
// Replace project entries with your own; add images under
// palace-inner/src/assets/pictures/ and import them.

import React from 'react';

interface Project {
    title: string;
    summary: string;
    href?: string;
    role?: string;
    year?: string;
}

const PROJECTS: Project[] = [
    {
        title: 'PROJECT_ONE',
        summary:
            'One sentence on what it is and what makes it worth looking at.',
        href: 'https://example.com/project-one',
        role: 'Solo build',
        year: '2026',
    },
    {
        title: 'PROJECT_TWO',
        summary:
            'Another one-liner. The fewer the words, the better the read.',
        href: 'https://example.com/project-two',
        role: 'With a teammate',
        year: '2025',
    },
];

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>What I&apos;ve been building.</h3>
            <br />
            <ul>
                {PROJECTS.map((p) => (
                    <li key={p.title}>
                        <b>
                            {p.href ? (
                                <a href={p.href} target="_blank" rel="noreferrer">
                                    {p.title}
                                </a>
                            ) : (
                                p.title
                            )}
                        </b>{' '}
                        — {p.summary}
                        {p.role || p.year ? (
                            <>
                                {' '}
                                <span>
                                    ({[p.role, p.year].filter(Boolean).join(', ')})
                                </span>
                            </>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
