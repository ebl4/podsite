import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="page-wrap not-found">
      <p className="eyebrow"><span className="eyebrow-mark">✳</span> A little off course</p>
      <p className="not-found-number">404</p>
      <h1>This page took<br /><em>a detour.</em></h1>
      <p>The conversation you&apos;re looking for isn&apos;t here. There are plenty more to find.</p>
      <Link className="pill-link" href="/episodes/"><ArrowLeft size={16} aria-hidden="true" /> Back to all episodes</Link>
    </main>
  );
}
