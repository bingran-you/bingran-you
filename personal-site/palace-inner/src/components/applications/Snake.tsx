import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import Window from '../os/Window';

export interface SnakeProps extends WindowAppProps {}

const SIZE = 20;
const START_TICK_MS = 140;
const CELL = 16;

type Vec = [number, number];
type Dir = 'up' | 'down' | 'left' | 'right';

const DIRS: Record<Dir, Vec> = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0],
};
const OPPOSITE: Record<Dir, Dir> = {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left',
};

type State = {
    snake: Vec[];
    dir: Dir;
    queuedDir: Dir;
    food: Vec;
    score: number;
    best: number;
    gameOver: boolean;
    started: boolean;
};

const spawnFood = (snake: Vec[]): Vec => {
    while (true) {
        const f: Vec = [
            Math.floor(Math.random() * SIZE),
            Math.floor(Math.random() * SIZE),
        ];
        if (!snake.some(([x, y]) => x === f[0] && y === f[1])) return f;
    }
};

const freshState = (best: number): State => {
    const snake: Vec[] = [
        [10, 10],
        [9, 10],
        [8, 10],
    ];
    return {
        snake,
        dir: 'right',
        queuedDir: 'right',
        food: spawnFood(snake),
        score: 0,
        best,
        gameOver: false,
        started: true,
    };
};

type Action =
    | { type: 'start' }
    | { type: 'tick' }
    | { type: 'turn'; dir: Dir }
    | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
    if (action.type === 'start' || action.type === 'reset') {
        return freshState(state.best);
    }
    if (!state.started || state.gameOver) return state;
    if (action.type === 'turn') {
        if (action.dir === OPPOSITE[state.dir]) return state;
        return { ...state, queuedDir: action.dir };
    }
    if (action.type === 'tick') {
        const dir = state.queuedDir;
        const [hx, hy] = state.snake[0];
        const [dx, dy] = DIRS[dir];
        const next: Vec = [hx + dx, hy + dy];
        if (next[0] < 0 || next[0] >= SIZE || next[1] < 0 || next[1] >= SIZE) {
            return {
                ...state,
                gameOver: true,
                best: Math.max(state.best, state.score),
            };
        }
        const willGrow = next[0] === state.food[0] && next[1] === state.food[1];
        const bodyToCheck = willGrow ? state.snake : state.snake.slice(0, -1);
        if (bodyToCheck.some(([x, y]) => x === next[0] && y === next[1])) {
            return {
                ...state,
                gameOver: true,
                best: Math.max(state.best, state.score),
            };
        }
        const snake = willGrow
            ? [next, ...state.snake]
            : [next, ...state.snake.slice(0, -1)];
        const food = willGrow ? spawnFood(snake) : state.food;
        const score = willGrow ? state.score + 1 : state.score;
        return { ...state, snake, dir, food, score };
    }
    return state;
};

