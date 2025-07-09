import React, { useEffect, useState } from "react";
import Gala_On_RenT_LOGO from "../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const navMenus = [
  { link: "/home", name: "Home" },
  { link: "/about-us", name: "About" },
  // { link: "/contact-us", name: "Contact us" },
];

const Header = () => {
  const location = useLocation();
  const isShowShadow = ["/about-us"]?.includes(location.pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <div
      className={`relative flex justify-between items-center px-4 sm:px-10 ${
        !isShowShadow ? "shadow-[0px_2px_12px_0px_#00000033]" : ""
      } `}
    >
      <img
        src={Gala_On_RenT_LOGO}
        alt="Gala On Rent Logo"
        className="w-[150px] sm:w-[200px]"
      />

      {/* Desktop Menu  */}
      <div className="hidden xsm:flex gap-7 relative">
        {navMenus.map((menu) => (
          <NavLink
            to={menu.link}
            className={({ isActive }) => {
              const baseColor = !isShowShadow ? "text-gray-700" : "text-white";
              const activeStyles =
                "font-semibold border-b-2 border-orange-500 pb-1";
              const hoverStyles = "hover:text-orange";

              return `${
                isActive
                  ? `text-orange ${activeStyles}`
                  : `${baseColor} ${hoverStyles}`
              }`;
            }}
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
      {/* Hamburger Menu Icon */}
      <button className="xsm:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <IoClose size={24} />
        ) : (
          <RxHamburgerMenu size={24} />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`absolute top-full left-0 w-full shadow-md flex flex-col items-start p-4 gap-3 xsm:hidden z-50 ${isShowShadow ? "bg-transparent": "bg-white"}`}>
          {navMenus.map((menu) => (
            <NavLink
              key={menu.link}
              to={menu.link}
              className="block py-2 text-sm hover:text-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
      )}
      {/* <button className="cursor-pointer">
          <FaCircleUser size={25} />
        </button> */}

    </div>
  );
};

export default Header;
