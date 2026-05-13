// Placeholder for palace-inner/src/components/os/ShutdownSequence.tsx
//
// Upstream's shutdown sequence is a multi-page autobiographical narrative
// (Henry talking about himself across several screens before the OS
// reboots). DO NOT try to translate that with name-swaps — the result is
// either obviously copied or weirdly impersonal.
//
// This placeholder is a minimal "Shutting down… please wait" screen that
// either reboots back to the showcase or simply unmounts. Replace with
// something you actually want if the shutdown experience matters to you,
// or skip the route entirely.

import React, { useEffect, useState } from 'react';

export interface ShutdownSequenceProps {
    onComplete?: () => void;
}

const STEPS = [
    'Saving session…',
    'Closing applications…',
    'Stopping background services…',
    'Goodbye.',
];

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({ onComplete }) => {
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        if (stepIndex >= STEPS.length) {
            const t = setTimeout(() => onComplete?.(), 600);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => setStepIndex((i) => i + 1), 700);
        return () => clearTimeout(t);
    }, [stepIndex, onComplete]);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#000',
                color: '#bdbdbd',
                fontFamily: 'Terminal, monospace',
                padding: 32,
            }}
        >
            <p style={{ fontFamily: 'inherit', fontSize: 20 }}>
                Shutting down…
            </p>
            <br />
            {STEPS.slice(0, stepIndex + 1).map((s, i) => (
                <p
                    key={i}
                    style={{ fontFamily: 'inherit', fontSize: 18, opacity: 0.8 }}
                >
                    {s}
                </p>
            ))}
        </div>
    );
};

export default ShutdownSequence;
