import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

/** Reference FAQ block (icon tile + list), turned into an accordion with every question. */
export default function Support() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="hero hero--page">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <Split as="h1" className="h-hero" parts={[["How can we help?"]]} />
          <Reveal as="p" className="lead hero__sub" delay={250}>
            Answers about making videos, your Library and the subscription. Didn’t find yours? Write to us.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container faqh">
          <Reveal className="faqh__tile">
            <img src={img("/images/app-icon.png")} alt="" width={120} height={120} />
          </Reveal>
          <div className="faqh__list">
            <h2 className="h3">Frequently asked questions</h2>
            <div className="acc">
              {faq.map((f, i) => {
                const on = open === i;
                return (
                  <div className={`acc__item${on ? " is-open" : ""}`} key={f.q}>
                    <h3>
                      <button aria-expanded={on} aria-controls={`a-${i}`} id={`q-${i}`} onClick={() => setOpen(on ? null : i)}>
                        <span>{f.q}</span>
                        <ChevronDown aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="acc__a" id={`a-${i}`} role="region" aria-labelledby={`q-${i}`}>
                      <div><p>{f.a}</p></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="mailcard">
            <div>
              <h2 className="h3">Still stuck?</h2>
              <p className="lead">Email us and describe what happened. A screenshot helps.</p>
            </div>
            <a className="mailcard__addr" href={`mailto:${site.email}`}>{site.email}</a>
            <Btn to="/contact">Open the contact form</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
