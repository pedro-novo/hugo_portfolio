/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const AboutSelfPhoto: React.FC = () => {
  return (
    <div className="relative h-[450px] w-full align-center flex justify-center items-center xl:w-[33%]">
      <div className="relative h-96 w-full">
        <Image
          src={"/images/about/hugo2.png"}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[420px] w-[250px] border-zinc-900 border-2"></div>
    </div>
  );
};

export default AboutSelfPhoto;
