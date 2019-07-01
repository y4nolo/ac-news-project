import React from "react";
import "../css/main.css";

function Header({ username }) {
  return (
    <div id="header">
      <h1>
        <p href="/">
          <span>NorthCoders News</span>
        </p>
      </h1>
      <p> You are now logged in as {username}</p>
    </div>
  );
}
export default Header;
