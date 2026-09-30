import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Episode } from "@/content/podcast";
import { formatDate } from "@/content/podcast";
import { Artwork } from "@/components/artwork";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="episode-card">
      <Link className="episode-art-link" href={`/episodes/${episode.slug}/`} aria-label={`Read episode ${episode.number}: ${episode.title}`}>
        <Artwork episode={episode} className="card-artwork" />
        <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="episode-card-copy">
        <div className="episode-meta"><span>{episode.category}</span><span>EP. {String(episode.number).padStart(2, "0")}</span></div>
        <h2><Link href={`/episodes/${episode.slug}/`}>{episode.title}</Link></h2>
        <p>{episode.summary}</p>
        <div className="episode-foot"><time dateTime={episode.publishedAt}>{formatDate(episode.publishedAt)}</time><span>{episode.duration}</span></div>
      </div>
    </article>
  );
}
