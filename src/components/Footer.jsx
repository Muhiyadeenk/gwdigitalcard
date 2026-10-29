import CountrySelector from "./CountrySelector.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <a className="footer-brand" href="#home" aria-label="Golden Wings, back to top">
          <img src="/assets/goldenwings-logo.png" alt="Golden Wings" width="1951" height="1545" />
        </a>
        <CountrySelector />
        <p className="copy">&copy; 2026 Golden Wings. All rights reserved.</p>
      </div>
    </footer>
  );
}
