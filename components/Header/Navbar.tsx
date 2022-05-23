/* eslint-disable @next/next/no-img-element */
import React from "react";
import Shortcuts from "../features/Shortcuts";
import MobileNavBar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] flex justify-between items-center">
      <div className="px-2 py-3 sm:px-4 md:px-6 lg:px-8">
        <img
          src="/images/logo/logo-w.png"
          alt="logo"
          className="h-[40px] sm:h-[50px] md:h-[60px]"
        />
      </div>
      <Shortcuts />
      <MobileNavBar />
    </div>
  );
};

export default Navbar;
