import React from 'react'
import Header from '../../components/Header'
import about_commercial  from "../../assets/AboutUs/about_commercial.png"
import infrastructure  from "../../assets/AboutUs/Infrastructure.png"
import { Card, CardBody, Footer, ThemeButton } from '../../components/common'

const AboutUs = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative !w-full h-screen bg-[url("/about_banner.png")] !bg-no-repeat !bg-cover !bg-center'>
                <div className='absolute w-full'>
                    <Header />
                </div>
                <p className='relative w-full top-1/2 left-1/2 -translate-1/2 capitalize xl:text-[64px] lg:text-[55px] text-[40px] text-center font-bold text-white lg:px-[193px] px-20'>we help <span className='text-orange'>businesses</span> of all sizes find the <span className='text-orange'>right space</span> to grow</p>
            </div>
            <div className='bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF] py-17.5 px-15 flex flex-col lg:gap-y-10 gap-y-6'>
                <p className='xl:text-[64px] lg:text-[55px] text-[40px] font-bold capitalize text-center'>Welcome to <span className='text-orange'>Gala on rent.com</span></p>
                <p className='xl:text-2xl lg:text-xl text-base font-normal'>Founded in 2012 and acquired by REA India (formerly known as Elara Technologies Pte. Ltd.) in 2017,<a href='https://housing.com/buy-real-estate-surat' target='_blank' className='text-black border-b border-black'> Housing.com</a> stands as India's No. 1 Real Estate App, catering to homeowners, home seekers, landlords, developers, and real estate brokers.<a href='https://housing.com/buy-real-estate-surat' target='_blank' className='text-black border-b border-black'> Housing.com</a> provides comprehensive listings for a wide range of properties, including new homes, resale homes, rentals, plots, commercial spaces, and co-living accommodations across India. Company is backed by robust research and analytics, offering a spectrum of real estate services encompassing advertising, marketing, sales solutions for real estate developers, personalised search & insights, virtual viewing, AR&VR content, home loans, end-to-end services, and post-transaction support for both, buyers and renters. Additionally, the company offers a suite of online services through Housing Edge brand, including features like Pay on credit, lending services, and an array of DIY services, catering to both, customers and landlords. With a presence in 28 cities (tier I & II markets),<a href='https://housing.com/buy-real-estate-surat' target='_blank' className='text-black border-b border-black'> Housing.com</a>’ mission is to simplify the home buying, selling, and renting journey for its valued customers. REA India is a group company of global proptech leader, REA Group of Australia that is part of NewsCorp US. And our mission is to be the first choice of our consumers and partners in discovering, renting, buying, selling, financing a home, and digitally </p>
            </div>
            <div className='p-15 pt-30 relative'>
                <Card cardClassName="xl:p-13 lg:p-8 p-5 bg-[#FFFFFFE5] absolute top-8 xl:right-40 lg:right-30 right-20 xl:max-w-3xl lg:max-w-lg max-w-sm w-full h-auto border-[0.5px] border-[#76767682] rounded-md">
                    <CardBody bodyClassName="text-center flex flex-col xl:gap-y-12 lg:gap-y-10 gap-y-6">
                            <img src={infrastructure} alt="infrastructure" className='xl:w-20 xl:h-20 w-15 h-15 mx-auto' />
                            <p className='font-bold xl:text-5xl lg:text-3xl text-lg capitalize xl:leading-17 leading-10'>Your dream <span className='text-orange'> commercial property </span> is just a <span className='text-orange'>few clicks </span> away</p>
                            <ThemeButton title={"Find NOW"} className={"!justify-center !pl-5"} />
                    </CardBody>
                </Card>
                <img src={about_commercial} alt='about_commercial' className='w-full' />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
