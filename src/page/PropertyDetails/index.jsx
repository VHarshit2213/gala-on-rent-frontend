import React from 'react'
import { Button, Card, CardBody } from '../../components/common'
import property_1 from "../../assets/Property/property_1.png"
import property_2 from "../../assets/Property/property_2.jpg"
import property_3 from "../../assets/Property/property_3.jpg"
import seller_img from "../../assets/Property/seller_img.jpg"
import { RiShareFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoFlash } from "react-icons/io5";

const PropertyDetails = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-y-6 py-6 px-[198px]'>
                <div className='flex justify-between text-muted-transparent font-medium'>
                    <p>Home / Surat / Vesu / Showroom for Rent in Vesu</p>
                    <p>Last Updated: Mar 10, 2025</p>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <p className='text-muted text-2xl font-bold'>855 Sq. Ft Showroom, Vesu, Surat</p>
                        <p className='text-muted-transparent text-base font-medium'>Vesu, Surat</p>
                    </div>
                    <div className='flex flex-col items-end gap-y-2.5'>
                        <p className='text-muted font-bold text-2xl'>Price on Request</p>
                        <Button className="bg-orange text-white py-3 px-14 rounded-lg text-sm">Contact Developer</Button>
                    </div>

                </div>
                <div className='flex gap-4 relative'>
                    <div className='absolute right-[30%] top-3 flex gap-3'>
                        <div className='border border-[#E56C061A] rounded-full p-3 cursor-pointer bg-white'><RiShareFill className='text-orange' /></div>
                        <div className='border border-[#E56C061A] rounded-full p-3 cursor-pointer bg-white'><FaRegHeart className='text-orange' /></div>
                    </div>
                    <img src={property_1} alt='property_1' className='h-[461px] w-[750px]' />
                    <div className='flex flex-col gap-4 w-[250px]'>
                        <img src={property_2} alt="property_2" className='h-full object-cover' />
                        <img src={property_3} alt="property_3" className='h-full object-cover' />
                    </div>
                </div>
                <div>
                    <ul className='flex text-center text-xl'>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>855 Sq. Ft carpet Area </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>Freehold Ownership </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>Commercial Project Location Hub </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>1st/ 4 Floors Floors </li>
                        <li className='py-3.5 px-5'>Immediately Available From </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-[#D9D9D9DD] font-medium text-xl py-7 flex justify-between px-[198px] shadow-[0px_4px_10px_0px_#55555540]'>
                <a href='#about'>ABOUT</a>
                <a href='#about'>OVERVIEW</a>
                <a href='#about'>ADDITIONAL DETAILS</a>
                <a href='#about'>AMENITIES</a>
            </div>
            <div className='flex gap-3 px-[198px]'>
                <div className='w-auto'>

                </div>
                <div className='w-[392px]'>
                    <Card cardClassName={"bg-white p-5"}>
                        <CardBody bodyClassName={"flex flex-col gap-y-5"}>
                            <div className='border border-orange bg-[#E56C0626] rounded-md flex gap-3 justify-center p-2'>
                                <IoFlash className='text-orange' />
                                <p className='text-xs font-medium'>Great choice! Most viewed project in this area</p>
                            </div>
                            <Card cardClassName={"shadow-[2px_2px_10px_0px_#00000040] py-4 px-6 rounded-md"}>
                                <CardBody bodyClassName={"flex flex-col gap-y-3"}>
                                    <p className='text-xl font-medium'>CONTACT SELLER</p>
                                    <div className='flex gap-2'>
                                        <img src={seller_img} alt='seller_img' className='rounded-full w-14 h-14 object-cover border border-black' />
                                        <div className='flex flex-col '>
                                            <p className='font-bold text-xl'>Palm Harbor</p>
                                            <p className='text-xs font-medium text-muted-transparent'>2699 Green Valley, Highland Lake, FL</p>
                                            <p className='text-xs font-semibold'>+91 9876543210</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails
