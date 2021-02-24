import React, { useRef } from "react";
import "../index.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const card = useRef(null);

  const mousemove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };
  return (
    <main className="main">
      <div onMouseMove={mousemove} className="hero-container" ref={card}>
        <div className="card" ref={card}>
          <div className="object">
            <div className="circle">
              <img src="./images/animat-campfire.gif" alt="fire" />
            </div>
          </div>
          <div className="info">
            <h1 className="title">I'm on Fire!</h1>
            <h3>Who wants join "on fire"</h3>
            <div className="menu">
              <button>me</button>
              <button className="active">work</button>
              <button>fun</button>
            </div>
            <div className="shop">
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
