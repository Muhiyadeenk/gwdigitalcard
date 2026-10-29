import { Calculator, Code, Compass, GraduationCap, Globe, Laptop } from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";

const SERVICES = [
  {
    icon: Globe,
    title: "Global Business Solutions",
    description: "Guidance for setting up and running your business with confidence.",
  },
  {
    icon: GraduationCap,
    title: "Education and Training",
    description: "Practical learning programmes for students and professionals.",
  },
  {
    icon: Calculator,
    title: "Professional Accounting Services",
    description: "Bookkeeping, tax and compliance support for your business.",
  },
  {
    icon: Laptop,
    title: "Computerized Accounting Training",
    description: "Hands-on training in accounting software and real-world practice.",
  },
  {
    icon: Code,
    title: "Digital Solutions and IT Services",
    description: "Technology support to help your business work smarter.",
  },
  {
    icon: Compass,
    title: "Career Guidance and Placement Support",
    description: "Guidance to help you plan and take the next step in your career.",
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
