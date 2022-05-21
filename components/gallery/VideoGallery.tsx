import React from "react";
import VideoItem from "./VideoItem";

const VideoGallery: React.FC = () => {
  return (
    <div className="w-[95%] mx-auto mt-20">
      <VideoItem
        text={"Someone's Event"}
        videoSrc={"/videos/drone/droneFootage.mp4"}
      />
      <VideoItem
        text={"Someone's Wedding"}
        videoSrc={"/videos/wedding/weddingFootage.mp4"}
      />
    </div>
  );
};

export default VideoGallery;
