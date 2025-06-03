import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import footer_logo from "../../assets/Home/footer_logo.png"
import user_avatar from "../../assets/Property/user-avtar.png"

const SellPropertySidebarHeader = ({ children }) => {

    const location = useLocation();
    const path = location.pathname;

    const menu = [
        {
            icon: <TbLayoutDashboardFilled className='text-white' size={23} />,
            name: "Dashboard",
            link: "/dashboard"
        },
        {
            icon: <GoHomeFill className='text-white' size={23} />,
            name: "Add Properties",
            link: "/add-property"
        },
        {
            icon: <FaClipboardList className='text-white' size={23} />,
            name: "List of Property",
            link: "/property-list"
        },
    ]

    return (
        <div className='w-full h-screen flex overflow-hidden'>

            <div className='w-[250px] h-full bg-[#192E3F] flex flex-col'>
                <img src={footer_logo} alt="Footer Logo" className='px-7 py-6 object-contain' />

                <div className='flex flex-col mt-10'>
                    {(menu || []).map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className={`flex items-center gap-2 px-7 py-3 text-white cursor-pointer hover:bg-orange transition-colors ${path === item.link ? 'bg-orange' : ''
                                }`}
                        >
                            {item.icon}
                            <span className='text-base'>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex-1 h-full flex flex-col'>
                <div className="w-full shadow-[0px_4px_8px_0px_#00000033] p-3 pr-5 flex justify-end items-center gap-3">
                    <img src={user_avatar} alt="User Avatar" className='w-10 h-10 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        <span className="text-base font-bold">Json Taylor</span>
                        <span className="text-sm font-semibold text-[#767676]">Seller</span>
                    </div>
                </div>
                <div className='flex-1 overflow-auto'>
                    {children}
                </div>

            </div>
        </div>

    )
}

export default SellPropertySidebarHeader
