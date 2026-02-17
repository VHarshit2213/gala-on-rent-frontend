import React, { useState } from "react";
import RegisterInfo from "./RegisterInfo";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Card, CardBody, ThemeButton } from "../../components/common";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSignIn } from "../../reducer/auth/thunk";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const SignInValidationSchema = () =>
  Yup.object().shape({
    person_name: Yup.string().required("Full Name/Email is required"),
    password: Yup.string()
      .min(4, "Minimum 4 characters required")
      .matches(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed")
      .required("Password is required")
  });

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword]= useState(false);

  const formik = useFormik({
    initialValues: {
      person_name: "",
      password: "",
    },
    validationSchema: SignInValidationSchema,
    onSubmit: async (values) => {        
      dispatch(fetchSignIn(values)).then((res) => {
        if (res.payload.data?.status === 200) {
          toast.success(res.payload.data?.message);
           navigate("/property-list");
          const expires = new Date();
          expires.setTime(expires.getTime() + 7 * 60 * 60 * 1000);
          Cookies.set("accessToken", res.payload.data?.token, { expires });
        } else {
          toast.error(res.payload.data?.message);
        }
      });
    },
  });

  return (
    <div className="w-full h-screen p-4 lg:pl-[40px] lg:pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="flex lg:gap-20 gap-4 justify-center w-full">
        <RegisterInfo />
        <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white/80 rounded-xl p-8 sm:p-14 max-w-lg w-full">
          <CardBody bodyClassName="flex flex-col justify-between gap-y-8 xsm:gap-y-13">
            <div className="flex flex-col gap-y-4 xsm:gap-y-9">
              <p className="font-normal lg:text-xl text-md capitalize text-center">
                Welcome back to
                <span className="text-orange font-semibold ml-2">Housing</span>!
                Let’s get you signed in.
              </p>
              <form className="grid gap-4" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <label htmlFor="person_name" className="font-medium text-base">
                    Full Name/Email
                  </label>
                  <input
                    type="text"
                    id="person_name"
                    name="person_name"
                    placeholder="Enter Your full name/email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.person_name}
                    className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.person_name && formik.errors.person_name
                      ? "border-red-500"
                      : "border-gray-300"
                      }`}
                  />

                  {formik.touched.person_name && formik.errors.person_name && (
                    <p className="text-red-500 text-xs xsm:text-sm">
                      {formik.errors.person_name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter Your Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.password}
                      className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                    />
                    <div className="cursor-pointer absolute right-2" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                    </div>

                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-xs xsm:text-sm">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <ThemeButton
                  title={"Login"}
                  className="!justify-center !max-w-full mt-4"
                  type="submit"
                />
              </form>
            </div>
            <p className="text-[14px] xsm:text-base font-semibold uppercase text-center">
              Don’t have an account yet?
              <span
                className="text-orange ml-2 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Register Here
              </span>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
