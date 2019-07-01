import React from "react";
import { Link } from "@reach/router";
import "../css/main.css";

import { push as Menu } from "react-burger-menu";

function NavBar() {
  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <main id="page-wrap">
        <Menu right>
          <p>
            <Link to="/"> Home </Link>
          </p>
          <p>
            <Link to="/"> Articles </Link>
          </p>
          <p>
            <Link to="/topics"> Topics </Link>
          </p>
        </Menu>
      </main>
    </div>
  );
}

export default NavBar;
