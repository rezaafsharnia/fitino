import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logo from "../logo.png";

function Form() {
  const navigate = useNavigate();
  const phoneRegExp = /^(|0)?9\d{9}$/;

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("لطفا این قسمت را خالی نگذارید")
      .matches(phoneRegExp, "شماره همراه شما نادرست است"),
  });

  const onSubmit = async (values) => {
    // navigate("/login/otp", { state: { phoneNumber: values.phoneNumber } });
    try {
      const result = await axios.post("http://localhost:5000/sendOtp", {
        phone: formik.values.phoneNumber,
      });
      const res = await result.json();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: onSubmit,
    validationSchema,
    validateOnMount: "true",
    isValid: () => {
      if (formik.errors) return false;
      else return true;
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-zinc-300 rounded-2xl py-8 px-2 md:px-8 mx-4 w-[330px] md:w-full"
      >
        <div className="flex justify-center w-full mb-4 items-center">
          <img src={logo} alt="logo" width={128} />
        </div>
        <h2 className="text-center mb-6 font-bold text-xl text-gray-500">
          ورود / ثبت نام
        </h2>
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">سلام!</p>
          <p className="text-sm text-gray-500">
            برای ورود یا ثبت نام شماره همراه خود را وارد کنید.
          </p>
        </div>
        <input
          type="text"
          placeholder="شماره موبایل"
          className={`py-3 bg-transparent border border-zinc-400 rounded-2xl px-6 w-full text-xl text-right outline-none leading-8 ${
            formik.errors.phoneNumber && formik.touched.phoneNumber
              ? "focus:ring-1 focus:ring-red-400 focus:border-none  border-red-600"
              : "focus:ring-1 focus:ring-green-400 focus:border-none"
          }`}
          dir="ltr"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          autoFocus={true}
          maxLength="11"
        />
        <div className="text-right mt-2 mr-2 mb-4 text-red-500">
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <p>{formik.errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white mt-2 py-4 rounded-2xl cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
            disabled={!formik.isValid}
          >
            دریافت کد ورود
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
