/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutCard from "./AboutCard";
import AboutFeaturedPhoto from "./AboutFeaturedPhoto";
import AboutSelfPhoto from "./AboutSelfPhoto";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-[99%] xl h-full mt-4 flex justify-center items-center flex-col xl:flex-row xl:justify-evenly"
    >
      <AboutSelfPhoto />
      <AboutCard />
      <AboutFeaturedPhoto />
    </div>
  );
};

export default About;
