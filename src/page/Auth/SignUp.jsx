import { useRef, useState } from "react";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardBody, ThemeButton } from "../../components/common";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { appendUserData } from "../../reducer/auth/redux";

//firebase
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import RegisterInfo from "./RegisterInfo";

const PhoneValidationSchema = () =>
  Yup.object().shape({
    phone: Yup.string()
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
  });

const SignUp = () => {
  const dispatch = useDispatch();
  const propertyType = useSelector((state) => state.propertyType.type);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const [dummyOtp, setDummyOtp] = useState("123456");
  // const [showOTP,setShowOTP] = useState(false);

  const otpLength = 6;
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ""); // only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (index < otpLength - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) inputsRef.current[index - 1].focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, otpLength);

    if (pastedData.length === 0) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = pastedData[i];
      }
    }
    setOtp(newOtp);

    // Focus the last filled input
    const nextIndex =
      pastedData.length >= otpLength ? otpLength - 1 : pastedData.length;
    if (inputsRef.current[nextIndex]) {
      inputsRef.current[nextIndex].focus();
    }
  };

  const handleBack = () => {
    setTab(tab - 1);
    setOtp(new Array(otpLength).fill(""));
    inputsRef.current.forEach((input) => {
      if (input) input.value = "";
    });
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
    // try {
    //   await  window.confirmationResult.confirm(otpCode);
    //   navigate("/sell-register-form");
    // } catch (error) {
    //    toast.error({error});
    // }

    //for dummy otp
    if (otpCode === dummyOtp) {
      toast.success("OTP verified successfully!");
      navigate("/sell-register-form");
    } else {
      toast.error("Invalid OTP. Try again.");
    }
  };

  // for firebase
  // const generateRecaptcha = () => {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {},
  //         "expired-callback": () => {},
  //       }
  //     );
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: PhoneValidationSchema,
    onSubmit: async (values) => {
      // generateRecaptcha();
      // const appVerifier = window.recaptchaVerifier;

      try {
        // const confirmationResult = await signInWithPhoneNumber(
        //   auth,
        //   values.phone,
        //   appVerifier
        // );
        // window.confirmationResult = confirmationResult;
        // toast.success("OTP sent successfully!");

        const phoneNumber = values.phone.replace(/^\+91/, "");
        dispatch(
          appendUserData({
            Phone_number: phoneNumber,
            user_type: propertyType,
          })
        );
        setDummyOtp("123456");
        setTab(1);
      } catch (error) {
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP. Try again.");
        // setTab(0);
      }
    },
  });

  return (
    <div className="w-full h-screen pl-[40px] pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="flex lg:gap-20 gap-4 justify-center w-full">
        <RegisterInfo />
        {tab === 0 ? (
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white/80 rounded-xl p-14 max-w-lg w-full">
            <CardBody bodyClassName="flex flex-col justify-between gap-y-13">
              <div className="flex flex-col gap-y-9">
                <p className="font-normal lg:text-xl text-md capitalize text-center">
                  New to 
                  <span className="text-orange font-semibold ml-2">
                    Housing
                  </span>
                  ? Let’s get you started
                </p>
                <div className="flex flex-col gap-y-3">
                  <p className="font-normal lg:text-xl text-md capitalize">
                    Looking to
                  </p>

                  <div>
                    <button className="lg:py-4 py-3 lg:px-9 px-6 font-medium text-base rounded-md bg-[#E56C0633] text-orange border border-transparent">
                      {propertyType === "sell" ? "Sell" : "Rent"}
                    </button>
                  </div>

                  <form onSubmit={formik.handleSubmit}>
                    <PhoneInput
                      defaultCountry="in"
                      value={formik.values.phone}
                      onChange={(phone) => {
                        formik.setFieldValue("phone", phone);
                      }}
                      onBlur={() => formik.setFieldTouched("phone", true)}
                      className="my-3"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </p>
                    )}

                    <ThemeButton
                      title={"Send OTP"}
                      className="!justify-center !max-w-[420px] mt-4"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
              <p className="text-base font-semibold uppercase text-center">
                Existing User? 
                <span
                  className="text-orange ml-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login Here
                </span>
              </p>
            </CardBody>
          </Card>
        ) : (
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white/80 rounded-xl p-14 max-w-lg w-full">
            <CardBody bodyClassName="flex flex-col justify-between gap-y-13">
              <div className="flex flex-col">
                <button onClick={handleBack} className="cursor-pointer">
                  <IoArrowBackOutline size={20} />
                </button>
                <h2 className="text-2xl font-bold my-4">Enter OTP</h2>
                <div className="flex flex-col">
                  <p className="text-gray-600 mb-6">
                    We've sent a 6-digit code to your phone.
                  </p>
                  <div className="flex gap-3 mb-6">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        onPaste={handlePaste}
                        ref={(el) => (inputsRef.current[idx] = el)}
                        className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ))}
                  </div>

                  <ThemeButton
                    title={"Verify OTP"}
                    className="!justify-center !max-w-[420px] mt-4"
                    onClick={handleVerifyOTP}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUp;
