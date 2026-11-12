import { useState } from "react";
import { app, appFeatures, isSet, screens, specs, styles } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

/** Reference "Download" page → App: hero, screen strip, feature list + one phone, examples grid, details. */
export default function OurApp() {
  const [cur, setCur] = useState(0);
  const rows = specs.filter(([, v]) => !v.includes("PLACEHOLDER"));

  return (
    <>
      <section className="hero hero--page">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <Split as="h1" className="h-hero" parts={[["Ideas in,"], ["\n"], ["videos out."]]} />
          <Reveal as="p" className="lead hero__sub" delay={250}>
            Text to video, image to video, a prompt builder and an AI chat, in one app for iPhone.
          </Reveal>
          <Reveal className="hero__cta" delay={350}>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="strip" tabIndex={0} aria-label="App screens">
          {screens.map((s, i) => (
            <figure key={s.label}>
              <img src={img(s.img)} alt={`${s.label} screen`} loading={i < 3 ? undefined : "lazy"} width={760} height={1595} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container feat">
          <div className="feat__copy">
            <Reveal className="head head--left">
              <h2 className="h2">What you can do</h2>
            </Reveal>
            <ul className="feat__list" role="tablist" aria-label="Features">
              {appFeatures.map((f, i) => (
                <li key={f.title}>
                  <button role="tab" aria-selected={i === cur} className={i === cur ? "is-on" : ""} onClick={() => setCur(i)}>
                    <i aria-hidden="true" />
                    <strong>{f.title}</strong>
                    <span>{f.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="feat__phone" aria-live="polite">
            {appFeatures.map((f, i) => (
              <img key={f.title} src={img(f.img)} alt={i === cur ? `${f.title} screen` : ""} className={i === cur ? "is-on" : ""} loading="lazy" width={760} height={1595} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">Made from a single line</h2>
            <p className="lead">Open any example in the app and tap Use template to start from its prompt.</p>
          </Reveal>
          <div className="cards">
            {styles.map((s, i) => (
              <Reveal as="article" className="pcard" key={s.name} delay={(i % 3) * 80}>
                <img src={img(s.img)} alt="" loading="lazy" />
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.prompt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Reveal className="head head--left">
            <h2 className="h2">At a glance</h2>
          </Reveal>
          <dl className="specs">
            {rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {!isSet(app.minIOS) && <p className="note specs__note">System requirements will appear here once the app is live in the App Store.</p>}
        </div>
      </section>
    </>
  );
}
