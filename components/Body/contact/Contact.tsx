import React, { useState } from "react";
import Form from "../../form/Form";
import { AiFillCheckCircle } from "react-icons/ai";

const Contact: React.FC = () => {
  const [wasSuccessful, setWasSuccessful] = useState(false);

  return (
    <div className="mx-auto p-[30px] h-full w-[95%] shadow-2xl bg-gradient-to-r from-zinc-100 to-zinc-300">
      {wasSuccessful ? (
        <div className="h-full w-full py-12 flex justify-center items-center flex-col">
          <div>
            <AiFillCheckCircle className="text-zinc-500 text-6xl" />
          </div>
          <h1 className="mt-12 text-zinc-500 text-2xl font-bold">Thank you!</h1>
          <p className="mt-8 text-zinc-500 text-base font-thin">
            {"We'll get in touch really soon!"}
          </p>
        </div>
      ) : (
        <Form
          wasSuccessful={wasSuccessful}
          setWasSuccessful={setWasSuccessful}
        />
      )}
    </div>
  );
};

export default Contact;
