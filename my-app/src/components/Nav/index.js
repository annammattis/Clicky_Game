import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Wonders of the World</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
      <iframe
      src="https://ia903008.us.archive.org/26/items/loseit/FISHER%20-%20Losing%20It.mp3"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    </nav>
  );
}

export default Nav;
