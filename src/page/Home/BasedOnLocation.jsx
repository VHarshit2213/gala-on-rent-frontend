import React from 'react'
import { PiKeyBold } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { Card, CardHeader } from '../../components/common';
import maskGroup from "../../assets/Home/maskGroup.png"

const BasedOnLocation = () => {
    return (
        <div className='mt-15 bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF flex flex-col gap-[50px] px-20'>
            <div className='flex flex-col gap-y-2 justify-center items-center'>
                <h1 className='text-4xl capitalize font-semibold'>Based on your <span className='text-orange'>location</span></h1>
                <p className='text-gray-400 font-normal text-base'>Some of our picked properties near you location.</p>
            </div>
            <div className='border-2 border-[#E0DEF7] rounded-lg p-2 pe-5 flex gap-4 items-center max-w-fit w-full'>
                <div className='text-orange text-md py-2 px-3 border-2 border-[#E0DEF7] bg-white rounded-lg flex gap-2 items-center'>
                    <PiKeyBold />  Office
                </div>
                <div className='flex gap-2 items-center text-[#807DA8]'>
                    <RiHomeLine /> Industrial Area
                </div>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <img src={maskGroup} />
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default BasedOnLocation
