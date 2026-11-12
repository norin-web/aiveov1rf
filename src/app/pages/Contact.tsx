import { useLocation } from "react-router";
import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

/** Reference contact page: centred title, form card with Name / Email / Subject / Message. */
export default function Contact() {
  const feedback = useLocation().pathname.replace(/\/$/, "").endsWith("/feedback");
  return (
    <section className="hero hero--page contact">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <Split as="h1" className="h-hero" parts={[[feedback ? "Tell us what you think." : "Get in touch."]]} />
        <Reveal as="p" className="lead hero__sub" delay={250}>
          Questions, ideas or a bug: write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a> or use the form.
        </Reveal>
        <Reveal className="formcard" delay={350}>
          <MailForm
            subject={feedback ? `${site.brand} feedback` : `${site.brand} question`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", auto: "name", required: true, half: true },
              { name: "email", label: "Email", type: "email", auto: "email", required: true, half: true },
              { name: "topic", label: "Subject", options: ["Making a video", "Subscription", "Bug report", "Feedback", "Other"] },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
