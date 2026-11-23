import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

// Facts only, mirroring PERSON and AFFILIATIONS in lib/site.ts of the parent
// site.
const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Bingran You</h1>
            <h3>PhD Candidate at UC Berkeley</h3>
            <br />
            <div className="text-block">
                <p>
                    <b>Agent Evaluation</b> &nbsp;·&nbsp;{' '}
                    <b>Experimental AMO Physics</b>
                </p>
                <br />
                <p>Co-Founder of BenchFlow</p>
                <p>Ion Trapper in Haeffner Lab, UC Berkeley</p>
                <p>Berkeley, CA</p>
                <p>
                    <a href="mailto:me@bingranyou.com">me@bingranyou.com</a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default About;
