import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">A show for the curious</p>
          <p className="footer-title">Keep a good<br /><em>question close.</em></p>
        </div>
        <Link className="footer-link" href="/episodes/">Explore all episodes <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <div className="footer-bottom">
        <Link className="footer-brand" href="/">OFF SCRIPT<span>®</span></Link>
        <p>Made for the long way around.</p>
        <p>© 2026 Off Script Studio</p>
      </div>
    </footer>
  );
}
