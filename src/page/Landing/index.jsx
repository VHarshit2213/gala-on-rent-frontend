import React from "react";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import Gala from "./../../assets/Landing/Gala.png";
import Office from "./../../assets/Landing/Office.png";
import Shed from "./../../assets/Landing/Shed.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen pl-[40px] pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 space-y-6">
          <img
            src={Gala_On_RenT_LOGO}
            alt="Gala On Rent Logo"
            className="max-w-[400px] w-full"
          />

          <div className="bg-[#A4A5A766] flex flex-col gap-[30px] py-[40px] px-[40px] rounded-lg ml-[30px]">
            <h1 className="text-[40px] font-bold capitalize leading-10">
              Find & Rent{" "}
              <span className="text-orange">the right commercials</span> space
            </h1>
            <div className="flex flex-col gap-[20px]">
              <p
                className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#3D88E5] cursor-pointer"
                onClick={() => navigate("/home")}
              >
                RENT YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#EA982C]">
                FIND COMMERCIAL PROPERTY / OFFICE / SHOP ON RENT
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#358E54]">
                SELL YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
              <p className="text-white rounded-b-[7px] rounded-r-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#D04F4D]">
                BUY ANY COMMERCIAL PROPERTY / OFFICE / SHOP
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] h-full justify-center items-center">
          <img
            src={Gala}
            alt="Gala"
            className="w-full max-w-[350px] h-[20vh] md:h-[25vh] lg:h-[30vh]"
          />
          <img
            src={Shed}
            alt="Shed"
            className="w-full max-w-[350px] h-[20vh] md:h-[25vh] lg:h-[30vh]"
          />
          <img
            src={Office}
            alt="Office"
            className="w-full max-w-[350px] h-[20vh] md:h-[25vh] lg:h-[30vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
