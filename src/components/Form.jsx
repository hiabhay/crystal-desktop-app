import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-zinc-100">
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-1 text-xs" htmlFor="firstName">
            First Name
          </label>
          <div className="relative">
            <input
              className="w-full border-none focus:outline-none bg-transparent border-black text-sm"
              type="text"
              id="firstName"
              name="firstName"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-1 text-xs" htmlFor="lastName">
            Last Name
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-none focus:outline-none bg-transparent border-black text-sm"
              type="text"
              id="lastName"
              name="lastName"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-1 text-xs" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-none focus:outline-none bg-transparent border-black text-sm"
              type="email"
              id="email"
              name="email"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-1 text-xs" htmlFor="helpType">
            What can we help you with
          </label>
          <div className="relative">
            <select
              className="w-full p-2 border-none focus:outline-none bg-transparent border-black text-sm"
              id="helpType"
              name="helpType"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-xs" htmlFor="caseDescription">
          Case Description
        </label>
        <div className="relative">
          <textarea
            className="w-full p-2 border-none focus:outline-none bg-transparent border-black text-sm"
            id="caseDescription"
            name="caseDescription"
            rows="1"
          ></textarea>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
        </div>
      </div>
      <div className="text-left">
        <button
          className="px-3 py-2 bg-amber-300 hover:bg-amber-400 text-black rounded-full text-sm"
          type="submit"
        >
          Send Now
        </button>
      </div>
    </div>
  );
};

export default Form;
