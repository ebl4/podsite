import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const navigation = [
  { href: "/episodes/", label: "Episodes" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Off Script home">
        <span className="brand-mark" aria-hidden="true">O<span>.</span></span>
        <span className="brand-name">OFF<br />SCRIPT</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/episodes/">
        Find your next listen <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={23} aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </details>
    </header>
  );
}
