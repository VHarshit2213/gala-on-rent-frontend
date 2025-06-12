import { useRef, useState } from "react";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardBody, ThemeButton } from "../../components/common";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const propertyType = useSelector((state) => state.propertyType.type);
  const [phone, setPhone] = useState("");
  const [tab, setTab] = useState(0);

  const otpLength = 6;
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
    navigate("/sell-register-form");
  };

  return (
    <div className="w-full h-screen pl-[40px] pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="flex lg:gap-20 gap-4 justify-center w-full">
        <div className="lg:flex hidden flex-col xl:justify-evenly justify-start xl:gap-y-0 gap-y-10">
          <img
            src={Gala_On_RenT_LOGO}
            alt="Gala On Rent Logo"
            className="max-w-[400px] w-full"
          />
          <div className="flex flex-col xl:gap-y-12 gap-y-6">
            <h1 className="capitalize xl:text-4xl text-2xl font-semibold">
              Upload your property in
              <span className="text-orange border-b border-orange font-normal ml-2">
                3 simple steps
              </span>
            </h1>
            <div className="flex flex-col xl:gap-y-5 gap-y-2">
              <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
                <FaCircleCheck className="text-[#192E3F]" size={25} />
                <span className="font-normal">Add</span> Basic details
              </p>
              <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
                <FaCircleCheck className="text-[#192E3F]" size={25} />
                <span className="font-normal">Add</span> property details
              </p>
              <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
                <FaCircleCheck className="text-[#192E3F]" size={25} />
                <span className="font-normal">Add</span> Photos
              </p>
            </div>
          </div>
        </div>
        {tab === 0 ? (
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white rounded-xl p-14 max-w-lg w-full">
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

                  <PhoneInput
                    defaultCountry="in"
                    // value={phone}
                    // onChange={(phone) => setPhone(phone)}
                    className="my-3"
                  />

                  <ThemeButton
                    title={"PROCEED"}
                    className="!justify-center !max-w-[420px] mt-4"
                    onClick={() => {
                      setTab(1);
                    }}
                  />
                </div>
              </div>
              <p className="text-base font-semibold uppercase text-center">
                Existing User? <span className="text-orange">Login Here</span>
              </p>
            </CardBody>
          </Card>
        ) : (
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white rounded-xl p-14 max-w-lg w-full">
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
                    title={"Submit"}
                    className="!justify-center !max-w-[420px] mt-4"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SignInUp;
