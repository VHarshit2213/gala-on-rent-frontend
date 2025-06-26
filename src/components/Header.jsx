import React from "react";
import Gala_On_RenT_LOGO from "../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()  
  const isShowShadow = ["/about-us"]?.includes(location.pathname)
  
  return (
      <div className={`flex justify-between px-4 sm:px-10 ${!isShowShadow ? "shadow-[0px_2px_12px_0px_#00000033]" : ""} `}>
        <img
          src={Gala_On_RenT_LOGO}
          alt="Gala On Rent Logo"
          className="w-[150px] sm:w-[200px]"
        />
        <button className="cursor-pointer">
          <FaCircleUser size={25} />
        </button>
      </div>
  );
};

export default Header;
