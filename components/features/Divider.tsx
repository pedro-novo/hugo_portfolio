/* eslint-disable @next/next/no-img-element */
import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="my-12 h-[60px] w-full flex justify-around items-center">
      <div className="h-[2px] w-[30%] px-4 bg-zinc-800"></div>
      <img
        src="/images/logo/logo-b.png"
        alt="logo"
        className="h-[64px]"
      />
      <div className="h-[2px] w-[30%] px-4 bg-zinc-800"></div>
    </div>
  );
};

export default Divider;
