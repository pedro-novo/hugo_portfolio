import React, { useState } from "react";
import { validateFields } from "../../utils/validateFields";

const Form: React.FC = () => {
  const [state, setState] = useState<StateObject>({
    firstName: "",
    lastName: "",
    email: "",
    selectedOption: "",
  });
  const [error, setError] = useState<any>({});
  const [isSubmitted, setIsSubmited] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setState({ ...state, [field]: e.target.value });
  };

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    field: string
  ) => {
    setState({ ...state, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(validateFields(state));
    console.log("state: ", state);
    if (Object.keys(error).length) {
      console.log("There is an error");
      console.log(error);
    }
  };

  return (
    <div className="mt-20 w-full flex justify-center items-center flex-col">
      <form className="w-[60%]" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex w-full">
          <fieldset
            className={error.firstName ? "fieldError w-full" : "field w-full"}
          >
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              value={state["firstName"]}
              onChange={(e) => handleChange(e, "firstName")}
            />
            {error.firstName && (
              <span className="text-xs text-red-600">
                You need to fill in the First Name
              </span>
            )}
          </fieldset>
          <fieldset
            className={error.lastName ? "fieldError w-full" : "field w-full"}
          >
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={state["lastName"]}
              onChange={(e) => handleChange(e, "lastName")}
            />
            {error.lastName && (
              <span className="text-xs text-red-600">
                You need to fill in the Last Name
              </span>
            )}
          </fieldset>
        </div>
        <fieldset className={error.email ? "fieldError" : "field"}>
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={state["email"]}
            onChange={(e) => handleChange(e, "email")}
          />
          {error.email && (
            <span className="text-xs text-red-600">
              You need to fill in the email
            </span>
          )}
        </fieldset>
        <fieldset className={error.selectedOption ? "fieldError" : "field"}>
          <label className="label">Event Selection</label>
          <select
            className="input"
            value={state["selectedOption"]}
            onChange={(e) => handleSelect(e, "selectedOption")}
          >
            <option value="">--Select an Option--</option>
            <option value="wedding">Wedding</option>
            <option value="real-estate">Real-Estate</option>
          </select>
          {error.selectedOption && (
            <span className="text-xs text-red-600">
              You need to select an Option
            </span>
          )}
        </fieldset>
        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
