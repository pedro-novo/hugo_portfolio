/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSelfPhoto: React.FC = () => {
  return (
    <div className="relative h-[450px] w-full flex justify-center items-center">
      <img src="/images/about/hugo2.png" alt="About Hugo" className="h-[85%]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[420px] w-[250px] border-zinc-900 border-2"></div>
    </div>
  );
};

export default AboutSelfPhoto;
