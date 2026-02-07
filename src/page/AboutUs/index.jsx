import React from 'react'
import Header from '../../components/Header'
import about_commercial from "../../assets/AboutUs/about_commercial.png"
import infrastructure from "../../assets/AboutUs/Infrastructure.png"
import { Card, CardBody, Footer, ThemeButton } from '../../components/common'
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaSearchDollar, FaHandshake } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi";
import { LuSearchCheck } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdBriefcase } from "react-icons/io";
import { RiRepeat2Fill } from "react-icons/ri";
import { FiZap } from "react-icons/fi";

const serve = [
    { icon: HiOutlineOfficeBuilding, title: "Property Owners", desc: "Owners looking to rent or sell their gala, shop, warehouse, office, or industrial unit" },
    { icon: FaSearchDollar, title: "Tenants & Buyers", desc: "Tenants & buyers searching for commercial property without hassle" },
    { icon: FaHandshake, title: "Trusted Agents", desc: "Agents who want a clean, transparent platform to close deals faster" }
]

const steps = [
    {
        step: "01",
        title: "Search",
        desc: "Explore verified listings across shops, galas, warehouses, offices, and industrial units in seconds."
    },
    {
        step: "02",
        title: "Connect",
        desc: "Talk directly with owners, buyers, tenants, or agents — no forced brokerage."
    },
    {
        step: "03",
        title: "Inspect",
        desc: "Visit the property at your convenience. Compare options, negotiate transparently."
    },
    {
        step: "04",
        title: "Close",
        desc: "Finalize the deal on your terms. Simple. Direct. Hassle-free."
    }
]
const features = [
    "Verified commercial listings all across the city",
    "Direct connections with owners, tenants, and buyers",
    "Transparent pricing and property details",
    "No forced brokerage — only deals that work for you",
    "A platform built around speed, clarity, and convenience"
]

