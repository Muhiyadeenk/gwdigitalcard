import { ArrowUpRight } from "lucide-react";

export default function ContactCard({
  icon,
  title,
  description,
  buttonLabel,
  href,
  disabled = false,
  disabledNote,
  delay = 0,
}) {
  const noteId = disabled ? `note-${title.replace(/\W+/g, "-").toLowerCase()}` : undefined;

  return (
    <article className="contact-card rv" style={{ "--d": `${delay}s` }}>
      <span className="icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="action">
        {disabled ? (
          <>
            <button
              type="button"
              className="btn btn--solid btn--sm"
              disabled
              aria-describedby={noteId}
            >
              {buttonLabel} <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p id={noteId} className="note">
              {disabledNote}
            </p>
          </>
        ) : (
          <a
            className="btn btn--solid btn--sm"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
