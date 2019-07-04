import React from "react";
// import "./Header.css";

function Header({ username }) {
  return (
    <div id="header">
      <h1 href="/">NorthCoders News</h1>

      <p>You are now logged in as {username}</p>
    </div>
  );
}
export default Header;
