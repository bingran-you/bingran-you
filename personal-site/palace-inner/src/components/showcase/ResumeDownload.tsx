import React from 'react';
import printer from '../../assets/resume/printer.gif';

// Don't leak a real CV PDF. Send people to the text-version homepage on the
// parent site instead. `target="_top"` breaks out of the inner iframe so the
// browser navigates the whole window to bingranyou.com/.
const TEXT_SITE_HREF = '/';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Prefer the plain-text version?'}</h3>
                <a rel="noreferrer" target="_top" href={TEXT_SITE_HREF}>
                    <p>Open the regular bingranyou.com homepage</p>
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
