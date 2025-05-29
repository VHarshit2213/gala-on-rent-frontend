import React from 'react'
import Header from '../../components/Header'
import about_banner from "../../assets/AboutUs/about_banner.png"

const AboutUs = () => {
    return (
        <div className='relative'>
            <div className='absolute !w-full h-screen bg-[url("/about_banner.png")] !bg-no-repeat !bg-cover !bg-center'
            //  style={{ background: `url(${about_banner})` }}
              />
            <div className='absolute w-full'>
                <Header />
            </div>
            <p className='absolute capitalize flex justify-center items-center text-[64px] font-bold text-white px-[193px] text-center'>we help <span className='text-orange'>businesses</span> of all sizes find the <span className='text-orange'>right space</span> to grow</p>
        </div>
    )
}

export default AboutUs
