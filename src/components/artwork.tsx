import type { Episode } from "@/content/podcast";

export function Artwork({
  episode,
  className = "",
}: {
  episode: Pick<Episode, "artwork" | "number" | "title">;
  className?: string;
}) {
  return (
    <div
      className={`artwork artwork-${episode.artwork.tone} ${className}`}
      role="img"
      aria-label={`Abstract cover artwork for episode ${episode.number}: ${episode.title}`}
    >
      <span className="artwork-index">OS—{String(episode.number).padStart(2, "0")}</span>
      <span className="artwork-orbit artwork-orbit-one" aria-hidden="true" />
      <span className="artwork-orbit artwork-orbit-two" aria-hidden="true" />
      <span className="artwork-sun" aria-hidden="true" />
      <span className="artwork-label">{episode.artwork.label}</span>
      <span className="artwork-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
    </div>
  );
}
