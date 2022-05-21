import React from "react";

const BottomFooter: React.FC = () => {
  return (
    <div className="w-[95%] h-[30px] mx-auto flex justify-center items-center bg-zinc-900 ">
      <p className="text-center text-white text-[10px] font-thin">
        <span>
          <a
            href="https://www.github.com/pedro=novo"
            target="_blank"
            rel="noreferrer"
          >
            Pedro Novo
          </a>{" "}
          | © Copyright 2021
        </span>
      </p>
    </div>
  );
};

export default BottomFooter;
