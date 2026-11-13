import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { movies } from "./movies.js";

function layoutFor(index) {
  if (index === 0) return "featured";
  if (index <= 2) return "stacked";
  return "wide";
}

export default function App() {
  return (
    <>
      <Header />
      <main className="movies">
        {movies.map((movie, i) => (
          <MovieCard key={movie.title} movie={movie} layout={layoutFor(i)} />
        ))}
      </main>
    </>
  );
}
