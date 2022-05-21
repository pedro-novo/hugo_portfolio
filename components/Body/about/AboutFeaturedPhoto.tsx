/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutFeaturedPhoto: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full flex justify-center items-center mt-4 xl:mt-0">
      <div className="absolute h-[500px] w-full after:content-[''] after:absolute after:bg-zinc-200 after:h-full after:w-[340px] after:left-[45%] after:top-[45%] after:-translate-x-[50%] after:-translate-y-[50%] xl:after:-translate-y-[80%] after:shadow-xl">
        <img
          src="/images/about/wedding-intro.jpg"
          alt="About Hugo"
          className="absolute h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] xl:-translate-y-[80%] z-10 shadow-xl"
        />
      </div>
    </div>
  );
};

export default AboutFeaturedPhoto;
