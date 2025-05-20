import React from "react";
import Gala_On_RenT_LOGO from "../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
      <div className="flex justify-between px-10">
        <img
          src={Gala_On_RenT_LOGO}
          alt="Gala On Rent Logo"
          className="w-[200px]"
        />
        <button className="cursor-pointer">
          <FaCircleUser size={25} />
        </button>
      </div>
  );
};

export default Header;
