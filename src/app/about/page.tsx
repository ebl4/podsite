import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { podcast } from "@/content/podcast";

export const metadata: Metadata = { title: "About the show" };

export default function AboutPage() {
  return (
    <main id="main" className="page-wrap page-main about-page">
      <div className="about-topline"><p className="eyebrow"><span className="eyebrow-mark">✳</span> A little context</p><span>THE SHOW / EST. CURIOUS</span></div>
      <h1>Not a straight<br />line in <em>sight.</em></h1>
      <div className="about-grid">
        <div className="about-art" role="img" aria-label="Abstract illustration of a winding path through an open landscape">
          <span className="about-art-sun" /><span className="about-art-path" /><span className="about-art-caption">TAKE<br />YOUR<br />TIME.</span><span className="about-art-mark">✳</span>
        </div>
        <div className="about-copy">
          <p className="about-lead">{podcast.description}</p>
          <p>Off Script is for anyone who has ever followed a hunch, taken the scenic route, or found the good part somewhere they didn&apos;t expect. Each week, host Maya Torres sits down with people who make things, ask questions, and pay attention.</p>
          <p>No playbook. No elevator pitches. Just generous conversations about the work behind the work—and all the interesting things that happen along the way.</p>
          <div className="host-note"><span className="host-monogram">MT</span><span><strong>Maya Torres</strong><br />Host, professional question-asker</span></div>
          <a className="text-link" href="mailto:hello@offscript.example">Say hello <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </main>
  );
}
