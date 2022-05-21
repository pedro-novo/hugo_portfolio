import React from "react";
import Form from "../../form/Form";

const Contact: React.FC = () => {
  return (
    <div className="mx-auto mt-20 p-[30px] h-full w-[95%] shadow-2xl bg-gradient-to-r from-zinc-100 to-zinc-300">
      <h1 className="uppercase text-4xl text-center">Schedule with Me</h1>
      <p className="mt-10 text-sm text-center">
        Please fill the form so I can reach to you with the best plan available
      </p>
      <Form />
    </div>
  );
};

export default Contact;
