import React from "react";
import Button from "../../Components/buttons/Button";
import Input from "../../Components/Inputs/Input";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <div className="font-Vazir w-full h-screen p-5 flex-center flex-col gap-5">
      <Logo />
      <div className="flex-col-center w-full max-w-75 h-87 p-5 gap-5 ">
        <h4 className="font-bold">ورود / ثبت‌ نام </h4>
        <p className="text-gray-500">لطفا شماره همراه خود را وارد کنید</p>
        <div className="w-full flex-col-center gap-3">
          <Input placeholder={"نام کاربری (شماره همراه)"} />
          <Input placeholder={"رمز عبور"} />
          {/* <h5 className="text-red-600"> شماره همراه معتبر نیست !</h5> */}
        </div>
        <Link className="w-full" to={"/SendOTP"}>
          <Button text={"ورود به کاکتوس"} />
        </Link>
        <Link to={"/RecoveryPassword"}>فراموشی رمز عبور</Link>
      </div>
    </div>
  );
};

export default Login;