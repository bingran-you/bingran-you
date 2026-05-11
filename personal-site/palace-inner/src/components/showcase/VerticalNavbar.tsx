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
                <h1 style={styles.headerText}>Bingran</h1>
                <h1 style={styles.headerText}>You</h1>
                <h3 style={styles.headerShowcase}>Showcase '26</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
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
