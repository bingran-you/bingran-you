// FULL REPLACEMENT for palace-outer/src/Application/sources.ts.
//
// Upstream `sources.ts` lists asset paths relative to the webpack
// `static/` copy root (no leading `/palace/`). webpack's `publicPath`
// option rewrites *imports*, not runtime string fetches like the ones
// in this file — so the 3D scene's loader fetches `/models/...` directly
// and 404s when the bundle is mounted under `/palace`.
//
// Solution: hard-code the `/palace/` prefix on every path here.
//
// If upstream adds new entries in a future version, prefix them the same
// way. If you change the mount path (e.g. `/3d` instead of `/palace`),
// replace `/palace/` throughout.

interface Resource {
    name: string;
    type: 'gltfModel' | 'texture' | 'audio';
    path: string;
}

const sources: Resource[] = [
    {
        name: 'computerSetupModel',
        type: 'gltfModel',
        path: '/palace/models/Computer/computer_setup.glb',
    },
    {
        name: 'computerSetupTexture',
        type: 'texture',
        path: '/palace/models/Computer/baked_computer.jpg',
    },
    {
        name: 'environmentModel',
        type: 'gltfModel',
        path: '/palace/models/World/environment.glb',
    },
    {
        name: 'environmentTexture',
        type: 'texture',
        path: '/palace/models/World/baked_environment.jpg',
    },
    {
        name: 'decorModel',
        type: 'gltfModel',
        path: '/palace/models/Decor/decor.glb',
    },
    {
        name: 'decorTexture',
        type: 'texture',
        path: '/palace/models/Decor/baked_decor_modified.jpg',
    },
    {
        name: 'monitorSmudgeTexture',
        type: 'texture',
        path: '/palace/textures/monitor/layers/compressed/smudges.jpg',
    },
    {
        name: 'monitorShadowTexture',
        type: 'texture',
        path: '/palace/textures/monitor/layers/compressed/shadow-compressed.png',
    },
    {
        name: 'mouseDown',
        type: 'audio',
        path: '/palace/audio/mouse/mouse_down.mp3',
    },
    {
        name: 'mouseUp',
        type: 'audio',
        path: '/palace/audio/mouse/mouse_up.mp3',
    },
    {
        name: 'keyboardKeydown1',
        type: 'audio',
        path: '/palace/audio/keyboard/key_1.mp3',
    },
    {
        name: 'keyboardKeydown2',
        type: 'audio',
        path: '/palace/audio/keyboard/key_2.mp3',
    },
    {
        name: 'keyboardKeydown3',
        type: 'audio',
        path: '/palace/audio/keyboard/key_3.mp3',
    },
    {
        name: 'keyboardKeydown4',
        type: 'audio',
        path: '/palace/audio/keyboard/key_4.mp3',
    },
    {
        name: 'keyboardKeydown5',
        type: 'audio',
        path: '/palace/audio/keyboard/key_5.mp3',
    },
    {
        name: 'keyboardKeydown6',
        type: 'audio',
        path: '/palace/audio/keyboard/key_6.mp3',
    },
    {
        name: 'startup',
        type: 'audio',
        path: '/palace/audio/startup/startup.mp3',
    },
    {
        name: 'office',
        type: 'audio',
        path: '/palace/audio/atmosphere/office.mp3',
    },
    {
        name: 'ccType',
        type: 'audio',
        path: '/palace/audio/cc/type.mp3',
    },
];

export default sources;
