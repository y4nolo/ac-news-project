import React from "react";
import { Link } from "@reach/router";
// import "./Header.css";

function Header({ username }) {
  return (
    <div id="header">
      <h1> You are now logged in as {username}</h1>
      <Link to="/">
        <p>NorthCoders News</p>
      </Link>
    </div>
  );
}
export default Header;
