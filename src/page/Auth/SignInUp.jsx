import React, { useState } from 'react'
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardBody, Tab, Tabs, ThemeButton } from '../../components/common';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const SignInUp = () => {

  const [phone, setPhone] = useState('');
  return (
    <div className='w-full h-screen pl-[40px] pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center'>
      <div className='flex lg:gap-20 gap-4 lg:justify-center justify-between  w-full'>
        <div className='flex flex-col xl:justify-evenly justify-start xl:gap-y-0 gap-y-10'>
          <img
            src={Gala_On_RenT_LOGO}
            alt="Gala On Rent Logo"
            className="max-w-[400px] w-full"
          />
          <div className='flex flex-col xl:gap-y-12 gap-y-6'>
            <h1 className='capitalize xl:text-4xl text-2xl font-semibold'>Upload your property in <span className='text-orange border-b border-orange font-normal'>3 simple steps</span></h1>
            <div className='flex flex-col xl:gap-y-5 gap-y-2'>
              <p className='font-semibold flex gap-2 items-center xl:text-xl text-md capitalize'><FaCircleCheck className='text-[#192E3F]' size={25} /><span className='font-normal'>Add</span> Basic details</p>
              <p className='font-semibold flex gap-2 items-center xl:text-xl text-md capitalize'><FaCircleCheck className='text-[#192E3F]' size={25} /><span className='font-normal'>Add</span> property details</p>
              <p className='font-semibold flex gap-2 items-center xl:text-xl text-md capitalize'><FaCircleCheck className='text-[#192E3F]' size={25} /><span className='font-normal'>Add</span> Photos</p>
            </div>
          </div>
        </div>
        <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white rounded-xl lg:p-14 p-10 lg:max-w-lg max-w-sm w-full">
          <CardBody bodyClassName="flex flex-col justify-between gap-y-13">
            <div className='flex flex-col gap-y-9'>
              <p className='font-normal lg:text-xl text-md capitalize text-center'>New to <span className='text-orange font-semibold'>Housing</span>? Let’s get you started</p>
              <div className='flex flex-col gap-y-3'>
                <p className='font-normal lg:text-xl text-md capitalize'>Looking to</p>
                <Tabs
                  className='flex flex-col gap-y-3'
                  defaultActive="Rent"
                  tabClassName="flex xl:gap-6 gap-4"
                  tabButton="lg:py-4 py-3 lg:px-9 px-6 font-medium text-base border border-[#D9D9D9] rounded-md"
                  active="bg-[#E56C0633] text-orange border border-transparent font-medium"
                  tabContent="py-3"
                >
                  <Tab eventKey="Rent" title="Rent">
                    <PhoneInput
                      defaultCountry="in"
                    // value={phone}
                    // onChange={(phone) => setPhone(phone)}
                    />
                  </Tab>
                  <Tab eventKey="Sell" title="Sell">
                    <PhoneInput
                      defaultCountry="us"
                    // value={phone}
                    // onChange={(phone) => setPhone(phone)}
                    />
                  </Tab>
                </Tabs>
                <ThemeButton title={"PROCEED"} className="!justify-center gap-3 !max-w-[420px] mt-4" />
              </div>
            </div>
            <p className='text-base font-semibold uppercase text-center'>Existing User? <span className='text-orange'>Login Here</span></p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default SignInUp
