import React, { useEffect, useState } from "react";

const NumberInput = ({ placeholder }) => {
  const [code, setCode] = useState("");
  useEffect(() => {
    console.log(code);
  }, [code]);
  const OrderFunction = (event) => {
    setCode(event.target.value);
  };
  return (
    <input
      value={code}
      onChange={(event) => OrderFunction(event)}
      maxLength={1}
      type="text"
      placeholder={placeholder}
      className="font-bold border-2 border-red-400  rounded-8 p-2.5 w-full text-center outline-0"
      //   border-gray-400
    />
  );
};

export default NumberInput;