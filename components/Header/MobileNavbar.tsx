import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pr-8 md:hidden ease-in-out duration-300 scrollable">
      <div
        className={
          isOpen
            ? `fixed h-[100vh] w-full top-0 left-0 bg-[rgba(39,39,42,0.6)] z-40`
            : "hidden"
        }
        onClick={() => setIsOpen(false)}
      ></div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu className="text-zinc-300 text-3xl hover:text-zinc-100" />
      </button>
      <div
        className={`fixed h-[100vh] w-[45vh] top-0 right-0 bg-[rgba(39,39,42,0.98)] ease-in-out duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoIosArrowForward className="ml-6 mt-6 text-zinc-300 text-4xl hover:text-zinc-100" />
        </button>
        <div
          className="px-10 py-5 h-[40%] flex justify-evenly items-center flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
