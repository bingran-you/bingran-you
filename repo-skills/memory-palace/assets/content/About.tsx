// Placeholder for palace-inner/src/components/showcase/About.tsx
//
// The upstream About is a long autobiographical page with Henry's photo,
// his story, and embedded images. The structure below is the same; fill
// it in with your own.

import React from 'react';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1>About</h1>
            <h3>A one-line summary of who you are.</h3>
            <br />
            <div className="text-block">
                <p>
                    Replace this paragraph with your own bio. Two or three
                    sentences on who you are, what you do, what you care
                    about. Keep it conversational — this is read inside a
                    pretend Windows 98 desktop, not a LinkedIn profile.
                </p>
                <br />
                <p>
                    A second paragraph if you want more space. Mention a
                    project, a current obsession, an open question. Anything
                    that gives a visitor one specific reason to remember you.
                </p>
                <br />
                <p>
                    <b>Why this site exists:</b> one sentence on what you
                    hope visitors get out of it.
                </p>
            </div>
        </div>
    );
};

export default About;
