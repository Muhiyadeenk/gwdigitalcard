import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons.jsx";
import { COUNTRIES, WHATSAPP_URL } from "../config.js";

export default function Hero() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-tag">
            <span>Global Business Solution</span>
            <span>and Education Centre</span>
          </p>

          <h1 id="hero-title">
            Your Partner in <em>Growth</em> and Excellence
          </h1>

          <p className="lead">
            Business solutions, accounting and professional training under one name.
          </p>

          <div className="hero-actions">
            <a className="btn btn--outline" href="#services">
              Explore our services <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              className="btn btn--solid"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} /> Chat on WhatsApp
            </a>
          </div>

          <ul className="presence" aria-label="Countries we serve">
            {COUNTRIES.map((c) => (
              <li key={c.key}>{c.label}</li>
            ))}
          </ul>
        </div>

        {!logoFailed && (
          <div className="hero-visual">
            <div className="logo-wrap">
              <img
                className="logo"
                src="/assets/goldenwings-logo.png"
                alt="Golden Wings logo"
                width="1951"
                height="1545"
                decoding="async"
                fetchPriority="high"
                onError={() => setLogoFailed(true)}
              />
              <span className="shine" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
