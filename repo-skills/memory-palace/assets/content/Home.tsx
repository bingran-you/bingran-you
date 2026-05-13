// Placeholder for palace-inner/src/components/showcase/Home.tsx
//
// Replace YOUR_NAME and YOUR_TAGLINE. The four Link buttons map to the
// other showcase routes (About, Experience, Projects, Contact). Drop any
// you don't have.
//
// Do NOT paraphrase Henry's autobiographical prose. Write fresh from your
// own bio.

import React from 'react';
import { Link } from '../general';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>YOUR_NAME</h1>
                <h2>YOUR_TAGLINE &nbsp;·&nbsp; A second tagline (optional)</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link containerStyle={styles.link} to="experience" text="EXPERIENCE" />
                <Link containerStyle={styles.link} to="projects" text="PROJECTS" />
                <Link containerStyle={styles.link} to="contact" text="CONTACT" />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    link: {
        padding: 16,
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
