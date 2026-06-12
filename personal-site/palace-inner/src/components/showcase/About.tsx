import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Hi, I'm Bingran</h1>
            <h3>PhD candidate at UC Berkeley</h3>
            <br />
            <div className="text-block">
                <p>
                    I split my week between two labs that look nothing alike.
                    Half of it I'm an <b>Agentic Builder</b> — designing
                    benchmarks and deterministic environments that let AI
                    agents do real work across email, chat, code and
                    documents. The other half I'm an <b>Ion Trapper</b>{' '}
                    at HaeffnerLab, building integrated photonics and
                    3D-printed microtraps for trapped-ion quantum systems.
                </p>
                <br />
                <p>
                    This site is my desk. The room you walked through is the
                    workspace; the monitor in front of you runs my
                    portfolio. Click around — every shortcut on the desktop
                    opens a window. Questions or comments: drop me a line
                    via the <Link to="/contact">contact page</Link> or email{' '}
                    <a href="mailto:me@bingranyou.com">me@bingranyou.com</a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Two tracks, both active</h3>
                <br />
                <p>
                    <b>Agentic Builder.</b> Agent evaluation, skills-based
                    benchmarking, and deterministic test environments for
                    long-horizon workflows. I care about reliability — the
                    boring kind that comes from realistic mock environments,
                    cache discipline, and end-to-end deliverables instead of
                    polished demos.
                </p>
                <br />
                <p>
                    <b>Ion Trapper.</b> Trapped-ion experiments in atomic,
                    molecular and optical (AMO) physics. Integrated
                    photonics for scalable addressing, ion-photon interfaces
                    for multiplexed networking, and novel trap
                    architectures — including 3D-printed microtraps. I work
                    inside the HaeffnerLab control stack: ARTIQ, laser
                    control, RF engineering, ultra-high vacuum.
                </p>
            </div>
            <div className="text-block">
                <h3>How I work</h3>
                <br />
                <p>
                    My day-to-day stack is heavy on AI: Codex (GPT-5.5) and
                    Claude Code (Fable 5) running as dual primaries. Codex
                    handles long-horizon autonomous runs; Claude Code is for
                    interactive pair work.
                    {/* Token-usage stats temporarily hidden (2026-06-12):
                    "A typical week I'm averaging ~96k tokens per request
                    with 96% prompt cache reuse — cache hit rate and cost
                    discipline matter to me." */}
                </p>
                <br />
                <p>
                    I prefer working code over perfect plans. End-to-end
                    delivery beats polished demos. I run a parallel agent
                    army across worktrees and try to be a good teammate to
                    the other instances of myself.
                </p>
                <br />
                <p>
                    If you found something interesting in here or want to
                    nerd out about agents, ion traps, or the surprising
                    overlap between the two, hit me up:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/bingran_bry"
                    >
                        @bingran_bry
                    </a>{' '}
                    on X, or{' '}
                    <a href="mailto:me@bingranyou.com">me@bingranyou.com</a>.
                </p>
            </div>
        </div>
    );
};

export default About;
