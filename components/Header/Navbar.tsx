/* eslint-disable @next/next/no-img-element */
import React from "react";
import Shortcuts from "../features/Shortcuts";
import MobileNavBar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] flex justify-between items-center">
      <div className="px-6 py-3">
        <img src="/images/logo/logo-w.png" alt="logo" className="h-[50px]" />
      </div>
      <Shortcuts />
      <MobileNavBar />
    </div>
  );
};

export default Navbar;
