import type { Metadata } from "next";
import { EpisodeCard } from "@/components/episode-card";
import { episodes } from "@/content/podcast";

export const metadata: Metadata = { title: "All episodes" };

export default function EpisodesPage() {
  return (
    <main id="main" className="page-wrap page-main">
      <div className="page-intro">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> The listening room</p>
        <h1>All the good<br /><em>conversations.</em></h1>
        <div className="page-intro-bottom"><p>Twenty open doors. Take whichever one<br className="desktop-break" /> catches your eye.</p><span>01 — 20 / THE ARCHIVE</span></div>
      </div>
      <div className="episode-grid">
        {episodes.map((episode) => <EpisodeCard key={episode.slug} episode={episode} />)}
      </div>
    </main>
  );
}
