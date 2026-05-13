// Placeholder for palace-inner/src/components/showcase/VerticalNavbar.tsx.
//
// Two reasons this file ships as a template, not a snippet:
//
// 1. PLAYBOOK §L — upstream imports `useLocation` from `react-router`,
//    while ShowcaseExplorer wraps everything in `BrowserRouter as Router`
//    from `react-router-dom`. With non-aligned semver resolutions those
//    become two separate React Context instances and the inner OS
//    white-screens with `useLocation may only be used inside a <Router>`.
//    This template imports both Router and hooks from the SAME package
//    (`react-router-dom`) so the context is unified.
//
// 2. The vertical navbar shows your name and a "Showcase 'YY" subhead
//    at the top — placeholders below, swap with your own.

import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router-dom';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>YOUR_FIRST</h1>
                <h1 style={styles.headerText}>YOUR_LAST</h1>
                <h3 style={styles.headerShowcase}>Showcase &apos;26</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link containerStyle={styles.link} to="experience" text="EXPERIENCE" />
                <Link containerStyle={styles.link} to="projects" text="PROJECTS" />
                <Link containerStyle={styles.link} to="contact" text="CONTACT" />
            </div>
            <div style={styles.spacer} />
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: { flexDirection: 'column', marginBottom: 64 },
    headerText: { fontSize: 38, lineHeight: 1 },
    headerShowcase: { marginTop: 12 },
    link: { marginBottom: 32 },
    links: { flexDirection: 'column', flex: 1, justifyContent: 'center' },
    spacer: { flex: 1 },
};

export default VerticalNavbar;
