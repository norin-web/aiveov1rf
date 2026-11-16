import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import Split from "./Split";
import Reveal from "./Reveal";
import Btn from "./Btn";

import { legalUpdated, type LegalDoc as Doc } from "../content/legal";

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const mail = (text: string, k: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={`${k}${i}`} href={`mailto:${part}`}>{part}</a> : <Fragment key={`${k}${i}`}>{part}</Fragment>,
  );
// "**…**" marks bold runs taken from the document
const linkify = (text: string) =>
  text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{mail(part, `b${i}`)}</strong> : mail(part, `t${i}`)));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  // a paragraph that is one bold line in the document reads as a small heading
  if (/^\*\*[^*]+\*\*$/.test(text)) return <p className="legal-lead"><strong>{text.slice(2, -2)}</strong></p>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet box so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [active, setActive] = useState(sections[0]?.id);

  // highlight the section whose heading last passed the upper third of the viewport
  useEffect(() => {
    const onScroll = () => {
      let cur = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 110, behavior: "smooth" });
  };

  return (
    <>
      <section className="lhero">
        <div className="glow glow--left" aria-hidden="true" />
        <div className="container">
          <Split as="h1" className="lhero__title" parts={[[doc.title]]} />
          <Reveal className="lhero__meta" delay={400}>
            {doc.body && <span>Effective {legalUpdated}</span>}
            {sections.length > 0 && <span>{sections.length} sections</span>}
            <a href={`mailto:${site.email}`} className="lhero__chip">{site.email}</a>
            <Link to={doc.other.to} className="lhero__chip">Read the {doc.other.label}</Link>
          </Reveal>
        </div>
      </section>

      <section className="legal2 panel">
        <div className={`container legal2__grid${sections.length ? "" : " legal2__grid--solo"}`}>
          {sections.length > 0 && (
          <aside className="legal2__toc" aria-label="Contents">
            <span className="eyebrow">Contents</span>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <button
                    className={active === s.id ? "is-on" : ""}
                    onClick={() => go(s.id)}
                    aria-current={active === s.id ? "true" : undefined}
                    aria-label={s.title}
                    title={s.title}
                  >
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <i aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ol>
          </aside>
          )}

          <article className="legal2__body">
            {doc.glance && (
              <Reveal className="glance">
                <span className="eyebrow">At a glance</span>
                <div className="glance__grid">
                  {doc.glance.map(([h, t]) => (
                    <div className="glance__card" key={h}>
                      <b>{h}</b>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <p className="glance__note">A short summary for convenience. The full text below is what applies.</p>
              </Reveal>
            )}

            {!doc.body && (
              <Reveal className="legal2__pending">
                <h2>The full text is on its way</h2>
                <p>
                  The {doc.title} of {site.brand} will be published on this page. Until then, if you have a question about
                  it, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              </Reveal>
            )}

            {intro.length > 0 && (
              <div className="legal2__intro">
                {intro.map((t, i) => <Block key={i} text={t} />)}
              </div>
            )}

            {sections.map((s, i) => (
              <section className="lsec" id={s.id} key={s.id}>
                <div className="lsec__head">
                  <span className="lsec__n">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{s.title}</h2>
                </div>
                <div className="lsec__text">
                  {s.blocks.map((b, j) => <Block key={j} text={b} />)}
                </div>
              </section>
            ))}

            {doc.body && (
            <div className="legal2__ask">
              <div>
                <span className="eyebrow">Questions about this document?</span>
                <p>
                  Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we’ll get back to you.
                </p>
              </div>
              <Btn to="/contact">Contact us</Btn>
            </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
