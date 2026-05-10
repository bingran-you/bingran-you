"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import styles from "../../styles.module.css";

const SIZE = 20;
const START_TICK_MS = 140;

type Vec = [number, number];
type Dir = "up" | "down" | "left" | "right";

const DIRS: Record<Dir, Vec> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
};

const OPPOSITE: Record<Dir, Dir> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
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

function spawnFood(snake: Vec[]): Vec {
  while (true) {
    const f: Vec = [
      Math.floor(Math.random() * SIZE),
      Math.floor(Math.random() * SIZE),
    ];
    if (!snake.some(([x, y]) => x === f[0] && y === f[1])) return f;
  }
}

function freshState(best: number): State {
  const snake: Vec[] = [
    [10, 10],
    [9, 10],
    [8, 10],
  ];
  return {
    snake,
    dir: "right",
    queuedDir: "right",
    food: spawnFood(snake),
    score: 0,
    best,
    gameOver: false,
    started: true,
  };
}

type Action =
  | { type: "start" }
  | { type: "tick" }
  | { type: "turn"; dir: Dir }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  if (action.type === "start" || action.type === "reset") {
    return freshState(state.best);
  }
  if (!state.started || state.gameOver) return state;
  if (action.type === "turn") {
    if (action.dir === OPPOSITE[state.dir]) return state;
    return { ...state, queuedDir: action.dir };
  }
  if (action.type === "tick") {
    const dir = state.queuedDir;
    const [hx, hy] = state.snake[0];
    const [dx, dy] = DIRS[dir];
    const next: Vec = [hx + dx, hy + dy];
    // Wall collision
    if (next[0] < 0 || next[0] >= SIZE || next[1] < 0 || next[1] >= SIZE) {
      return { ...state, gameOver: true, best: Math.max(state.best, state.score) };
    }
    // Self collision (skip tail tip if it will move)
    const willGrow =
      next[0] === state.food[0] && next[1] === state.food[1];
    const bodyToCheck = willGrow ? state.snake : state.snake.slice(0, -1);
    if (bodyToCheck.some(([x, y]) => x === next[0] && y === next[1])) {
      return { ...state, gameOver: true, best: Math.max(state.best, state.score) };
    }
    const snake = willGrow
      ? [next, ...state.snake]
      : [next, ...state.snake.slice(0, -1)];
    const food = willGrow ? spawnFood(snake) : state.food;
    const score = willGrow ? state.score + 1 : state.score;
    return { ...state, snake, dir, food, score };
  }
  return state;
}

function initial(): State {
  return {
    snake: [],
    dir: "right",
    queuedDir: "right",
    food: [0, 0],
    score: 0,
    best: 0,
    gameOver: false,
    started: false,
  };
}

export function Snake({ active }: { active: boolean }) {
  const [state, dispatch] = useReducer(reducer, undefined, initial);
  const containerRef = useRef<HTMLDivElement>(null);

  // Tick interval scales mildly with score
  const tickMs = useMemo(() => {
    return Math.max(70, START_TICK_MS - state.score * 2);
  }, [state.score]);

  useEffect(() => {
    if (!active || !state.started || state.gameOver) return;
    const id = setInterval(() => dispatch({ type: "tick" }), tickMs);
    return () => clearInterval(id);
  }, [active, state.started, state.gameOver, tickMs]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      if (!state.started || state.gameOver) {
        if (
          k === "Enter" ||
          k === " " ||
          k === "r" ||
          k === "R" ||
          k.startsWith("Arrow")
        ) {
          e.preventDefault();
          dispatch({ type: "reset" });
        }
        return;
      }
      if (k === "ArrowUp" || k === "w" || k === "W") {
        e.preventDefault();
        dispatch({ type: "turn", dir: "up" });
      } else if (k === "ArrowDown" || k === "s" || k === "S") {
        e.preventDefault();
        dispatch({ type: "turn", dir: "down" });
      } else if (k === "ArrowLeft" || k === "a" || k === "A") {
        e.preventDefault();
        dispatch({ type: "turn", dir: "left" });
      } else if (k === "ArrowRight" || k === "d" || k === "D") {
        e.preventDefault();
        dispatch({ type: "turn", dir: "right" });
      } else if (k === "r" || k === "R") {
        e.preventDefault();
        dispatch({ type: "reset" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, state.started, state.gameOver]);

  // Render grid
  const cells = useMemo(() => {
    const map: Array<"empty" | "head" | "body" | "food"> = Array(
      SIZE * SIZE,
    ).fill("empty");
    state.snake.forEach(([x, y], i) => {
      map[y * SIZE + x] = i === 0 ? "head" : "body";
    });
    const [fx, fy] = state.food;
    if (state.snake.length) map[fy * SIZE + fx] = "food";
    return map;
  }, [state.snake, state.food]);

  const start = useCallback(() => dispatch({ type: "reset" }), []);

  return (
    <div className={styles.gameLayout} ref={containerRef}>
      <div className={styles.gameBoard}>
        <div
          className={styles.snakeGrid}
          style={{
            gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${SIZE}, 1fr)`,
          }}
        >
          {cells.map((c, i) => (
            <div
              key={i}
              className={styles.cell}
              style={{
                background:
                  c === "head"
                    ? "#7d2e10"
                    : c === "body"
                      ? "#a8431c"
                      : c === "food"
                        ? "#6a8d4a"
                        : "transparent",
                borderColor:
                  c === "empty" ? "rgba(31,26,20,0.04)" : "rgba(0,0,0,0.2)",
                borderRadius: c === "food" ? "50%" : 0,
              }}
            />
          ))}
        </div>
        {(!state.started || state.gameOver) && (
          <div className={styles.gameOverlay}>
            <p className={styles.gameOverlayTitle}>
              {state.gameOver ? "Game over" : "Snake"}
            </p>
            <p className={styles.gameOverlayMeta}>
              {state.gameOver
                ? `Score ${state.score} · Best ${state.best}`
                : "Arrow keys / WASD · R to reset"}
            </p>
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
          <span className={styles.gameStatLabel}>Best</span>
          <span className={styles.gameStatValue}>{state.best}</span>
        </div>
        <p className={styles.gameHelp}>
          ↑ ↓ ← →  /  W A S D
          <br />R reset
        </p>
      </aside>
    </div>
  );
}
