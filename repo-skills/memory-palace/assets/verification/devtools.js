/* Paste into the DevTools console on a fresh tab at /palace, AFTER the
 * loading screen, AFTER clicking Start, AFTER clicking "Click anywhere
 * to begin" (so the iframe is actually mounted).
 *
 * Each block returns a small object. Anything `false` or `undefined`
 * maps to a specific PLAYBOOK gotcha — fix and redeploy.
 */

(async () => {
    // ────────────────────────────────────────────────────────────────
    // 1. Branding sanity — outer page is yours, not Henry's
    // ────────────────────────────────────────────────────────────────
    const titleOK = !/Heffernan|Henry/i.test(document.title);
    const biosLooksClean = !/HHBIOS|Heffernan, Henry Inc/i.test(
        document.body.innerText
    );

    // ────────────────────────────────────────────────────────────────
    // 2. Iframe wiring
    // ────────────────────────────────────────────────────────────────
    const f = document.querySelector('#computer-screen');
    if (!f) {
        console.warn(
            '[palace] iframe #computer-screen not in DOM yet. Click through ' +
                'the loading screen and re-run.'
        );
        return;
    }

    // 2a. Source cache-bust applied (PLAYBOOK §J)
    const srcOK = /\/palace\/os\?cb=\d+/.test(f.src);

    // 2b. No trailing slash on iframe src (PLAYBOOK §K)
    const noTrailingSlashOK = !/\/palace\/os\/(\?|$)/.test(f.src);

    // 2c. Same-origin window access works (PLAYBOOK §H, §I)
    let sameOriginOK = false;
    let innerTitle = null;
    let navLabels = [];
    try {
        sameOriginOK = !!f.contentDocument;
        innerTitle = f.contentDocument?.title ?? null;
        navLabels = Array.from(
            f.contentDocument?.querySelectorAll('a') ?? []
        )
            .map((a) => a.textContent.trim())
            .filter((t) =>
                /^(HOME|ABOUT|EXPERIENCE|PROJECTS|CONTACT)$/.test(t)
            );
    } catch (e) {
        sameOriginOK = false;
    }

    // 2d. Inner branding is yours (PLAYBOOK §A reminder)
    const innerLooksClean = innerTitle
        ? !/Heffernan|Henry/i.test(innerTitle)
        : false;

    // ────────────────────────────────────────────────────────────────
    // 3. Live header check via fetch (PLAYBOOK §H, §I, §J)
    //    Reads the live response — what Chrome's HTTP cache currently
    //    serves. If you just deployed, do a hard reload first.
    // ────────────────────────────────────────────────────────────────
    let headers = {};
    try {
        const r = await fetch('/palace/os', {
            method: 'HEAD',
            cache: 'no-store',
        });
        for (const [k, v] of r.headers) headers[k.toLowerCase()] = v;
    } catch {}

    const xfoOK =
        (headers['x-frame-options'] || '').toUpperCase() === 'SAMEORIGIN';
    const coopOK =
        (headers['cross-origin-opener-policy'] || '').toLowerCase() ===
        'unsafe-none';
    const cacheOK = /no-store/i.test(headers['cache-control'] || '');

    // ────────────────────────────────────────────────────────────────
    // Report
    // ────────────────────────────────────────────────────────────────
    const report = {
        titleOK,
        biosLooksClean,
        srcOK,
        noTrailingSlashOK,
        sameOriginOK,
        innerTitle,
        innerLooksClean,
        navLabels,
        headers,
        xfoOK,
        coopOK,
        cacheOK,
    };
    console.log('[palace verification]', report);

    const failed = Object.entries(report).filter(
        ([k, v]) =>
            (k.endsWith('OK') && v === false) ||
            (k === 'navLabels' && v.length === 0)
    );
    if (failed.length === 0) {
        console.log('%c✓ all checks passed', 'color:#3a3;font-weight:bold');
    } else {
        console.warn(
            '%c✗ some checks failed — see PLAYBOOK for the matching gotcha',
            'color:#a33;font-weight:bold',
            failed.map(([k]) => k)
        );
    }
    return report;
})();
