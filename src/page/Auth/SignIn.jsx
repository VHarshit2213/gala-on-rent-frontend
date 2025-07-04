import React from "react";
import RegisterInfo from "./RegisterInfo";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Card, CardBody, ThemeButton } from "../../components/common";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSignIn } from "../../reducer/auth/thunk";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const SignInValidationSchema = () =>
  Yup.object().shape({
    Phone_number: Yup.string()
      .required("Phone number is required")
      .test(
        "valid-phone",
        "Enter a valid Indian phone number (starts with 6/7/8/9)",
        (value) => {
          let digits = value?.replace(/\D/g, "");
          if (digits.startsWith("91")) {
            digits = digits.slice(2);
          }
          return /^[6-9]\d{9}$/.test(digits);
        }
      ),
    uniqueCode: Yup.string().required("Unique Code is required"),
  });

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Phone_number: "",
      uniqueCode: "",
    },
    validationSchema: SignInValidationSchema,
    onSubmit: async (values) => {
        console.log("values",values);
        
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
                <div className="flex flex-col gap-1">
                  <label htmlFor="Phone_number" className="text-xs xsm:text-base font-medium">
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="in"
                    value={formik.values.Phone_number}
                    onChange={(phone) => {
                      formik.setFieldValue("Phone_number", phone);
                    }}
                    onBlur={() => formik.setFieldTouched("Phone_number", true)}
                  />
                  {formik.touched.Phone_number && formik.errors.Phone_number && (
                    <p className="text-red-500 text-xs xsm:text-sm">
                      {formik.errors.Phone_number}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="uniqueCode" className="text-xs xsm:text-base font-medium">
                    Code
                  </label>
                  <input
                    type="text"
                    id="uniqueCode"
                    name="uniqueCode"
                    placeholder="Enter Code"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.uniqueCode}
                    className={`w-[91%] px-3 py-[9.5px] border-b border-b-gray-300 focus:outline-0 text-sm rounded-md `}
                  />
                  {formik.touched.uniqueCode && formik.errors.uniqueCode && (
                    <p className="text-red-500 text-xs xsm:text-sm">
                      {formik.errors.uniqueCode}
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
