import React, { useRef } from "react";
import "../index.css";
import "./HeroSection.css";
import "./snow.css";
import { Link } from "react-router-dom";

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
        {/* snow */}
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>

        {/* snow ends */}
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
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus aperiam ducimus cum velit nisi dignissimos harum non,
              </h3>
              <div className="menu">
                <Link to="/about">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    me
                  </button>
                </Link>
                <Link to="/work">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    work
                  </button>
                </Link>
                <Link to="/blog">
                  <button
                    onMouseOver={(e) => onButton(e)}
                    onMouseLeave={(e) => offButton(e)}
                  >
                    blog
                  </button>
                </Link>
              </div>
              <div className="shop">
                <Link to="/shop">
                  <button>Shop</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
