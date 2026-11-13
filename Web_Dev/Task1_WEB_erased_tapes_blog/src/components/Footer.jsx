import Nav from "./Nav.jsx";
import Socials from "./Socials.jsx";
import { copyright } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <Nav className="nav--footer" />
      <p className="copyright">{copyright}</p>
      <Socials />
    </footer>
  );
}
