import React from "react";

const VideoItem: React.FC<VideoItemProps> = ({ text, videoSrc }) => {
  return (
    <div className="relative w-full mx-auto mt-12">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center text-white z-20 uppercase tracking-widest text-md">
        {text}
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)]"></div>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full object-cover"
      />
    </div>
  );
};

export default VideoItem;
