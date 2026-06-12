import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full bg-gray-500 text-white p-2.5 rounded-8 hover:cursor-pointer">
      {text}
    </button>
  );
};

export default Button;