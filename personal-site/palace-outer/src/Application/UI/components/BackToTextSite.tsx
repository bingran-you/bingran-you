import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Easing } from '../Animation';

const LABEL = '← Text version';

type BackToTextSiteProps = {};

const BackToTextSite: React.FC<BackToTextSiteProps> = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const background = isHovering ? '#fff' : '#000';
    const color = isHovering ? '#000' : '#fff';

    return (
        <motion.a
            href="/"
            id="prevent-click"
            initial="hidden"
            animate="visible"
            variants={vars}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setIsActive(false);
            }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            style={{
                ...styles.container,
                background,
                opacity: isActive ? 0.6 : 1,
            }}
        >
            <p id="prevent-click" style={{ color }}>
                {LABEL}
            </p>
        </motion.a>
    );
};

const vars = {
    hidden: {
        opacity: 0,
        x: -8,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: Easing.expOut,
        },
    },
};

const styles: StyleSheetCSS = {
    container: {
        background: '#000',
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: 'center',
        display: 'inline-flex',
        marginBottom: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        textDecoration: 'none',
        alignSelf: 'flex-start',
        transition:
            'background 120ms ease-out, color 120ms ease-out, opacity 120ms ease-out',
    },
};

export default BackToTextSite;
