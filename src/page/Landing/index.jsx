import React from "react";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Light/Gala_On_RenT_LOGO.png";
import Gala from "./../../assets/Landing/Gala.png";
import Office from "./../../assets/Landing/Office.png";
import Shed from "./../../assets/Landing/Shed.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPropertyType } from "../../reducer/propertyType/redux";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen px-[30px] md:pl-[40px] md:pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-3 l:col-span-2 space-y-3 xsm:space-y-6 flex flex-col justify-center">
          <img
            src={Gala_On_RenT_LOGO}
            alt="Gala On Rent Logo"
            className="w-[200px] xsm:w-[300px] md:w-[400px]"
          />

          <div className="bg-[#A4A5A766] flex flex-col gap-[10px] sm:gap-[30px] p-[25px] xsm:p-[40px] rounded-lg md:ml-[30px]">
            <h1 className="text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold capitalize sm:leading-10">
              Buy, Sell and Rent{" "}
              <span className="text-orange">the right commercials</span> space
            </h1>
            <div className="flex flex-col gap-[20px]">
              <p
                className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[13px] md:text-[15px] py-[12px] px-[20px] xsm:px-[29px] tracking-wide bg-[#3D88E5] cursor-pointer"
                onClick={() => {
                  dispatch(setPropertyType("rent"));
                  navigate("/signup")}}
              >
                RENT YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[13px] md:text-[15px] py-[12px] px-[20px] xsm:px-[29px] tracking-wide bg-[#EA982C] cursor-pointer" 
              onClick={() => navigate("/home")}>
                FIND COMMERCIAL PROPERTY / OFFICE / SHOP ON RENT
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[13px] md:text-[15px] py-[12px] px-[20px] xsm:px-[29px] tracking-wide bg-[#358E54] cursor-pointer"
               onClick={() => {
                  dispatch(setPropertyType("sell"));
                  navigate("/signup")}}>
                SELL YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[13px] md:text-[15px] py-[12px] px-[20px] xsm:px-[29px] tracking-wide bg-[#D04F4D] cursor-pointer">
                BUY ANY COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] h-full justify-center items-center">
          <img
            src={Gala}
            alt="Gala"
            className="w-full max-w-[350px] h-[30vh] hidden l:block"
          />
          <img
            src={Shed}
            alt="Shed"
            className="w-full max-w-[350px] h-[30vh] hidden l:block"
          />
          <img
            src={Office}
            alt="Office"
            className="w-full max-w-[350px] h-[30vh] hidden l:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
