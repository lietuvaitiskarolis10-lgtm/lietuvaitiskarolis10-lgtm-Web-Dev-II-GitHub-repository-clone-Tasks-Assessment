export default function Article({ post }) {
  return (
    <article className="article">
      <h1 className="title">
        {post.title}
        <span className="subtitle">{post.subtitle}</span>
      </h1>
      <p className="intro">{post.intro}</p>
      <div className="columns">
        {post.sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((text, j) => (
              <p key={j}>{text}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
