import React from 'react';
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import Gala from "./../../assets/Landing/Gala.png";
import Office from "./../../assets/Landing/Office.png";
import Shed from "./../../assets/Landing/Shed.png";

const Landing = () => {
    return (
        <div className='w-full h-screen  pl-[40px] pr-[72px] bg-[url(/home_bg.png)] flex justify-center items-center'>
            <div className='w-full h-full'>
                <div className='flex justify-center  w-full h-full'>
                    <div className='max-w-[1000px] w-full h-[650px] flex flex-col justify-between'>
                        <div className='flex items-start '>
                        <img src={Gala_On_RenT_LOGO} alt="Gala On Rent Logo" className='max-w-[505px] w-full' />
                        </div>

                        <div className='bg-[#A4A5A766] flex flex-col gap-[30px] py-[50px] px-[55px] rounded-lg ml-[30px]'>
                            <h1 className='text-[50px] font-bold capitalize leading-15'>
                                Find & Rent <span className='text-orange'>the right commercials</span> space
                            </h1>
                            <div className='flex flex-col gap-[20px]'>
                                <p className='text-white rounded-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#3D88E5]'>
                                    RENT YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
                                </p>
                                <p className='text-white rounded-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#EA982C]'>
                                    FIND COMMERCIAL PROPERTY / OFFICE / SHOP ON RENT
                                </p>
                                <p className='text-white rounded-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#358E54]'>
                                    SELL YOUR COMMERCIAL PROPERTY / OFFICE / SHOP
                                </p>
                                <p className='text-white rounded-[7px] font-bold text-[15px] py-[12px] px-[29px] tracking-wide bg-[#D04F4D]'>
                                    BUY ANY COMMERCIAL PROPERTY / OFFICE / SHOP
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-[30px] max-w-[400px] w-full flex flex-col justify-center items-end'>
                        <img src={Gala} alt="Gala" className='max-w-[320px] w-full max-h-[200px] h-full' />
                        <img src={Shed} alt="Shed" className='max-w-[320px] w-full max-h-[200px] h-full' />
                        <img src={Office} alt="Office" className='max-w-[320px] w-full max-h-[200px] h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
