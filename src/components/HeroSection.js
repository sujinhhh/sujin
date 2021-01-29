import React from "react";
import "../index.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="main">
      <div className="hero-container">
        <Link to="work" className="work">
          <h1>My Works</h1>
        </Link>
        <Link to="about-me" className="about">
          <h1>About Me?</h1>
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
