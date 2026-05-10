"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import styles from "../../styles.module.css";

const ROWS = 20;
const COLS = 10;
const TICK_MS = 600;

type ShapeId = "I" | "O" | "T" | "S" | "Z" | "L" | "J";

const SHAPES: Record<ShapeId, number[][]> = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  J: [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
};

const COLORS: Record<ShapeId, string> = {
  I: "#4d8fb0",
  O: "#d4b153",
  T: "#a8431c",
  S: "#6a8d4a",
  Z: "#a83e3e",
  L: "#c47a3a",
  J: "#5a6aa8",
};

const SHAPE_IDS = Object.keys(SHAPES) as ShapeId[];

type Piece = {
  id: ShapeId;
  shape: number[][];
  x: number;
  y: number;
};

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

function emptyGrid(): Grid {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0) as (ShapeId | 0)[]);
}

function randomShape(): ShapeId {
  return SHAPE_IDS[Math.floor(Math.random() * SHAPE_IDS.length)];
}

function spawnPiece(id: ShapeId): Piece {
  const shape = SHAPES[id].map((row) => [...row]);
  return {
    id,
    shape,
    x: Math.floor((COLS - shape[0].length) / 2),
    y: 0,
  };
}

function rotate(shape: number[][]): number[][] {
  const rows = shape.length;
  const cols = shape[0].length;
  const out = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      out[x][rows - 1 - y] = shape[y][x];
    }
  }
  return out;
}

function collides(grid: Grid, piece: Piece): boolean {
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
}

function lockPiece(grid: Grid, piece: Piece): Grid {
  const out = grid.map((row) => [...row]) as Grid;
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x] && piece.y + y >= 0) {
        out[piece.y + y][piece.x + x] = piece.id;
      }
    }
  }
  return out;
}

function clearLines(grid: Grid): { grid: Grid; cleared: number } {
  const keep = grid.filter((row) => row.some((c) => !c));
  const cleared = ROWS - keep.length;
  const filled: Grid = Array.from({ length: cleared }, () =>
    Array(COLS).fill(0) as (ShapeId | 0)[],
  );
  return { grid: [...filled, ...keep], cleared };
}

