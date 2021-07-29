import React from "react";
import "./ParallaxImage.css";

function ParallaxImage() {
  return (
    <div className="loader-container">
      <div class="loader-bars">
        <div className="floating">
          <img src="./bg-min.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ParallaxImage;