const chooseFeatures = [
    {
        icon: LuSearchCheck,
        title: "Verified Listings Only",
        desc: "Every property on GalaOnRent is checked for accuracy — so you get clarity, not surprises."
    },
    {
        icon: TbPhoneCall,
        title: "Direct Conversations",
        desc: "Connect with decision-makers instantly. No middle layers unless you choose."
    },
    {
        icon: IoMdBriefcase,
        title: "Built for Business",
        desc: "Shops, offices, warehouses, industrial galas — we’re focused only on commercial spaces."
    },
    {
        icon: RiRepeat2Fill,
        title: "Owner–Tenant–Agent Friendly",
        desc: "A level playing field where everyone can list, discover, and close deals fast."
    },
    {
        icon: FiZap,
        title: "Fast, Transparent, Real",
        desc: "Find the right space, negotiate directly, and move without friction."
    }
]
const AboutUs = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative !w-full h-screen bg-[url("/about_banner.png")] !bg-no-repeat !bg-cover !bg-center'>
                <div className='xsm:absolute w-full'>
                    {/* <Header /> */}
                </div>
                <p className='relative w-full top-1/2 left-1/2 -translate-1/2 capitalize xl:text-[64px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[20px] text-center font-bold text-white lg:px-[193px] xsm:px-20 px-10'>we help <span className='text-orange'>businesses</span> of all sizes find the <span className='text-orange'>right space</span> to grow</p>
            </div>
            <div className='bg-linear-to-r from-[#FFF5EB] to-[#FFFFFF] py-6 xsm:py-10 md:py-17.5 px-4 xsm:px-6 sm:px-10 lg:px-15 flex flex-col lg:gap-y-10 sm:gap-y-6 gap-y-3'>
                <div className='flex flex-col gap-3 max-w-300 w-full mx-auto'>
                    <p className='md:text-[40px] sm:text-[30px] text-[20px] font-bold capitalize text-center'>Welcome to <span className='text-orange'>Gala on rent.com</span></p>
                    <p className='md:text-lg text-base font-normal text-center'>At GalaOnRent, we make renting and selling commercial property simple, transparent, and accessible for everyone — business owners, investors, and even agents. No hidden layers. No confusing middle steps. Just real spaces, real people, real deals.</p>
                    <p className='md:text-lg text-base font-normal text-center'>Whether you're opening your first store, expanding a warehouse footprint, setting up a small office, or listing an industrial gala for rent or sale — this is the marketplace built for you</p>
                </div>
            </div>
            <div className="lg:py-16 py-12 px-4 sm:px-10 lg:px-20 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="md:text-[40px] sm:text-[30px] text-[20px] font-bold mb-4 lg:mb-6">
                            What <span className="text-orange">We Do</span>
                        </h2>

                        <p className="text-gray-700 lg:text-lg lg:leading-relaxed">
                            We connect property owners, tenants, and buyers directly —
                            while still giving agents the space to operate fairly.
                            <span className="font-medium"> You get:</span>
                        </p>
                    </div>

                    {/* Right Features */}
                    <div className="bg-linear-to-r bg-white border border-orange from-[#FFF5EB] rounded-2xl p-8 hover:shadow-lg">
                        <ul className="space-y-4">
                            {features.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <FiCheckCircle className="text-orange w-4 lg:w-5 h-4 lg:h-5 mt-1 shrink-0" />
                                    <span className="text-gray-800 text-sm lg:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center items-center text-center lg:gap-6 gap-4 lg:py-16 py-12 bg-linear-to-r from-[#FFF5EB] to-[#FFFFFF] w-full mx-auto'>
                <p className='md:text-[40px] sm:text-[30px] text-[20px] font-bold capitalize'>Why <span className='text-orange'>We Exist</span></p>
                <p className='lg:text-lg max-w-300 px-4 xsm:px-6 sm:px-10 lg:px-15'>The commercial real-estate market is messy. Too many calls, too many middlemen, too little clarity. We built GalaOnRent to fix that.
                    Here, you can explore the right property at the right price — without guesswork, inflated quotes, or endless back-and-forth.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-7 max-w-300 w-full mx-auto lg:py-16 py-12 px-5'>
                <p className='md:text-[40px] sm:text-[30px] text-[20px] font-bold capitalize'>Who <span className='text-orange'>We Serve</span></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 text-center">
                    {serve.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="flex flex-col items-center gap-4 px-4 p-5 text-center
                   rounded-[10px] border border-orange hover:shadow-md transition"
                        >
                            <Icon className="text-orange text-4xl" />

                            <h3 className="md:text-xl text-base font-semibold">
                                {title}
                            </h3>

                            <p className="text-gray-600 md:text-lg text-base">
                                {desc}
                            </p>
                        </div>
                    ))}


                </div>
            </div>

            <div className="bg-linear-to-r from-[#FFF5EB] to-[#FFFFFF] lg:py-16 py-12 px-4 sm:px-10 lg:px-20 text-center flex flex-col gap-2">
                <h2 className="md:text-[40px] sm:text-[30px] text-[20px] font-bold">
                    Our <span className="text-orange">Promise</span>
                </h2>
                <p className="md:text-xl text-base font-medium text-gray-800">
                    Clear information. Real listings. Direct conversations.
                </p>
                <p className="md:text-lg text-base text-gray-600 max-w-300 mx-auto leading-relaxed">
                    We don’t complicate things — we make them move.
                    Whether you're a startup finding your first space or a seasoned
                    business scaling your operations, <span className="font-semibold text-gray-800">
                        GalaOnRent</span> is where your next commercial move begins.
                </p>
            </div>

            <div className="relative w-full bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF] flex items-center justify-center px-4 lg:py-16 py-12">

                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg xl:p-12 lg:p-10 p-6 max-w-3xl w-full">

                    <h2 className="text-3xl font-bold mb-6">
                        “How It <span className="text-orange">Works</span>
                    </h2>

                    <div className="w-20 h-[2px] bg-orange mb-8" />

                    <div className="flex flex-col gap-6">
                        {steps.map(({ step, title, desc }) => (
                            <div key={step}>
                                <h3 className="text-lg font-semibold mb-1">
                                    <span className="text-orange mr-2">{step}</span>
                                    {title}
                                </h3>

                                <p className="text-gray-700 text-base leading-relaxed pl-6">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="lg:py-16 xsm:py-12 pt-12 pb-6! px-4 sm:px-10 lg:px-20 bg-white">

                {/* Title */}
                <div className="text-center mb-6 lg:mb-12">
                    <h2 className="md:text-[40px] sm:text-[30px] text-[20px] font-bold">
                        Why Choose <span className="text-orange">GalaOnRent?</span>
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
                    {chooseFeatures.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="bg-linear-to-r from-[#FFF5EB] to-[#FFFFFF] border border-orange rounded-2xl p-6 
                                   hover:shadow-md transition"
                        >
                            <Icon className="text-orange w-8 h-8 mb-4" />

                            <h3 className="text-xl font-semibold mb-2">
                                {title}
                            </h3>

                            <p className="text-gray-700 text-base leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
            <div className='p-4 xsm:p-6 sm:p-10 lg:p-15 sm:!pt-30 relative'>
                <Card cardClassName="xl:p-13 lg:p-8 md:p-5 p-4 bg-[#FFFFFFE5] sm:absolute top-8 xl:right-40 lg:right-30 right-20 xl:max-w-3xl lg:max-w-lg md:max-w-sm sm:max-w-xs w-full h-auto border-[0.5px] border-[#76767682] rounded-md">
                    <CardBody bodyClassName="text-center flex flex-col xl:gap-y-12 lg:gap-y-10 md:gap-y-6 gap-y-3">
                        <img src={infrastructure} alt="infrastructure" className='xl:w-20 xl:h-20 w-15 h-15 mx-auto' />
                        <p className='font-bold xl:text-5xl lg:text-3xl text-lg capitalize xl:leading-17 leading-10'>Your dream <span className='text-orange'> commercial property </span> is just a <span className='text-orange'>few clicks </span> away</p>
                        <ThemeButton title={"Find NOW"} className={"!justify-center !pl-5"} />
                    </CardBody>
                </Card>
                <img src={about_commercial} alt='about_commercial' className='w-full hidden sm:block' />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default AboutUs
