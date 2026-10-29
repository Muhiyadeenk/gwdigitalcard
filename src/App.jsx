import { useRef } from "react";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal, useScrollProgress } from "./hooks.js";

export default function App() {
  const progressRef = useRef(null);
  useScrollProgress(progressRef);
  useReveal();

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
