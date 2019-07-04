import React from "react";

//import "../css/main.css";

function Footer() {
  return (
    <div id="footer">
      <ul className="icons">
        <li>
          <p href="https://twitter.com/northcoders" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </p>
        </li>
        <li>
          <p
            href="https://www.facebook.com/northcoders/"
            className="icon fa-facebook"
          >
            <span className="label">Facebook</span>
          </p>
        </li>
        <li>
          <p
            href="https://www.instagram.com/northcoders/"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </p>
        </li>

        <li>
          <p href="https://github.com/northcoders" className="icon fa-github">
            <span className="label">Github</span>
          </p>
        </li>
      </ul>
      Design: Ana Chan
    </div>
  );
}

export default Footer;