type Action =
  | { type: "start" }
  | { type: "tick" }
  | { type: "move"; dx: number }
  | { type: "soft" }
  | { type: "hard" }
  | { type: "rotate" }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  if (action.type === "reset" || action.type === "start") {
    const first = randomShape();
    const second = randomShape();
    return {
      grid: emptyGrid(),
      piece: spawnPiece(first),
      next: second,
      score: 0,
      lines: 0,
      gameOver: false,
      started: true,
    };
  }

  if (!state.started || state.gameOver || !state.piece) return state;

  if (action.type === "tick" || action.type === "soft") {
    const moved = { ...state.piece, y: state.piece.y + 1 };
    if (!collides(state.grid, moved)) {
      return {
        ...state,
        piece: moved,
        score: action.type === "soft" ? state.score + 1 : state.score,
      };
    }
    // Lock + clear
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

  if (action.type === "move") {
    const moved = { ...state.piece, x: state.piece.x + action.dx };
    if (!collides(state.grid, moved)) return { ...state, piece: moved };
    return state;
  }

  if (action.type === "rotate") {
    const rotated = { ...state.piece, shape: rotate(state.piece.shape) };
    // Try wall kicks
    for (const dx of [0, -1, 1, -2, 2]) {
      const candidate = { ...rotated, x: rotated.x + dx };
      if (!collides(state.grid, candidate)) return { ...state, piece: candidate };
    }
    return state;
  }

  if (action.type === "hard") {
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
}

function initialState(): State {
  return {
    grid: emptyGrid(),
    piece: null,
    next: randomShape(),
    score: 0,
    lines: 0,
    gameOver: false,
    started: false,
  };
}

export function Tetris({ active }: { active: boolean }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drop tick — speeds up by 25ms per 10 lines, floor 90ms
  const tickMs = useMemo(() => {
    return Math.max(90, TICK_MS - Math.floor(state.lines / 10) * 80);
  }, [state.lines]);

  useEffect(() => {
    if (!active || !state.started || state.gameOver) return;
    const id = setInterval(() => dispatch({ type: "tick" }), tickMs);
    return () => clearInterval(id);
  }, [active, state.started, state.gameOver, tickMs]);

  // Keyboard
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      if (!state.started || state.gameOver) {
        if (k === "Enter" || k === " " || k === "r" || k === "R") {
          e.preventDefault();
          dispatch({ type: "reset" });
        }
        return;
      }
      if (k === "ArrowLeft") {
        e.preventDefault();
        dispatch({ type: "move", dx: -1 });
      } else if (k === "ArrowRight") {
        e.preventDefault();
        dispatch({ type: "move", dx: 1 });
      } else if (k === "ArrowDown") {
        e.preventDefault();
        dispatch({ type: "soft" });
      } else if (k === "ArrowUp" || k === "x" || k === "X") {
        e.preventDefault();
        dispatch({ type: "rotate" });
      } else if (k === " ") {
        e.preventDefault();
        dispatch({ type: "hard" });
      } else if (k === "r" || k === "R") {
        e.preventDefault();
        dispatch({ type: "reset" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, state.started, state.gameOver]);

  // Compose displayed grid (locked + falling)
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

  // Next piece preview
  const nextShape = SHAPES[state.next];
  const nextRows = nextShape.length;
  const nextCols = nextShape[0].length;

  const start = useCallback(() => dispatch({ type: "reset" }), []);

  return (
    <div className={styles.gameLayout} ref={containerRef}>
      <div className={styles.gameBoard}>
        <div
          className={styles.tetrisGrid}
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {display.flatMap((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${x}-${y}`}
                className={styles.cell}
                style={{
                  background: cell ? COLORS[cell] : "transparent",
                  borderColor: cell ? "rgba(0,0,0,0.18)" : "rgba(31,26,20,0.06)",
                }}
              />
            )),
          )}
        </div>
        {(!state.started || state.gameOver) && (
          <div className={styles.gameOverlay}>
            <p className={styles.gameOverlayTitle}>
              {state.gameOver ? "Game over" : "Tetris"}
            </p>
            {state.gameOver ? (
              <p className={styles.gameOverlayMeta}>
                Score {state.score} · Lines {state.lines}
              </p>
            ) : (
              <p className={styles.gameOverlayMeta}>
                ←→ move · ↑ rotate · ↓ soft drop · space hard drop · R reset
              </p>
            )}
            <button
              type="button"
              className={styles.gameStartBtn}
              onClick={start}
            >
              {state.gameOver ? "Play again" : "Start"}
            </button>
          </div>
        )}
      </div>

      <aside className={styles.gameSide}>
        <div className={styles.gameStat}>
          <span className={styles.gameStatLabel}>Score</span>
          <span className={styles.gameStatValue}>{state.score}</span>
        </div>
        <div className={styles.gameStat}>
          <span className={styles.gameStatLabel}>Lines</span>
          <span className={styles.gameStatValue}>{state.lines}</span>
        </div>
        <div className={styles.gameStat}>
          <span className={styles.gameStatLabel}>Next</span>
          <div
            className={styles.nextGrid}
            style={{
              gridTemplateColumns: `repeat(${nextCols}, 1fr)`,
              gridTemplateRows: `repeat(${nextRows}, 1fr)`,
            }}
          >
            {nextShape.flatMap((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className={styles.cell}
                  style={{
                    background: cell ? COLORS[state.next] : "transparent",
                    borderColor: cell
                      ? "rgba(0,0,0,0.18)"
                      : "transparent",
                  }}
                />
              )),
            )}
          </div>
        </div>
        <p className={styles.gameHelp}>
          ← → move<br />↑ / X rotate<br />↓ soft drop<br />space hard drop<br />R reset
        </p>
      </aside>
    </div>
  );
}
