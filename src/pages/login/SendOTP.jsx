import React from "react";
import Button from "../../Components/buttons/Button";
import Input from "../../Components/Inputs/Input";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import NumberInput from "../../Components/Inputs/NumberInput";

const SendOTP = () => {
  const MobileNumber = "09131254786";
  return (
    <div className=" w-full h-screen p-5 flex-center flex-col gap-5">
      <Logo />
      <div className="flex-col-center w-full max-w-75 h-87 p-5 gap-5 ">
        <div className="flex-center gap-2.5">
          <p className="text-[14px]">کد تایید به شماره </p>
          <p className="text-[12px] font-bold">{MobileNumber}</p>
          <p className="text-[14px]">ارسال شد.</p>
        </div>
        <div className="w-full">
          <p className="text-[12px] text-center">ویرایش شماره</p>
        </div>
        {/* <p className="text-gray-500">لطفا کد تایید را وارد کنید</p> */}
        <div className="w-full flex-col-center">
          <div dir="ltr" className="flex-center gap-1">
            <NumberInput />
            <NumberInput />
            <NumberInput />
            <NumberInput />
            <NumberInput />
          </div>
          <h5 className="text-red-600 p-5"> کد تایید معتبر نیست !</h5>
        </div>
        <Button text={"تایید"} />
      </div>
    </div>
  );
};

export default SendOTP;