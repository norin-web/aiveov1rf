import { useState } from "react";
import { Link } from "react-router";
import { Check, ChevronRight, ImagePlus, Type, Wand2 } from "lucide-react";
import { app, bento, faq, pro, rows, steps, styles } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const icons = { type: Type, image: ImagePlus };

/** Hero → bento → screen rows → style picker → Pro → FAQ → get started (reference: Swift). */
export default function Home() {
  const [style, setStyle] = useState(0);
  const cur = styles[style];

  return (
    <>
      {/* S01 Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal as="p" className="hero__eyebrow">AI video generator for iPhone</Reveal>
          <Split as="h1" className="h-hero" parts={[["Type a scene."], ["\n"], ["Get a video."]]} />
          <Reveal as="p" className="lead hero__sub" delay={250}>
            Describe any idea or pick a photo, and AI Veo turns it into a short, cinematic video in seconds.
          </Reveal>
          <Reveal className="hero__cta" delay={350}>
            <Btn href={app.url} variant="dark">Download on the App Store</Btn>
          </Reveal>
          <Reveal className="hero__phone" delay={450}>
            <img src={img("/images/phone-home.webp")} alt="AI Veo home screen with a prompt card and the Generate button" width={760} height={1595} />
          </Reveal>
        </div>
      </section>

      {/* S02 Bento */}
      <section className="section section--tight">
        <div className="container bento">
          {bento.map((b, i) => {
            const Icon = icons[b.icon as keyof typeof icons];
            return (
              <Reveal className="tile" key={b.title} delay={i * 80}>
                <Icon className="tile__icon" aria-hidden="true" />
                <div>
                  <h2 className="h-tile">{b.title}</h2>
                  <p className="tile__text">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
          <Reveal className="tile tile--wide">
            <div className="tile__copy">
              <Wand2 className="tile__icon" aria-hidden="true" />
              <div>
                <h2 className="h-tile">Smart Prompt Builder</h2>
                <p className="tile__text">Tell it what you imagine in plain words. The app writes the detailed prompt for you.</p>
              </div>
            </div>
            <div className="tile__phone">
              <img src={img("/images/phone-prompt.webp")} alt="Prompt Builder screen with a generated prompt" loading="lazy" width={760} height={1595} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* S03 Screen rows */}
      <section className="section section--tight" id="features">
        <div className="container rows">
          {rows.map((r, i) => (
            <div className={`row${i % 2 ? " row--flip" : ""}`} key={r.title}>
              <Reveal className="row__media">
                <img src={img(r.img)} alt={r.alt} loading="lazy" width={760} height={1595} />
              </Reveal>
              <Reveal className="row__copy" delay={120}>
                <h2 className="h2">{r.title}</h2>
                <p className="lead">{r.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* S04 Style picker — chips swap the frame and the prompt */}
      <section className="section">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">Pick a style. The prompt follows.</h2>
            <p className="lead">The Prompt Builder offers ten styles. Choose one and see the kind of shot it leans toward.</p>
          </Reveal>
          <Reveal className="styler">
            <div className="styler__chips" role="tablist" aria-label="Prompt styles">
              {styles.map((s, i) => (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={i === style}
                  aria-controls="styler-panel"
                  className={`chipbtn${i === style ? " is-on" : ""}`}
                  onClick={() => setStyle(i)}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <div className="styler__panel" id="styler-panel" role="tabpanel" aria-live="polite">
              <div className="styler__frame">
                {styles.map((s, i) => (
                  <img key={s.name} src={img(s.img)} alt={i === style ? `${s.name} example frame` : ""} className={i === style ? "is-on" : ""} loading="lazy" />
                ))}
              </div>
              <div className="styler__side">
              <div className="prompt">
                <span className="prompt__label">Prompt</span>
                <p className="prompt__text" key={cur.name}>{cur.prompt}</p>
                <div className="prompt__chips" aria-label="Generation settings">
                  <span>{cur.name}</span>
                  <span>768p</span>
                  <span>9:16</span>
                </div>
              </div>
              <p className="note">Sample prompts. In the app the Prompt Builder writes a longer one from your own words.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* S06 Pro */}
      <section className="section">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">All the tools, one subscription</h2>
            <p className="lead">Pro opens every creative tool in the app. Prices are shown in the App Store before you buy.</p>
          </Reveal>
          <Reveal className="plan">
            <div className="plan__card">
              <h3 className="h-tile">Pro</h3>
              <p className="tile__text">Unlimited creative tools for video.</p>
              <hr />
              <Btn href={app.url}>Get AI Veo</Btn>
              <p className="plan__note">Billed through your Apple Account. Cancel anytime in iPhone Settings.</p>
            </div>
            <ul className="plan__list">
              {pro.map((p) => (
                <li key={p}><Check aria-hidden="true" />{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* S07 FAQ */}
      <section className="section section--tight">
        <div className="container faqh">
          <Reveal className="faqh__tile">
            <img src={img("/images/app-icon.png")} alt="" width={120} height={120} loading="lazy" />
          </Reveal>
          <Reveal className="faqh__list" delay={100}>
            <h2 className="h3">Frequently asked questions</h2>
            <dl>
              {[faq[0], faq[1], faq[5], faq[6]].map((f) => (
                <div key={f.q}>
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
            <Link to="/support" className="more">All questions <ChevronRight aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* S08 Get started */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta">
            <h2 className="h-display">Your next video is one prompt away.</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  {i === 0 ? (
                    <img src={img("/images/app-icon.png")} alt="" width={40} height={40} />
                  ) : (
                    <b aria-hidden="true">{i + 1}</b>
                  )}
                  <span>
                    <strong>{s.title}</strong>
                    {s.text}
                  </span>
                </li>
              ))}
            </ol>
            <Btn href={app.url}>Download on the App Store</Btn>
            <div className="cta__phone">
              <img src={img("/images/phone-generating.webp")} alt="Generating screen: Creating your video" loading="lazy" width={760} height={1595} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
