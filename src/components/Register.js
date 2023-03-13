import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logo from "../logo.png";

function Form() {
  const nameRegex = /^[A-Za-z0-9]+$/;
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("وارد کردن نام اجباریست."),
    lastname: Yup.string().required("وارد کردن نام خانوادگی اجباریست."),
    weight: Yup.number().required().moreThan(140).lessThan(220),
    userName: Yup.string().matches(nameRegex).required(),
  });

  const onSubmit = (values) => {
    navigate(`/user/${formik.values.userName}`, {
      state: { name: values.name },
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      weight: "",
      userName: "",
    },
    onSubmit,
    validationSchema,
    validateOnMount: "true",
    isValid: () => {
      if (formik.errors) return false;
      else return true;
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-zinc-300 rounded-2xl py-8 px-2 md:px-8 mx-4 w-[330px] md:w-[800px]"
      >
        <div className="flex justify-center w-full mb-4 items-center">
          <img src={logo} alt="logo" width={128} />
        </div>
        <h2 className="text-center mb-6 font-bold text-xl text-gray-500">
          وارد کردن اطلاعات فردی
        </h2>
        {/* <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">سلام!</p>
          <p className="text-sm text-gray-500">
            برای ورود یا ثبت نام شماره همراه خود را وارد کنید.
          </p>
        </div> */}

        <input
          type="text"
          placeholder="نام"
          className={`py-3 bg-transparent  inline my-2 mx-2 border border-zinc-400 rounded-2xl px-6 w-[150px] text-right outline-none leading-8 ${
            formik.errors.name && formik.touched.name
              ? "focus:ring-1 focus:ring-red-400 focus:border-none  border-red-600"
              : "focus:ring-1 focus:ring-green-400 focus:border-none"
          }`}
          dir="ltr"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          autoFocus={true}
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          className={`py-3 bg-transparent inline my-2 mx-2 border border-zinc-400 rounded-2xl px-6 w-[250px] text-right outline-none leading-8 ${
            formik.errors.name && formik.touched.name
              ? "focus:ring-1 focus:ring-red-400 focus:border-none  border-red-600"
              : "focus:ring-1 focus:ring-green-400 focus:border-none"
          }`}
          dir="ltr"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        <input
          type="text"
          placeholder="نام کاربری"
          className={`py-3 bg-transparent inline my-2 mx-2 border border-zinc-400 rounded-2xl px-6 w-[250px] text-right outline-none leading-8 ${
            formik.errors.userName && formik.touched.userName
              ? "focus:ring-1 focus:ring-red-400 focus:border-none  border-red-600"
              : "focus:ring-1 focus:ring-green-400 focus:border-none"
          }`}
          dir="ltr"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        <input
          type="number"
          placeholder="وزن"
          className={`appearance-none py-3 bg-transparent inline my-2 mx-2 border border-zinc-400 rounded-2xl px-6 w-[100px] text-right outline-none leading-8 ${
            formik.errors.weight && formik.touched.weight
              ? "focus:ring-1 focus:ring-red-400 focus:border-none  border-red-600"
              : "focus:ring-1 focus:ring-green-400 focus:border-none"
          }`}
          dir="ltr"
          name="weight"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.weight}
        />

        <div>
          <button
            type="submit"
            className="w-[150px] bg-green-500 text-white mt-2 py-4 mx-2 rounded-2xl cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!formik.isValid}
          >
            ثبت نام
          </button>
        </div>
        <div className="mt-4 text-red-500">
          {formik.errors.name && formik.touched.name && (
            <label htmlFor="name" className="text-sm block">
              {formik.errors.name}
            </label>
          )}
          {formik.errors.lastname && formik.touched.lastname && (
            <label htmlFor="lastname" className="text-sm block">
              {formik.errors.lastname}
            </label>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
