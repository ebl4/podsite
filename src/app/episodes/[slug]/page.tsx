import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Artwork } from "@/components/artwork";
import { episodes, formatDate } from "@/content/podcast";

type EpisodePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return episodes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((item) => item.slug === slug);
  return episode ? { title: episode.title, description: episode.summary } : { title: "Episode not found" };
}

export default async function EpisodeDetailPage({ params }: EpisodePageProps) {
  const { slug } = await params;
  const episode = episodes.find((item) => item.slug === slug);
  if (!episode) notFound();
  const nextEpisode = episodes.find((item) => item.number === episode.number + 1);

  return (
    <main id="main" className="page-wrap episode-detail">
      <Link className="back-link" href="/episodes/"><ArrowLeft size={16} aria-hidden="true" /> All episodes</Link>
      <div className="detail-layout">
        <div className="detail-art-column">
          <Artwork episode={episode} className="detail-artwork" />
          <p className="art-caption">OFF SCRIPT ARCHIVE / {String(episode.number).padStart(2, "0")}</p>
        </div>
        <article className="detail-copy">
          <div className="episode-meta"><span>{episode.category}</span><span>EPISODE {String(episode.number).padStart(2, "0")}</span></div>
          <h1>{episode.title}<span className="title-period">.</span></h1>
          <p className="detail-deck">{episode.summary}</p>
          <div className="detail-byline"><span className="byline-avatar">MT</span><span>A conversation with <strong>Maya Torres</strong></span></div>
          <div className="detail-stats"><div><span>RELEASED</span><time dateTime={episode.publishedAt}>{formatDate(episode.publishedAt)}</time></div><div><span>RUN TIME</span><strong>{episode.duration}</strong></div></div>
          <div className="detail-note"><span className="eyebrow-mark">✳</span><p>Some conversations stay with you after the headphones come off. This is one of those.</p></div>
          <Link className="text-link" href={nextEpisode ? `/episodes/${nextEpisode.slug}/` : "/episodes/"}>{nextEpisode ? "Keep wandering: next episode" : "Back to the full collection"} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </article>
      </div>
    </main>
  );
}