const Snake: React.FC<SnakeProps> = (props) => {
    const [state, dispatch] = useReducer(reducer, undefined, () => ({
        snake: [],
        dir: 'right' as Dir,
        queuedDir: 'right' as Dir,
        food: [0, 0] as Vec,
        score: 0,
        best: 0,
        gameOver: false,
        started: false,
    }));

    const tickMs = useMemo(
        () => Math.max(70, START_TICK_MS - state.score * 2),
        [state.score]
    );

    useEffect(() => {
        if (!state.started || state.gameOver) return;
        const id = setInterval(() => dispatch({ type: 'tick' }), tickMs);
        return () => clearInterval(id);
    }, [state.started, state.gameOver, tickMs]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const k = e.key;
            if (!state.started || state.gameOver) {
                if (
                    k === 'Enter' ||
                    k === ' ' ||
                    k === 'r' ||
                    k === 'R' ||
                    k.startsWith('Arrow')
                ) {
                    e.preventDefault();
                    dispatch({ type: 'reset' });
                }
                return;
            }
            if (k === 'ArrowUp' || k === 'w' || k === 'W') {
                e.preventDefault();
                dispatch({ type: 'turn', dir: 'up' });
            } else if (k === 'ArrowDown' || k === 's' || k === 'S') {
                e.preventDefault();
                dispatch({ type: 'turn', dir: 'down' });
            } else if (k === 'ArrowLeft' || k === 'a' || k === 'A') {
                e.preventDefault();
                dispatch({ type: 'turn', dir: 'left' });
            } else if (k === 'ArrowRight' || k === 'd' || k === 'D') {
                e.preventDefault();
                dispatch({ type: 'turn', dir: 'right' });
            } else if (k === 'r' || k === 'R') {
                e.preventDefault();
                dispatch({ type: 'reset' });
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [state.started, state.gameOver]);

    const cellStyle = useCallback((cell: 'empty' | 'head' | 'body' | 'food') => {
        const base: React.CSSProperties = {
            width: CELL,
            height: CELL,
            boxSizing: 'border-box',
        };
        if (cell === 'head') return { ...base, background: '#004000' };
        if (cell === 'body') return { ...base, background: '#0a8a30' };
        if (cell === 'food')
            return {
                ...base,
                background: '#c93030',
                borderRadius: '50%',
            };
        return { ...base, background: '#88c070' };
    }, []);

    const cells = useMemo(() => {
        const map: Array<'empty' | 'head' | 'body' | 'food'> = Array(
            SIZE * SIZE
        ).fill('empty');
        state.snake.forEach(([x, y], i) => {
            map[y * SIZE + x] = i === 0 ? 'head' : 'body';
        });
        const [fx, fy] = state.food;
        if (state.snake.length) map[fy * SIZE + fx] = 'food';
        return map;
    }, [state.snake, state.food]);

    return (
        <Window
            top={64}
            left={120}
            width={500}
            height={460}
            windowTitle="Snake"
            windowBarIcon="windowGameIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div style={styles.body}>
                <div style={styles.boardWrap}>
                    <div
                        style={{
                            ...styles.board,
                            gridTemplateColumns: `repeat(${SIZE}, ${CELL}px)`,
                            gridTemplateRows: `repeat(${SIZE}, ${CELL}px)`,
                        }}
                    >
                        {cells.map((c, i) => (
                            <div key={i} style={cellStyle(c)} />
                        ))}
                    </div>
                    {(!state.started || state.gameOver) && (
                        <div style={styles.overlay}>
                            <p style={styles.overlayTitle}>
                                {state.gameOver ? 'Game over' : 'Snake'}
                            </p>
                            <p style={styles.overlayMeta}>
                                {state.gameOver
                                    ? `Score ${state.score} · Best ${state.best}`
                                    : 'Arrow keys / WASD · R to reset'}
                            </p>
                            <button
                                type="button"
                                style={styles.startBtn}
                                onClick={() => dispatch({ type: 'reset' })}
                            >
                                {state.gameOver ? 'Play again' : 'Start'}
                            </button>
                        </div>
                    )}
                </div>
                <aside style={styles.side}>
                    <div style={styles.stat}>
                        <span style={styles.statLabel}>SCORE</span>
                        <span style={styles.statValue}>{state.score}</span>
                    </div>
                    <div style={styles.stat}>
                        <span style={styles.statLabel}>BEST</span>
                        <span style={styles.statValue}>{state.best}</span>
                    </div>
                    <p style={styles.help}>
                        ↑ ↓ ← →
                        <br />
                        W A S D
                        <br />
                        R = reset
                    </p>
                </aside>
            </div>
        </Window>
    );
};

const styles: { [k: string]: React.CSSProperties } = {
    body: {
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        background: '#c0c0c0',
        height: '100%',
        boxSizing: 'border-box',
    },
    boardWrap: {
        position: 'relative',
        border: '2px inset #ffffff',
        background: '#88c070',
        padding: 4,
    },
    board: {
        display: 'grid',
        gap: 0,
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'MSSerif, monospace',
    },
    overlayTitle: { fontSize: 24, fontWeight: 'bold', margin: 0 },
    overlayMeta: { fontSize: 12, margin: 0, opacity: 0.85 },
    startBtn: {
        padding: '6px 18px',
        fontFamily: 'MSSerif, monospace',
        fontSize: 14,
        background: '#c0c0c0',
        color: '#000',
        border: '2px outset #ffffff',
        cursor: 'pointer',
    },
    side: {
        marginLeft: 16,
        width: 120,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'MSSerif, monospace',
    },
    stat: {
        border: '2px inset #ffffff',
        background: 'white',
        padding: '8px 10px',
        display: 'flex',
        flexDirection: 'column',
    },
    statLabel: { fontSize: 11, opacity: 0.7, letterSpacing: 1 },
    statValue: { fontSize: 22, fontWeight: 'bold' },
    help: { marginTop: 12, fontSize: 12, lineHeight: 1.6 },
};

export default Snake;
