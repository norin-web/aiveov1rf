import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="hero hero--page">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="h-hero">Page not found</h1>
        <p className="lead hero__sub">This page doesn’t exist or has moved.</p>
        <div className="hero__cta"><Btn to="/">Back to home</Btn></div>
      </div>
    </section>
  );
}
