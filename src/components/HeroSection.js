import React from "react";
import "../index.css";
import { Button } from "./Button";
import "./HeroSection.css";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="main">
      <div className="hero-container">
        {/* hero test */}

        <div class="zone1">
          <div class="orb"></div>
          <div class="ring">
            <div class="pivot-wrapper level1">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level2">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level3">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level4">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level5">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level6">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
            <div class="pivot-wrapper level7">
              <div class="pivot r"></div>
              <div class="pivot l"></div>
            </div>
          </div>
        </div>

        {/* <Link to="work" className="work">
          <h1>My Works</h1>
        </Link>
        <Link to="about-me" className="about">
          <h1>About Me?</h1>
        </Link> */}
      </div>
    </main>
  );
};

export default HeroSection;
