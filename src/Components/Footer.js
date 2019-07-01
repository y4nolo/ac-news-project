import React from "react";

import "../css/main.css";

function Footer() {
  return (
    <div id="footer">
      <ul class="icons">
        <li>
          <p href="https://twitter.com/northcoders" class="icon fa-twitter">
            <span class="label">Twitter</span>
          </p>
        </li>
        <li>
          <p
            href="https://www.facebook.com/northcoders/"
            class="icon fa-facebook"
          >
            <span class="label">Facebook</span>
          </p>
        </li>
        <li>
          <p
            href="https://www.instagram.com/northcoders/"
            class="icon fa-instagram"
          >
            <span class="label">Instagram</span>
          </p>
        </li>

        <li>
          <p href="https://github.com/northcoders" class="icon fa-github">
            <span class="label">Github</span>
          </p>
        </li>
      </ul>
      Design: Ana Chan
    </div>
  );
}

export default Footer;
