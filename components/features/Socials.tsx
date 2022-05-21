import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Socials: React.FC = () => {
  return (
    <div className="mt-6 flex justify-center items-center">
      <a
        href="https://www.facebook.com/hugofilipe86"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className="mr-2 text-xl text-zinc-300 hover:text-white" />
      </a>
      <a
        href="https://www.instagram.com/hugofilipe86"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="mr-2 text-xl text-zinc-300 hover:text-white" />
      </a>
    </div>
  );
};

export default Socials;
