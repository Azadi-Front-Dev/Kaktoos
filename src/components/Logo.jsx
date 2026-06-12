import React from "react";

const Logo = () => {
  return (
    <div className="w-full h-35 flex-center 2.5 gap-2.5">
      <div className="flex-col-center">
        <h1 className="text-[48px]">کاکتوس</h1>
        <h4>پلتفرم توسعه و آموزش</h4>
      </div>
      <img src="./Logo/Logo.png" alt="" className=" h-full" />
    </div>
  );
};

export default Logo;