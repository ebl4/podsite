import type { Metadata } from "next";
import { faqs } from "@/content/podcast";

export const metadata: Metadata = { title: "Frequently asked questions" };

export default function FAQPage() {
  return (
    <main id="main" className="page-wrap page-main faq-page">
      <div className="faq-intro">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> The practical bits</p>
        <h1>Good to<br /><em>know.</em></h1>
        <p>For everything else, there&apos;s always another question.</p>
      </div>
      <section className="faq-list" aria-label="Frequently asked questions">
        {faqs.map((item, index) => (
          <details className="faq-item" key={item.question} open={index === 0}>
            <summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
        <p className="faq-footnote">STILL WONDERING? <a href="mailto:hello@offscript.example">SEND US A NOTE ↗</a></p>
      </section>
    </main>
  );
}
