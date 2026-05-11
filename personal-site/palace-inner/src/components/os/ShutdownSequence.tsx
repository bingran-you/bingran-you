import React, { useEffect, useState } from 'react';

// Minimal reboot sequence for the Bingran build. The host outer site doesn't
// have a real shutdown path (it's a portfolio inside an iframe), so this just
// shows a brief "rebooting…" screen and hands control back to <Desktop>.

export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const REBOOT_DELAY_MS = 2200;

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({ setShutdown }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const tick = setInterval(() => {
            setDots((d) => (d.length >= 3 ? '' : d + '.'));
        }, 350);
        const finish = setTimeout(() => setShutdown(false), REBOOT_DELAY_MS);
        return () => {
            clearInterval(tick);
            clearTimeout(finish);
        };
    }, [setShutdown]);

    return (
        <div style={styles.shutdown}>
            <p style={styles.text}>BingranOS</p>
            <p style={styles.subtext}>Rebooting{dots}</p>
        </div>
    );
};

const styles: { [k: string]: React.CSSProperties } = {
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
        color: 'white',
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        marginBottom: 16,
        letterSpacing: 2,
    },
    subtext: {
        fontSize: 16,
        opacity: 0.7,
        minWidth: 160,
        textAlign: 'left',
    },
};

export default ShutdownSequence;
