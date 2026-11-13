import { genres } from "../movies.js";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">watch.it</h1>
      <nav className="nav" aria-label="Genres">
        <ul>
          {genres.map((genre) => (
            <li key={genre}>
              <a href={`#${genre.toLowerCase()}`}>{genre}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="button button--search" type="button">
        Search
      </button>
    </header>
  );
}
