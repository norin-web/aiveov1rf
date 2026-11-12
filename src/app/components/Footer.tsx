import { Link } from "react-router";
import { app, site, isSet } from "../content/site";
import { img } from "../utils/img";

/** Reference footer: brand + three link columns, copyright row, giant wordmark. */
export default function Footer() {
  const owner = isSet(site.operator) ? site.operator : site.brand;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={28} height={28} />
              <span>{site.brand}</span>
            </Link>
            <p>Turn a written idea or a photo into a short video, right on your iPhone.</p>
            <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <h2>Product</h2>
              <ul>
                <li><Link to="/app">The App</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2>Help</h2>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {owner}</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
        <p className="footer__legal">{site.disclaimer}</p>
      </div>
      <div className="footer__word" aria-hidden="true">AI Veo</div>
    </footer>
  );
}
