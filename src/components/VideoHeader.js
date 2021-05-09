import React, { useEffect } from "react";
import "./VideoHeader.css";
import Rellax from "rellax";

const VideoHeader = () => {
  useEffect(() => {
    new Rellax(".animate_first", {
      // <---- Via class name
      speed: -1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".animate_second", {
      // <---- Via useRef element
      speed: -6,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className="VideoHeader__container">
      <div className="animate_first">
        <h1> I Love Fireworks</h1>
      </div>

      <div className="animate_second">
        <h1> Click to stop fireworks</h1>
      </div>
    </div>
  );
};

export default VideoHeader;
