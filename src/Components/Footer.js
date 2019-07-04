import React from "react";

//import "../css/main.css";

function Footer() {
  return (
    <div id="footer">
      <ul className="icons">
        <li>
          <i href="https://twitter.com/northcoders" class="fab fa-instagram">
            <span className="label" />
          </i>
        </li>
        <li>
          <i
            href="https://www.facebook.com/northcoders/"
            className="icon fa-facebook"
          >
            <span className="label">Facebook</span>
          </i>
        </li>
        <li>
          <i
            href="https://www.instagram.com/northcoders/"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </i>
        </li>

        <li>
          <i href="https://github.com/northcoders" className="icon fa-github">
            <span className="label">Github</span>
          </i>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
