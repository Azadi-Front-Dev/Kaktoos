import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="font-bold border-2 border-gray-400 rounded-8 p-2.5 w-full"
    />
  );
};

export default Input;