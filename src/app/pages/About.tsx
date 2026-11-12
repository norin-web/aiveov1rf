import { app, isSet, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

// DRAFT copy — the owner hasn't sent an About text; keep it to what the app does.
const principles = [
  { title: "Start from words", text: "A sentence is enough. The Prompt Builder and the AI chat help when you don’t know how to phrase it." },
  { title: "Your photos, moving", text: "Image to video starts from a picture you already have, so the result looks like your idea, not a stock clip." },
  { title: "Clear about payment", text: "Pro is billed by Apple. You see the price before you buy and cancel it in your iPhone settings." },
];

export default function About() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <Split as="h1" className="h-hero" parts={[["Video for anyone"], ["\n"], ["with an idea."]]} />
          <Reveal as="p" className="lead hero__sub" delay={250}>
            {site.brand} is an iPhone app that turns written ideas and photos into short videos with AI.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about">
          <Reveal className="about__media">
            <img src={img("/images/ex-house.webp")} alt="A glass pavilion in the desert at dusk, an example frame from the app" />
          </Reveal>
          <Reveal className="about__copy" delay={120}>
            <h2 className="h2">Less setup, more watching</h2>
            <p className="lead">
              Making a video used to mean cameras, editing and time. In {site.brand} you describe the shot, pick a style if you like,
              and tap Generate. The app keeps every result in your Library so you can replay, share or download it later.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="head head--left">
            <h2 className="h2">Three things we keep simple</h2>
          </Reveal>
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal className="principle" key={p.title} delay={i * 80}>
                <h3 className="h-tile">{p.title}</h3>
                <p className="tile__text">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta cta--short">
            <h2 className="h-display">Try it with your own idea.</h2>
            <p className="lead">{isSet(site.operator) ? `${site.brand} is made by ${site.operator}. ` : ""}Questions or feedback: <a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
