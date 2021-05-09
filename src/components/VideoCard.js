import React, { useRef, useState } from "react";
import "./CardsSecond.css";
import VideoHeader from "./VideoHeader";
import Cards from "./Cards";

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
      <div className="VideoHeader">
        <Cards />
      </div>
      <div className="overColor" />
      <video
        src="https://sujinhhh.github.io/img/fireworks.mp4"
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
