import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import Window from '../os/Window';

export interface TetrisProps extends WindowAppProps {}

const ROWS = 20;
const COLS = 10;
const CELL = 18;
const TICK_MS = 600;

type ShapeId = 'I' | 'O' | 'T' | 'S' | 'Z' | 'L' | 'J';

const SHAPES: Record<ShapeId, number[][]> = {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    Z: [[1, 1, 0], [0, 1, 1]],
    L: [[1, 0], [1, 0], [1, 1]],
    J: [[0, 1], [0, 1], [1, 1]],
};
const COLORS: Record<ShapeId, string> = {
    I: '#4d8fb0',
    O: '#d4b153',
    T: '#a04ba0',
    S: '#5fa040',
    Z: '#c84040',
    L: '#d08030',
    J: '#3050b0',
};
const SHAPE_IDS = Object.keys(SHAPES) as ShapeId[];

type Piece = { id: ShapeId; shape: number[][]; x: number; y: number };
type Grid = (ShapeId | 0)[][];
type State = {
    grid: Grid;
    piece: Piece | null;
    next: ShapeId;
    score: number;
    lines: number;
    gameOver: boolean;
    started: boolean;
};

const emptyGrid = (): Grid =>
    Array.from({ length: ROWS }, () => Array(COLS).fill(0) as (ShapeId | 0)[]);
const randomShape = (): ShapeId =>
    SHAPE_IDS[Math.floor(Math.random() * SHAPE_IDS.length)];
const spawnPiece = (id: ShapeId): Piece => {
    const shape = SHAPES[id].map((row) => [...row]);
    return { id, shape, x: Math.floor((COLS - shape[0].length) / 2), y: 0 };
};
const rotate = (shape: number[][]): number[][] => {
    const rows = shape.length;
    const cols = shape[0].length;
    const out = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            out[x][rows - 1 - y] = shape[y][x];
        }
    }
    return out;
};
const collides = (grid: Grid, piece: Piece): boolean => {
    for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
            if (!piece.shape[y][x]) continue;
            const gx = piece.x + x;
            const gy = piece.y + y;
            if (gx < 0 || gx >= COLS || gy >= ROWS) return true;
            if (gy >= 0 && grid[gy][gx]) return true;
        }
    }
    return false;
};
const lockPiece = (grid: Grid, piece: Piece): Grid => {
    const out = grid.map((row) => [...row]) as Grid;
    for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
            if (piece.shape[y][x] && piece.y + y >= 0) {
                out[piece.y + y][piece.x + x] = piece.id;
            }
        }
    }
    return out;
};
const clearLines = (grid: Grid): { grid: Grid; cleared: number } => {
    const keep = grid.filter((row) => row.some((c) => !c));
    const cleared = ROWS - keep.length;
    const filled: Grid = Array.from(
        { length: cleared },
        () => Array(COLS).fill(0) as (ShapeId | 0)[]
    );
    return { grid: [...filled, ...keep], cleared };
};

type Action =
    | { type: 'start' }
    | { type: 'tick' }
    | { type: 'move'; dx: number }
    | { type: 'soft' }
    | { type: 'hard' }
    | { type: 'rotate' }
    | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
    if (action.type === 'reset' || action.type === 'start') {
        return {
            grid: emptyGrid(),
            piece: spawnPiece(randomShape()),
            next: randomShape(),
            score: 0,
            lines: 0,
            gameOver: false,
            started: true,
        };
    }
    if (!state.started || state.gameOver || !state.piece) return state;
    if (action.type === 'tick' || action.type === 'soft') {
        const moved = { ...state.piece, y: state.piece.y + 1 };
        if (!collides(state.grid, moved)) {
            return {
                ...state,
                piece: moved,
                score: action.type === 'soft' ? state.score + 1 : state.score,
            };
        }
        const locked = lockPiece(state.grid, state.piece);
        const { grid: cleared, cleared: rows } = clearLines(locked);
        const nextPiece = spawnPiece(state.next);
        const lineScore = [0, 40, 100, 300, 1200][rows] ?? 0;
        if (collides(cleared, nextPiece)) {
            return {
                ...state,
                grid: cleared,
                piece: null,
                score: state.score + lineScore,
                lines: state.lines + rows,
                gameOver: true,
            };
        }
        return {
            ...state,
            grid: cleared,
            piece: nextPiece,
            next: randomShape(),
            score: state.score + lineScore,
            lines: state.lines + rows,
        };
    }
    if (action.type === 'move') {
        const moved = { ...state.piece, x: state.piece.x + action.dx };
        if (!collides(state.grid, moved)) return { ...state, piece: moved };
        return state;
    }
    if (action.type === 'rotate') {
        const rotated = { ...state.piece, shape: rotate(state.piece.shape) };
        for (const dx of [0, -1, 1, -2, 2]) {
            const candidate = { ...rotated, x: rotated.x + dx };
            if (!collides(state.grid, candidate))
                return { ...state, piece: candidate };
        }
        return state;
    }
    if (action.type === 'hard') {
        let piece = state.piece;
        let drop = 0;
        while (!collides(state.grid, { ...piece, y: piece.y + 1 })) {
            piece = { ...piece, y: piece.y + 1 };
            drop++;
        }
        const locked = lockPiece(state.grid, piece);
        const { grid: cleared, cleared: rows } = clearLines(locked);
        const nextPiece = spawnPiece(state.next);
        const lineScore = [0, 40, 100, 300, 1200][rows] ?? 0;
        if (collides(cleared, nextPiece)) {
            return {
                ...state,
                grid: cleared,
                piece: null,
                score: state.score + lineScore + drop * 2,
                lines: state.lines + rows,
                gameOver: true,
            };
        }
        return {
            ...state,
            grid: cleared,
            piece: nextPiece,
            next: randomShape(),
            score: state.score + lineScore + drop * 2,
            lines: state.lines + rows,
        };
    }
    return state;
};

