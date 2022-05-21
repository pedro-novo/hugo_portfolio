import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface SuccesfulMessageProps {
  setWasSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccesfulMessage: React.FC<SuccesfulMessageProps> = ({
  setWasSuccessful,
}) => {
  return (
    <div className="h-full w-full py-10 flex justify-center items-center flex-col">
      <div>
        <AiFillCheckCircle className="text-zinc-500 text-6xl" />
      </div>
      <h1 className="mt-12 text-zinc-500 text-2xl font-bold">Thank you!</h1>
      <p className="mt-8 text-zinc-500 text-base font-thin">
        {"We'll get in touch really soon!"}
      </p>
      <div className="mt-6">
        <button className="submitBtn" onClick={() => setWasSuccessful(false)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SuccesfulMessage;
