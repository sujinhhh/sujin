import React, { useRef } from "react";
import "../index.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import ParallaxImage from "./ParallaxImage";

const HeroSection = () => {
  const card = useRef(null);
  const title = useRef(null);

  const onButton = (e) => {
    e.target.className = "active";
  };

  const offButton = (e) => {
    e.target.className = "";
  };

  const mouseOn = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const mouseEnter = (e) => {
    card.current.style.transition = "none";
    console.log(title.current);
  };

  const mouseOff = (e) => {
    card.current.style.transition = "all 0.5s ease";
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.current.style.transform = "translateZ(0px)";
  };

  return (
    <main className="main">
      <div className="background">
        <div
          onMouseMove={mouseOn}
          onMouseLeave={mouseOff}
          onMouseEnter={mouseEnter}
          className="hero-container"
          ref={card}
        >
          <div className="card" ref={card}>
            <div className="object">
              <div className="circle">
                <img src="./images/animat-campfire.gif" alt="fire" />
              </div>
            </div>
            <div className="info">
              <h1 className="title" ref={title}>
                Welcome
              </h1>
              <h2>Online shopping & Movies!</h2>
              <h3>
                “Shop virtually with a sales associate via phone or video
                call.Find hours, directions, and learn more about our various
                services to enhance your shopping experience. We can't wait to
                see you!”{" "}
              </h3>

              <div className="menu">
                <Link to="/about">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    Home
                  </button>
                </Link>
                <Link to="/work">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    movie
                  </button>
                </Link>
                <Link to="/blog">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    Blog
                  </button>
                </Link>
              </div>
              <div className="shop">
                <Link to="/shop">
                  <button>shop now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bar">
        <ParallaxImage />
      </div>
    </main>
  );
};

export default HeroSection;
