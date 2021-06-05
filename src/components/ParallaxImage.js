import React from "react";
import "./ParallaxImage.css";

function ParallaxImage() {
  return (
    <div className="loader-container">
      <div class="loader-bars">
        <div className="floating">
          <img
            src="https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ParallaxImage;
