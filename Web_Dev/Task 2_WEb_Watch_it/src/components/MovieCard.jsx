// `layout` only changes the design on desktop:
// "featured" = wide poster on top, text and button side by side
// "stacked"  = poster on top, text, button at the bottom
// "wide"     = poster on the left, text and button on the right
export default function MovieCard({ movie, layout = "stacked" }) {
  return (
    <article className={`card card--${layout}`}>
      <img className="card-poster" src={movie.poster} alt={`${movie.title} poster`} />
      <div className="card-body">
        <div className="card-text">
          <h2 className="card-title">
            {movie.title} <span className="card-year">({movie.year})</span>
          </h2>
          <p>{movie.description}</p>
        </div>
        <button className="button button--watch" type="button">
          Watch Now
        </button>
      </div>
    </article>
  );
}
