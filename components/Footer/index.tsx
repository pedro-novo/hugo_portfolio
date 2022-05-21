import React from "react";
import BottomFooter from "./BottomFooter";
import Contact from "../body/contact/Contact";
import TopFooter from "./TopFooter";

export const Footer: React.FC = () => {
  return (
    <div id="contact" className="mt-12">
      <Contact />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};
