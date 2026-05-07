import { Tweet } from "react-tweet";
import {
  PLATFORM_LABEL,
  type SocialPlatform,
  type SocialPost,
} from "@/lib/social-posts";

type IconProps = { className?: string };

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function XiaohongshuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z" />
    </svg>
  );
}

function BilibiliIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.148.165.205.257h3.21c.058-.092.126-.179.205-.257l2.652-2.652a1.25 1.25 0 0 1 1.768 0zM18.25 8.496H5.75a1.25 1.25 0 0 0-1.247 1.157L4.5 9.747v7.5a1.25 1.25 0 0 0 1.157 1.247l.093.003h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5a1.25 1.25 0 0 0-1.25-1.25zM8.25 11.083c.69 0 1.25.56 1.25 1.25v1.665a1.25 1.25 0 1 1-2.5 0v-1.665c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.665a1.25 1.25 0 1 1-2.5 0v-1.665c0-.69.56-1.25 1.25-1.25z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

const PLATFORM_ICON: Record<
  SocialPlatform,
  (props: IconProps) => React.ReactElement
> = {
  youtube: YouTubeIcon,
  x: XIcon,
  xiaohongshu: XiaohongshuIcon,
  bilibili: BilibiliIcon,
  linkedin: LinkedInIcon,
  other: LinkIcon,
};

const PLATFORM_ACCENT: Record<SocialPlatform, string> = {
  youtube: "text-red-500",
  x: "text-foreground",
  xiaohongshu: "text-rose-500",
  bilibili: "text-sky-500",
  linkedin: "text-blue-600",
  other: "text-[var(--muted)]",
};

// Per-platform aspect ratios for thumbnail slots. Locking the aspect at the
// container level reserves space *before* the image loads, eliminating the
// reflow flicker that breaks the masonry layout in Safari and Firefox.
const THUMB_ASPECT: Partial<Record<SocialPlatform, string>> = {
  youtube: "16 / 9",
  xiaohongshu: "4 / 5", // most XHS notes are portrait; cover-fit handles outliers
  bilibili: "16 / 10",
};

function formatDate(date: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Pull the numeric tweet id out of either the stored id (`x-<digits>`) or
// the post URL (`/status/<digits>`). Returns null when neither yields one.
function extractTweetId(post: SocialPost): string | null {
  const fromId = post.id.match(/^x-(\d+)$/);
  if (fromId) return fromId[1];
  const fromUrl = post.url.match(/status\/(\d+)/);
  if (fromUrl) return fromUrl[1];
  return null;
}

export function SocialPostCard({ post }: { post: SocialPost }) {
  // X / Twitter: defer to react-tweet, which fetches the tweet from the
  // public syndication API at render time and emits a fully styled card —
  // no manual title/thumbnail bookkeeping, deleted tweets degrade to a
  // built-in tombstone, and identical heights stabilize the masonry grid.
  if (post.platform === "x") {
    const tweetId = extractTweetId(post);
    if (tweetId) {
      return (
        <div className="social-tweet mb-6 break-inside-avoid">
          <Tweet id={tweetId} />
        </div>
      );
    }
  }

  const Icon = PLATFORM_ICON[post.platform];
  const accent = PLATFORM_ACCENT[post.platform];
  const hasThumb = Boolean(post.thumbnail);
  const aspect = THUMB_ASPECT[post.platform];

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-6 block break-inside-avoid overflow-hidden rounded-md border border-[var(--border)] bg-[var(--background)] transition hover:border-foreground/40 hover:shadow-sm"
    >
      {hasThumb ? (
        <div
          className="block w-full overflow-hidden bg-[var(--muted)]/10"
          style={aspect ? { aspectRatio: aspect } : undefined}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.thumbnail}
            alt={post.title}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
        </div>
      ) : (
        // Text-only post (or any post without media): render the body text as
        // the visual itself, in a stylized quote-card style. Falls back to an
        // icon-only block if there is no text at all.
        <div
          className={`relative flex w-full flex-col justify-between gap-4 bg-[var(--muted)]/5 p-5 ${accent}`}
          style={{ minHeight: "11rem" }}
        >
          <p className="font-serif text-[1.05rem] leading-snug text-foreground line-clamp-[8] whitespace-pre-line">
            {post.description || post.title || " "}
          </p>
          <Icon className="absolute bottom-4 right-4 h-5 w-5 opacity-40" />
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
          <Icon className={`h-3.5 w-3.5 ${accent}`} />
          <span className="font-mono uppercase tracking-wide">
            {PLATFORM_LABEL[post.platform]}
          </span>
          <span aria-hidden>·</span>
          <time className="font-mono tabular-nums">
            {formatDate(post.date)}
          </time>
        </div>
        {hasThumb ? (
          <h3 className="text-base font-medium leading-snug group-hover:underline underline-offset-4">
            {post.title}
          </h3>
        ) : (
          <span className="text-xs text-[var(--muted)] group-hover:text-foreground transition">
            View on {PLATFORM_LABEL[post.platform]} →
          </span>
        )}
        {hasThumb && post.description ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
            {post.description}
          </p>
        ) : null}
      </div>
    </a>
  );
}
