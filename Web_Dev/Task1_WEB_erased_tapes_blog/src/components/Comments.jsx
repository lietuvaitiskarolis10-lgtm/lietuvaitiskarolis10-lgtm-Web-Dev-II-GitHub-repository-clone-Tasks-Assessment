export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h2>Comments</h2>
      <ul>
        {comments.map((c, i) => (
          <li key={i} className="comment">
            <p className="comment-user">{c.username}</p>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
