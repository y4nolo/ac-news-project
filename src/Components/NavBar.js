import React from "react";
import { Link } from "@reach/router";
import "../css/main.css";

function NavBar() {
  return (
    <div classname="menu" id="outer-container">
      <main id="page-wrap">
        <button>
          <Link to="/"> Home </Link>
        </button>
        <button>
          <Link to="/"> Articles </Link>
        </button>
        <button>
          <Link to="/topics"> Topics </Link>
        </button>
      </main>
    </div>
  );
}

export default NavBar;
