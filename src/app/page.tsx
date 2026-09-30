import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Artwork } from "@/components/artwork";
import { featuredEpisode, podcast } from "@/content/podcast";

const notes = ["IDEAS", "PEOPLE", "PLOT TWISTS", "SIDE ROADS"];

export default function HomePage() {
  return (
    <main id="main">
      <section className="home-hero page-wrap" aria-labelledby="hero-title">
        <div className="hero-kicker"><span className="live-dot" /> {podcast.cadence}<span className="hero-kicker-line" /></div>
        <div className="hero-copy">
          <p className="hero-overline">A podcast about making a life of it</p>
          <h1 id="hero-title">Stay curious.<br /><span>Take the</span> <em>detour.</em></h1>
          <p className="hero-description">{podcast.description}</p>
          <Link className="round-link" href="/episodes/" aria-label="Explore all episodes"><ArrowDown size={19} aria-hidden="true" /></Link>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>GOOD<br />QUESTIONS</span><span className="stamp-star">✳</span><span>UNEXPECTED<br />PLACES</span></div>
        <div className="hero-notes" aria-label="Topics"><span>IN GOOD COMPANY WITH</span>{notes.map((note) => <span key={note}>{note}</span>)}</div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="page-wrap featured-inner">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-mark">✳</span> On the record</p>
            <p className="section-count">THE LATEST / 001</p>
          </div>
          <div className="featured-grid">
            <Link href={`/episodes/${featuredEpisode.slug}/`} className="featured-art-link" aria-label={`Explore featured episode: ${featuredEpisode.title}`}>
              <Artwork episode={featuredEpisode} className="featured-artwork" />
              <span className="featured-play"><MoveUpRight size={25} aria-hidden="true" /></span>
              <span className="art-caption">A CONVERSATION IN 38 MINUTES</span>
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>FEATURED CONVERSATION</span><span>EP. 01</span></div>
              <h2 id="featured-title">{featuredEpisode.title}<span className="title-period">.</span></h2>
              <p className="featured-summary">{featuredEpisode.summary}</p>
              <div className="featured-byline"><span className="byline-avatar">MT</span><span>With <strong>{podcast.host}</strong><br />{featuredEpisode.category} · {featuredEpisode.duration}</span></div>
              <Link className="text-link" href={`/episodes/${featuredEpisode.slug}/`}>Step inside the conversation <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <span className="featured-number" aria-hidden="true">01</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-invite page-wrap">
        <p className="eyebrow">There&apos;s more where that came from</p>
        <h2>Twenty ways<br />to <em>look again.</em></h2>
        <Link className="pill-link" href="/episodes/">Meet the whole cast <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <span className="invite-scribble" aria-hidden="true">↗</span>
      </section>
    </main>
  );
}
