/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageGallery from "../../gallery/ImageGallery";
import VideoGallery from "../../gallery/VideoGallery";

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="mt-24">
      <h4 className="mx-auto uppercase text-4xl text-zinc-600 text-center border-y-4 border-zinc-300 w-[30%]">
        My Portfolio
      </h4>
      <ImageGallery />
      <h4 className="mx-auto mt-24 uppercase text-4xl text-zinc-600 text-center border-y-4 border-zinc-300 w-[30%]">
        Videos
      </h4>
      <VideoGallery />
    </div>
  );
};

export default Portfolio;
