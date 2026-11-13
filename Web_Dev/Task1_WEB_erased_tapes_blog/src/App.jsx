import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import AlbumGrid from "./components/AlbumGrid.jsx";
import Author from "./components/Author.jsx";
import Comments from "./components/Comments.jsx";
import Footer from "./components/Footer.jsx";
import { post, albums, author, comments } from "./content.js";

export default function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Article post={post} />
        <AlbumGrid {...albums} />
        <Author {...author} />
        <Comments comments={comments} />
      </main>
      <Footer />
    </>
  );
}
