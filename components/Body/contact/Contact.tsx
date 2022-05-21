import React, { useState } from "react";
import Form from "../../form/Form";
import SuccesfulMessage from "../../form/SuccessfulMessage";

const Contact: React.FC = () => {
  const [wasSuccessful, setWasSuccessful] = useState(false);

  return (
    <div className="mx-auto p-[30px] h-full w-[95%] shadow-2xl bg-gradient-to-r from-zinc-100 to-zinc-300">
      {wasSuccessful ? (
        <SuccesfulMessage setWasSuccessful={setWasSuccessful} />
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
