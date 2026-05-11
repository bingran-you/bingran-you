import React from 'react';
import printer from '../../assets/resume/printer.gif';

// Resume PDF lives in the host Next.js public dir so it's reachable from
// inside the iframe sandbox at /palace/resume.pdf. Drop a new PDF in
// personal-site/public/ to swap it.
const RESUME_HREF = '/resume.pdf';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                <a rel="noreferrer" target="_blank" href={RESUME_HREF}>
                    <p>Click here to download it!</p>
                </a>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: { flexDirection: 'column' },
    resumePrinter: { width: 56, height: 48, paddingRight: 24 },
};

export default ResumeDownload;
