/* eslint-disable @next/next/no-img-element */
import React from "react";
import Shortcuts from "../features/Shortcuts";
import Socials from "../features/Socials";

const TopFooter: React.FC = () => {
  return (
    <div className="mb-0 w-[95%] p-4 mx-auto bg-zinc-800 text-white flex">
      <div className="w-[50%] flex justify-center items-center flex-col">
        <img src="/images/logo/logo-w.png" alt="" className="h-[40px] mt-2" />
        <div className="mt-3">
          <h6 className="text-base font-extralight">Hugo Conceição</h6>
        </div>
        <div className="mt-4 text-zinc-300">
          <Shortcuts column />
        </div>
        <Socials />
      </div>
      <div className="w-[50%] flex justify-center items-center">Hello</div>
    </div>
  );
};

export default TopFooter;
