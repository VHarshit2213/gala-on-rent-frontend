import React from 'react'
import { PiKeyBold } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Card, CardHeader } from '../../components/common';
import maskGroup from "../../assets/Home/maskGroup.png"
import squareMeters from "../../assets/Home/squareMeters.png"
import popular from "../../assets/Home/popular.png"
import { Button, CardBody, CardFooter } from '../../components/common/Components';

const BasedOnLocation = () => {
    return (
        <div className='mt-15 bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF] flex flex-col gap-[50px] px-20'>
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
            <div className='grid grid-cols-3 gap-y-8'>
                {
                    [1, 2, 3, 4, 5, 6]?.map((item) => (
                        <Card cardClassName="bg-white w-fit relative">
                            {[1, 2, 3]?.includes(item) && <div className="absolute top-[40%] left-[-3%] bg-orange text-white flex justify-start items-center gap-2 uppercase text-sm font-semibold p-2 rounded-tl-lg rounded-r-lg">
                                <div className="absolute top-9 -left-0 w-0 h-0 border-b-[10px] border-l-transparent border-l-[10px] border-b-[#934300] rotate-[271deg]"></div>
                                <img src={popular} /> popular
                            </div>}
                            <CardHeader>
                                <img src={maskGroup} />
                            </CardHeader>
                            <CardBody>
                                <div className='p-6 flex flex-col gap-y-3'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-end gap-1'>
                                            <span className='text-orange text-xl font-semibold'>$2,095</span><span className='text-muted opacity-50 font-medium'>/month</span>
                                        </div>
                                        <div className='p-3.5 rounded-50 border border-[#e56c064d]'>
                                            <FaRegHeart size={20} className='text-orange' />
                                        </div>
                                    </div>
                                    <div className='text-muted flex flex-col gap-y-1'>
                                        <h2 className='font-bold text-2xl'>Palm Harbor</h2>
                                        <p className='opacity-50 text-sm'>2699 Green Valley, Highland Lake, FL</p>
                                    </div>
                                </div>
                                <hr className='border-b-0 border-[#F0EFFB]' />
                            </CardBody>
                            <CardFooter footerClassName="flex justify-between items-center p-6">
                                <div className='flex gap-2 text-muted'>
                                    <img src={squareMeters} />
                                    <span className='opacity-50 text-sm'>5,000 sq.ft.</span>
                                </div>
                                <div className='p-3 rounded-50 border border-orange bg-[#E56C061A]'>
                                    <GrLinkNext className='text-orange' />
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
            <div className='bg-orange text-white rounded-full px-3 py-2 w-full max-w-[300px] flex justify-between items-center text-center mx-auto'>
                <Button className="uppercase">
                    Browse more properties
                </Button>
                <div className='p-2 rounded-50 border border-orange bg-white'>
                    <GrLinkNext className='text-orange' />
                </div>
            </div>
        </div>
    )
}

export default BasedOnLocation
