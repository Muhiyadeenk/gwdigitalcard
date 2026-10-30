import {
  Building2,
  Calculator,
  Landmark,
  Laptop,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";

const SERVICES = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Accurate financial records, ledger maintenance, and monthly reporting to keep your business on track.",
  },
  {
    icon: Receipt,
    title: "VAT Services",
    description: "VAT registration, return filing, compliance review, and tax consultancy tailored to regulations.",
  },
  {
    icon: Landmark,
    title: "Corporate Tax Services",
    description: "Strategic corporate tax planning, registration, assessment, and compliant filing for your entity.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance Services",
    description: "Independent statutory audits, internal reviews, and assurance solutions ensuring financial integrity.",
  },
  {
    icon: Laptop,
    title: "Software Implementation and Support",
    description: "Setup, integration, and training for leading accounting and ERP software solutions.",
  },
  {
    icon: Building2,
    title: "Company Formation & Licensing",
    description: "End-to-end guidance for business setup, trade licensing, approvals, and corporate structuring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head rv">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">Our Services</h2>
            <span className="rule" aria-hidden="true" />
          </div>
          <p>Professional solutions designed to help you grow.</p>
        </header>

        <ul className="service-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={(i % 3) * 0.09} />
          ))}
        </ul>
      </div>
    </section>
  );
}
