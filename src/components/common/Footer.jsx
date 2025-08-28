import React from 'react'
// import logo from "./../../assets/Home/footer_logo.png"
import logo from "./../../assets/Landing/Dark/Gala on Rent Logo White.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { ThemeButton } from './Components';
import { GrSend } from "react-icons/gr";

const Footer = () => {
    return (
        <div>
            <div className='relative bg-dark h-auto w-full overflow-x-hidden px-4 xsm:px-10 l:px-20 xl:px-32 z-40'>
                <div className="relative lg:h-20 bg-dark overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0 xl:border-t-64 lg:border-t-55 border-t-0 border-t-[#E46900] xl:border-l-[43vw] l:border-l-[43vw] lg:border-l-[48vw]  md:border-l-[39vw] border-l-[50vw] border-l-transparent xxl:border-r-[42vw] xl:border-r-[41vw] l:border-r-[42vw] lg:border-r-[45vw] md:border-r-[39vw] border-r-[50vw] border-r-transparent" />
                </div>
                <div className="text-white py-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 lg:gap-3 gap-x-6 gap-y-10">
                        <div className="flex flex-col gap-y-4 col-span-2 lg:col-span-3">
                            <img src={logo} alt="Logo" className="w-32" />
                            <p className="leading-6 text-sm xsm:text-base">
                                We are many variations of passages available, but the majority have suffered alteration in some form by injected humour.
                            </p>
                            <div className="flex gap-4 mt-2">
                                <div className="w-10 h-10 rounded-full bg-orange flex justify-center items-center">
                                    <FaFacebookF />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange flex justify-center items-center">
                                    <FaInstagram />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange flex justify-center items-center">
                                    <FaTwitter />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-orange flex justify-center items-center">
                                    <BsYoutube />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:items-center gap-y-5 xsm:gap-y-8 col-span-2 xsm:col-span-1 lg:col-span-2'>
                            <div className="flex flex-col justify-center gap-y-5">
                                <p className="text-lg xsm:text-xl font-medium">Quick Links</p>
                                <div className="flex gap-2">
                                    <span className="border-2 border-orange w-3.5"></span>
                                    <span className="border-2 border-orange w-9"></span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-y-4 whitespace-nowrap leading-7'>
                                <a href='/about-us' className='text-[#ffffffda] hover:text-orange flex gap-2 items-center transform hover:translate-x-[10px] '><IoMdArrowDropright className='text-orange' size={20} /> <span className='font-normal hover:text-orange'>About Us</span></a>
                                <p className='text-[#ffffffda] hover:text-orange flex gap-2 items-center transform hover:translate-x-[10px] '><IoMdArrowDropright className='text-orange' size={20} /> <span className='font-normal hover:text-orange'>FAQ's</span></p>
                                <p className='text-[#ffffffda] hover:text-orange flex gap-2 items-center transform hover:translate-x-[10px] '><IoMdArrowDropright className='text-orange' size={20}/> <span className='font-normal hover:text-orange'>Our Services</span></p>
                                <p className='text-[#ffffffda] hover:text-orange flex gap-2 items-center transform hover:translate-x-[10px] '><IoMdArrowDropright className='text-orange' size={20} /> <span className='font-normal hover:text-orange'>Latest Blog</span></p>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-y-5 xsm:gap-y-8 col-span-2 xsm:col-span-1 lg:col-span-3'>
                            <div className="flex flex-col gap-y-5">
                                <p className="text-lg xsm:text-xl font-medium">Our Services</p>
                                <div className="flex gap-2">
                                    <span className="border-2 border-orange w-3.5"></span>
                                    <span className="border-2 border-orange w-9"></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 text-[#ffffffda] leading-7'>
                                <p className='flex gap-2 items-center'><FaLocationDot className='text-orange w-6' /> <span className='font-normal'>25/B Milford Road, New York, USA</span></p>
                                <p className='flex gap-2 items-center'><AiOutlinePhone className='text-orange' /> <span className='font-normal'>+2 123 654 7898</span></p>
                                <p className='flex gap-2 items-center'><MdOutlineMailOutline className='text-orange' /> <span className='font-normal'>support@example.com</span></p>
                            </div>

                        </div>

                        <div className='flex flex-col gap-y-5 xsm:gap-y-8 lg:col-span-2 md:col-span-4 col-span-2'>
                            <div className="flex flex-col gap-y-5">
                                <p className="text-lg xsm:text-xl font-medium">Newsletter</p>
                                <div className="flex gap-2">
                                    <span className="border-2 border-orange w-3.5"></span>
                                    <span className="border-2 border-orange w-9"></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <p className='text-[#ffffffda] flex gap-2 items-center leading-7'>Subscribe Our Newsletter To Get
                                    Latest Update And News</p>
                                    <div className='border-2 border-white rounded-4xl px-4 py-3'>
                                        <input type='email' placeholder='Your Email' className='focus-visible:outline-0' />
                                    </div>
                                    <ThemeButton className={"text-sm !mx-0 !pl-5"} title={'Subscribe Now '} icon={<GrSend />}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='px-4 xsm:px-10 l:px-20 xl:px-32 bg-[#223F58] py-5 flex flex-col lg:flex-row gap-6 justify-between text-[#F5FAFF] text-xs sm:text-base w-full'>
                <p className='order-2 lg:order-none self-center'><span>© Copyright 2025 </span><span className='text-orange'>Gala On Rent</span><span> All Rights Reserved.</span></p>
                <div className='flex justify-between gap-4 whitespace-nowrap lg:w-1/3'>
                    <p>Support</p>
                    <p>Terms Of Services</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
