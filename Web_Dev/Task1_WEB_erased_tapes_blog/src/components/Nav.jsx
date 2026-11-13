import { navLinks } from "../content.js";

export default function Nav({ className = "" }) {
  return (
    <nav className={`nav ${className}`}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
