import { COUNTRIES, COUNTRY_LINKS, isConfigured } from "../config.js";

export default function CountrySelector() {
  return (
    <nav className="countries" aria-label="Golden Wings country websites">
      <ul>
        {COUNTRIES.map(({ key, label }) => {
          const url = COUNTRY_LINKS[key];
          const content = <span>{label}</span>;

          return (
            <li key={key}>
              {isConfigured(url) ? (
                <a
                  className="country is-on"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${key} website (opens in a new tab)`}
                >
                  {content}
                </a>
              ) : (
                <span
                  className="country is-off"
                  aria-disabled="true"
                  title="Website coming soon"
                >
                  {content}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
