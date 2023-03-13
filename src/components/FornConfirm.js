import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import OtpInput from "react18-input-otp";
import logo from "../logo.png";

function FornConfirm() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const Navigate = useNavigate();
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      first: "",
      second: "",
    },
  });
  const submitHandler = (e) => {
    e.preventDefault();
    Navigate("/register");
  };

  //Console
  // console.log(location);
  console.log(otp);
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="border border-zinc-300 rounded-2xl py-8 px-2 md:px-8 mx-4 w-[330px] md:w-full"
      >
        <div className="flex justify-center w-full mb-4 items-center">
          <img src={logo} alt="logo" width={128} />
        </div>
        <h2 className="text-center mb-6 font-bold text-xl text-gray-500">
          کد تایید را وارد کنید
        </h2>
        <div className="mb-6">
          <p className="text-sm text-gray-500 pr-8">
            {`کد تأیید برای شماره  ${location.state.phoneNumber} پیامک شد.`}
          </p>
        </div>
        <div className="flex justify-center mb-4 w-full" dir="ltr">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputStyle={{
              width: "65px",
              height: "65px",
              margin: "2px 8px",
              fontSize: "24px",
              borderRadius: "16px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            shouldAutoFocus="true"
            focusStyle={{ border: "1px solid #4ade80",outline:"none" }}
            isInputNum={true}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white mt-2 py-4 rounded-2xl cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
            disabled={otp.length == 4 ? false : true}
            // disabled={true}
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}

export default FornConfirm;