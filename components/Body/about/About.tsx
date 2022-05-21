/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutCard from "./AboutCard";
import AboutFeaturedPhoto from "./AboutFeaturedPhoto";
import AboutSelfPhoto from "./AboutSelfPhoto";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-[95%] h-full mx-auto mt-4 grid xl:grid-cols-3 gap-4 justify-items-center items-center"
    >
      <AboutSelfPhoto />
      <AboutCard />
      <AboutFeaturedPhoto />
    </div>
  );
};

export default About;
