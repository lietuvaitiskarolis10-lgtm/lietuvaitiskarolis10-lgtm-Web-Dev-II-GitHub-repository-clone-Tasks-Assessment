import { socials } from "../content.js";

export default function Socials({ vertical = false }) {
  return (
    <ul className={`socials${vertical ? " socials--vertical" : ""}`}>
      {socials.map((s) => (
        <li key={s.name}>
          <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
            <img src={s.icon} alt="" className={s.dark ? "icon--dark" : undefined} />
          </a>
        </li>
      ))}
    </ul>
  );
}
