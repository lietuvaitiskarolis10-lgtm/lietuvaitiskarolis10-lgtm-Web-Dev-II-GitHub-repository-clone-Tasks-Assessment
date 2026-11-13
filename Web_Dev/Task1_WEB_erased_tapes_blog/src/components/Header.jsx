import Nav from "./Nav.jsx";
import { assets } from "../content.js";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={assets.logo} alt="Erased Tapes Records logo" />
      <Nav className="nav--header" />
    </header>
  );
}
