import React, { useEffect, useRef, useState } from "react";

import "./CardsSecond.css";

const VideoCard = () => {
  const [isVideoPlaying, setisVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setisVideoPlaying(false);
    } else {
      videoRef.current.play();
      setisVideoPlaying(true);
    }
  };
  return (
    <div className="video__player">
      <div className="overColor" />
      <video
        src="https://sujinhhh.github.io/deploy/fireworks.mp4"
        alt="video"
        autoPlay
        onClick={onVideoPress}
        ref={videoRef}
        loop
        muted
      />
    </div>
  );
};

export default VideoCard;
