import React from "react";

const Shortcuts: React.FC<ShortcutsOption> = ({ column }) => {
  if (column) {
    return (
      <ul className="flex items-center flex-col font-light text-xs">
        <li>
          <a href="#header" className="hover:text-white">
            Home
          </a>
        </li>
        <li className="mt-1 hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="mt-1 hover:text-white">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mt-1 hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="h-full w-6/12 hidden md:block">
      <div className="w-full flex justify-evenly items-center text-zinc-300">
        <a href="#header" className="hover:text-white">
          Home
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#portfolio" className="hover:text-white">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Shortcuts;
