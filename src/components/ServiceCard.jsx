export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <li className="service-card rv" style={{ "--d": `${delay}s` }}>
      <span className="icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.7} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
