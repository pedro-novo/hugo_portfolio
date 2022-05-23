/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const AboutFeaturedPhoto: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full xl:w-[33%] flex justify-center items-center mt-8 xl:mt-0">
      <div className="absolute h-[500px] w-full after:content-[''] after:absolute after:bg-zinc-200 after:h-full after:w-[340px] after:left-[45%] after:top-[45%] after:-translate-x-[50%] after:-translate-y-[50%] xl:after:-translate-y-[80%] after:shadow-xl">
        <div className="absolute h-full w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] xl:-translate-y-[80%] z-10">
          <Image
            src={"/images/about/wedding-intro.jpg"}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFeaturedPhoto;
