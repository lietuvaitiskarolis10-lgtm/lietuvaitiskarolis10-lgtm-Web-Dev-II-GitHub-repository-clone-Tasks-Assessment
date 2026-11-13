export default function AlbumGrid({ featured, others }) {
  return (
    <section className="albums" aria-label="Albums">
      <img className="album album--featured" src={featured.image} alt={featured.title} />
      {others.map((album, i) => (
        <img key={i} className="album" src={album.image} alt={album.title} />
      ))}
    </section>
  );
}
