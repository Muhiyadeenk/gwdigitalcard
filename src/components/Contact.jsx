import { Globe } from "lucide-react";
import ContactCard from "./ContactCard.jsx";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons.jsx";
import { INSTAGRAM_URL, WEBSITE_URL, WHATSAPP_URL, isConfigured } from "../config.js";

export default function Contact() {
  const instagramReady = isConfigured(INSTAGRAM_URL);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel rv">
          <div className="contact-intro">
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&rsquo;s Connect</h2>
            <span className="rule" aria-hidden="true" />
            <p>We would love to hear from you.</p>

            <div className="number-block">
              <small>WhatsApp</small>
              <strong>+971 56 995 5748</strong>
            </div>
          </div>

          <div className="contact-list">
            <ContactCard
              icon={<Globe size={22} strokeWidth={1.7} />}
              title="VISIT OUR WEBSITE"
              description="Explore our services and learn more about Golden Wings."
              buttonLabel="OPEN WEBSITE"
              href={WEBSITE_URL}
            />
            <ContactCard
              icon={<WhatsAppIcon size={22} />}
              title="CHAT WITH US"
              description="Have a question? Connect with our team directly."
              buttonLabel="CHAT ON WHATSAPP"
              href={WHATSAPP_URL}
              delay={0.08}
            />
            <ContactCard
              icon={<InstagramIcon size={22} />}
              title="FOLLOW OUR JOURNEY"
              description="Stay connected with our latest updates and activities."
              buttonLabel="FOLLOW ON INSTAGRAM"
              href={INSTAGRAM_URL}
              disabled={!instagramReady}
              disabledNote="Instagram profile coming soon."
              delay={0.16}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
