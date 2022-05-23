/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import flowers from "../../public/images/hero/flowers.jpg";

export const Header: React.FC = () => {
  return (
    <div id="header" className="relative w-[100%] h-[800px] text-white">
      <Image src={flowers} layout="fill" objectFit="cover" priority />
      <div className=" absolute h-full w-full flex justify-center items-center">
        <div className="w-[10%] h-full bg-zinc-600 opacity-80 "></div>
        <div className="relative min-w-[40%] h-full">
          <div className="absolute top-[45%] left-[50%] h-80 max-w-full w-80 -translate-y-[50%] -translate-x-[50%] z-40 border-2 border-zinc-100 hover:scale-50 transition">
            <h1 className="-mt-[40px] text-xl uppercase font-medium">
              Photography
            </h1>
          </div>
        </div>
        <div className="w-[50%] h-full bg-gradient-to-r from-[rgb(63,63,70,0.8)] to-[rgb(24,24,27,0.8)]">
          <div className="w-full h-full flex justify-center items-start flex-col py-4 px-4">
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-left">
              Hugo Conceição
            </h1>
            <p className="sm:text-sm md:text-base lg:text-lg mt-8 mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <a href="#contact" className="rotatingThree">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
