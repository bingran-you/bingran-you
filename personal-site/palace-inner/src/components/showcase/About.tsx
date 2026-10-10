import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

// Facts only, mirroring the title page of the parent site.
const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Bingran You</h1>
            <h3>PhD Candidate in Applied Science &amp; Technology at UC Berkeley</h3>
            <br />
            <div className="text-block">
                <p>
                    <b>Agentic Builder</b> &nbsp;·&nbsp; <b>Ion Trapper</b>
                </p>
                <br />
                <p>Haeffner Lab, UC Berkeley</p>
                <p>BenchFlow</p>
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
