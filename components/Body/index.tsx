import React from "react";
import About from "./about/About";
import Divider from "../features/Divider";
import Portfolio from "./portfolio/Portfolio";

export const Body: React.FC = () => {
  return (
    <div>
      <About />
      <Divider />
      <Portfolio />
    </div>
  );
};
