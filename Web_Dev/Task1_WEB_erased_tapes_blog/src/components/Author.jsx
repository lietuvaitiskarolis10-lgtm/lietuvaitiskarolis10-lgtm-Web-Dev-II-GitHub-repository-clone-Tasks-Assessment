import Socials from "./Socials.jsx";
import { assets } from "../content.js";

export default function Author({ heading, bio }) {
  return (
    <section className="author">
      <div className="author-text">
        <h2>{heading}</h2>
        <p>{bio}</p>
      </div>
      <img className="author-photo" src={assets.author} alt="The author" />
      <Socials vertical />
    </section>
  );
}
