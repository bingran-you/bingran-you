type IonChainProps = {
  count?: number;
  size?: number;
  gap?: number;
  excited?: number;
  className?: string;
  animate?: boolean;
};

// IonChain — the personal site's signature brand motif. Five filled dots on a
// hairline. The "excited" middle dot wears the rust accent + a soft glow ring;
// the two NEIGHBORS (excited ± 1) jump in sequence on a 1800ms loop with a
// 600ms phase offset between them — this is the "neighbor decoherence" pattern
// from brand-ion-chain.html in the design bundle, NOT a single-dot quantum
// jump. Subtle but rewards attention. opt-out via prefers-reduced-motion.
export function IonChain({
  count = 5,
  size = 14,
  gap = 32,
  excited = 2,
  className = "",
  animate = true,
}: IonChainProps) {
  const dots = Array.from({ length: count });
  const jumpD = `-${Math.round(size * 0.7)}px`;
  const animatedNeighbors = new Set<number>([excited - 1, excited + 1]);

  return (
    <div
      className={`relative inline-flex items-center text-[var(--ink)] ${className}`}
      style={{
        gap: `${gap}px`,
        height: `${size + 24}px`,
        padding: `0 ${size / 2}px`,
      }}
      aria-hidden
    >
      <span
        className="absolute top-1/2 h-px"
        style={{
          left: size / 2,
          right: size / 2,
          background: "currentColor",
        }}
      />
      {dots.map((_, i) => {
        const isExcited = i === excited;
        const shouldAnimate = animate && animatedNeighbors.has(i);
        // Phase offset: left neighbor 0ms, right neighbor 600ms — creates a
        // gentle back-and-forth around the rust dot.
        const delay = i === excited - 1 ? "0ms" : i === excited + 1 ? "600ms" : "0ms";
        return (
          <span
            key={i}
            className={`relative z-[1] rounded-full ${shouldAnimate ? "ion-jump-anim" : ""}`}
            style={
              {
                width: size,
                height: size,
                background: isExcited ? "var(--accent-rust)" : "currentColor",
                boxShadow: isExcited
                  ? `0 0 0 ${Math.round(size / 3)}px rgba(224,112,58,0.18)`
                  : "none",
                "--jump-d": jumpD,
                "--ion-delay": delay,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