const Tetris: React.FC<TetrisProps> = (props) => {
    const [state, dispatch] = useReducer(reducer, undefined, () => ({
        grid: emptyGrid(),
        piece: null,
        next: randomShape(),
        score: 0,
        lines: 0,
        gameOver: false,
        started: false,
    }));

    const tickMs = useMemo(
        () => Math.max(90, TICK_MS - Math.floor(state.lines / 10) * 80),
        [state.lines]
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
                if (k === 'Enter' || k === ' ' || k === 'r' || k === 'R') {
                    e.preventDefault();
                    dispatch({ type: 'reset' });
                }
                return;
            }
            if (k === 'ArrowLeft') {
                e.preventDefault();
                dispatch({ type: 'move', dx: -1 });
            } else if (k === 'ArrowRight') {
                e.preventDefault();
                dispatch({ type: 'move', dx: 1 });
            } else if (k === 'ArrowDown') {
                e.preventDefault();
                dispatch({ type: 'soft' });
            } else if (k === 'ArrowUp' || k === 'x' || k === 'X') {
                e.preventDefault();
                dispatch({ type: 'rotate' });
            } else if (k === ' ') {
                e.preventDefault();
                dispatch({ type: 'hard' });
            } else if (k === 'r' || k === 'R') {
                e.preventDefault();
                dispatch({ type: 'reset' });
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [state.started, state.gameOver]);

    const display = useMemo<Grid>(() => {
        const out: Grid = state.grid.map((row) => [...row]);
        if (state.piece) {
            for (let y = 0; y < state.piece.shape.length; y++) {
                for (let x = 0; x < state.piece.shape[y].length; x++) {
                    if (state.piece.shape[y][x] && state.piece.y + y >= 0) {
                        out[state.piece.y + y][state.piece.x + x] = state.piece.id;
                    }
                }
            }
        }
        return out;
    }, [state.grid, state.piece]);

    const start = useCallback(() => dispatch({ type: 'reset' }), []);

    const cellStyle = (cell: ShapeId | 0): React.CSSProperties => ({
        width: CELL,
        height: CELL,
        background: cell ? COLORS[cell as ShapeId] : '#1a1a1a',
        border: cell ? '1px solid rgba(0,0,0,0.4)' : '1px solid #2a2a2a',
        boxSizing: 'border-box',
    });

    const nextShape = SHAPES[state.next];
    const nextRows = nextShape.length;
    const nextCols = nextShape[0].length;

    return (
        <Window
            top={48}
            left={140}
            width={460}
            height={520}
            windowTitle="Tetris"
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
                            gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
                            gridTemplateRows: `repeat(${ROWS}, ${CELL}px)`,
                        }}
                    >
                        {display.flatMap((row, y) =>
                            row.map((cell, x) => (
                                <div key={`${x}-${y}`} style={cellStyle(cell)} />
                            ))
                        )}
                    </div>
                    {(!state.started || state.gameOver) && (
                        <div style={styles.overlay}>
                            <p style={styles.overlayTitle}>
                                {state.gameOver ? 'Game over' : 'Tetris'}
                            </p>
                            <p style={styles.overlayMeta}>
                                {state.gameOver
                                    ? `Score ${state.score} · Lines ${state.lines}`
                                    : '← → move · ↑ rotate · ↓ soft · space hard · R reset'}
                            </p>
                            <button type="button" style={styles.startBtn} onClick={start}>
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
                        <span style={styles.statLabel}>LINES</span>
                        <span style={styles.statValue}>{state.lines}</span>
                    </div>
                    <div style={styles.stat}>
                        <span style={styles.statLabel}>NEXT</span>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${nextCols}, ${CELL}px)`,
                                gridTemplateRows: `repeat(${nextRows}, ${CELL}px)`,
                                marginTop: 4,
                            }}
                        >
                            {nextShape.flatMap((row, y) =>
                                row.map((cell, x) => (
                                    <div
                                        key={`${x}-${y}`}
                                        style={{
                                            width: CELL,
                                            height: CELL,
                                            background: cell ? COLORS[state.next] : 'transparent',
                                            border: cell ? '1px solid rgba(0,0,0,0.4)' : 'none',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                    <p style={styles.help}>
                        ← → move
                        <br />
                        ↑ / X rotate
                        <br />
                        ↓ soft drop
                        <br />
                        space hard
                        <br />R reset
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
        background: '#101010',
        padding: 2,
    },
    board: { display: 'grid', gap: 0 },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 16,
        fontFamily: 'MSSerif, monospace',
        textAlign: 'center',
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
        width: 110,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'MSSerif, monospace',
    },
    stat: {
        border: '2px inset #ffffff',
        background: 'white',
        padding: '6px 10px',
        display: 'flex',
        flexDirection: 'column',
    },
    statLabel: { fontSize: 11, opacity: 0.7, letterSpacing: 1 },
    statValue: { fontSize: 20, fontWeight: 'bold' },
    help: { marginTop: 8, fontSize: 11, lineHeight: 1.6 },
};

export default Tetris;
