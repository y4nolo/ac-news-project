import React from "react";
import "./Banner.css";
function Banner(props) {
  return (
    <section id="banner" data-video="background loop">
      <div className="inner">
        <header>
          <h1>This is NorthCoders News</h1>
          <p>The home of groundbreaking news and articles</p>
          <br />
        </header>
        <div className="banner">
          <video className="video" src autoPlay loop>
            <source
              src={require("../Assets/background loop.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        {/* <a href="#main" class="button big alt scrolly">Dignissim</a> */}
      </div>
    </section>
  );
}

export default Banner;
