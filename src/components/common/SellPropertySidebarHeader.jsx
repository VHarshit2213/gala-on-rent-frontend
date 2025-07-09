import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import footer_logo from "../../assets/Home/footer_logo.png";
import user_avatar from "../../assets/Property/user-avtar.png";

const SellPropertySidebarHeader = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const userName = localStorage.getItem("username");  

  const menu = [
    {
      icon: <TbLayoutDashboardFilled className="text-white" size={23} />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <GoHomeFill className="text-white" size={23} />,
      name: "Add Properties",
      link: "/add-property",
    },
    {
      icon: <FaClipboardList className="text-white" size={23} />,
      name: "List of Property",
      link: "/property-list",
    },
  ];

  return (
    <div className="h-screen flex transition-all duration-300">
      <div className="md:w-[20%] xl:w-[15%] h-screen bg-[#192E3F] flex flex-col">
        <img
          src={footer_logo}
          alt="Footer Logo"
          className="px-7 py-6 object-contain hidden md:block"
        />
        <div className="flex flex-col mt-20 md:mt-0">
          {(menu || []).map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center gap-2 px-4 lg:px-7 py-3 text-white cursor-pointer hover:bg-orange transition-colors ${
                path === item.link ? "bg-orange" : ""
              }`}
            >
              {item.icon}
              <span className="text-xs lg:text-base hidden md:block">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="shadow-[0px_4px_8px_0px_#00000033] p-3 md:pr-8 flex justify-between md:justify-end items-center gap-3">
          <img
            src={footer_logo}
            alt="Footer Logo"
            className="w-24 xsm:w-32 object-contain block md:hidden"
          />
          <div className="flex items-center gap-3">
            <img
              src={user_avatar}
              alt="User Avatar"
              className="w-6 h-6 xsm:w-10 xsm:h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm xsm:text-base font-bold capitalize">
                {userName}
              </span>
              {/* <span className="text-xs xsm:text-sm font-semibold text-[#767676]">
                Seller
              </span> */}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SellPropertySidebarHeader;
