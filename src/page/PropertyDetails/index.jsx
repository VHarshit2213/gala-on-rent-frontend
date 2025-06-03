import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, CardBody, ThemeButton } from '../../components/common'
import property_1 from "../../assets/Property/property_1.png"
import property_2 from "../../assets/Property/property_2.jpg"
import property_3 from "../../assets/Property/property_3.jpg"
import seller_img from "../../assets/Property/seller_img.jpg"
import row_oil from "../../assets/Property/row-oil.png"
import { RiShareFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoFlash } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import SimilarPropertiesShowroom from '../../components/SimilarPropertiesShowroom';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "10px",
    responsive: [
        {
            breakpoint: 1216,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
            }
        }
    ]
};


const PropertyDetails = () => {

    const [liked, setLiked] = useState(false);

    return (
        <div>
            <div className='flex flex-col gap-y-6 py-6 xl:px-[198px] lg:px-[138px] p-3'>
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
                        <div className='border border-orange-transparent rounded-full p-3 cursor-pointer bg-white'><RiShareFill className='text-orange' /></div>
                        <Button type="button" className='border border-orange-transparent rounded-full p-3 cursor-pointer bg-white' onClick={() => setLiked(!liked)}>{liked ? <GoHeartFill className='text-orange' /> : <FaRegHeart className='text-orange' />}</Button>
                    </div>
                    <img src={property_1} alt='property_1' className='h-[461px] 2xl:w-[1500px] xl:w-[1100px] w-full' />
                    <div className='flex flex-col gap-4 xl:w-[400px] w-[250px]'>
                        <img src={property_2} alt="property_2" className='h-full object-cover' />
                        <img src={property_3} alt="property_3" className='h-full object-cover' />
                    </div>
                </div>
                <div>
                    <ul className='flex text-center text-xl justify-between'>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>855 Sq. Ft carpet Area </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>Freehold Ownership </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>Commercial Project Location Hub </li>
                        <li className='py-3.5 px-5 border-r border-[#D9D9D9DD]'>1st/ 4 Floors Floors </li>
                        <li className='py-3.5 px-5'>Immediately Available From </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-[#D9D9D9DD] font-medium text-xl py-7 xl:px-[198px] lg:px-[138px] px-3 shadow-[0px_4px_10px_0px_#55555540]'>
                <div className='flex justify-between lg:w-[80%] w-full'>
                    <a href='#ABOUT'>ABOUT</a>
                    <a href='#OVERVIEW'>OVERVIEW</a>
                    <a href='#ADDITIONAL_DETAILS'>ADDITIONAL DETAILS</a>
                    <a href='#AMENITIES'>AMENITIES</a>
                </div>
            </div>
            <div className='flex gap-3 xl:px-[198px] lg:px-[138px] px-3 py-4.5 w-full bg-[#F8F8F8]'>
                <div className='flex-1 lg:w-[62%] w-1/2 mb-3 flex flex-col gap-y-5'>
                    <div id="ABOUT">
                        <Card cardClassName={"bg-white"}>
                            <p className='text-lg font-semibold py-5 px-7 border-b border-gray'>About the property</p>
                            <p className='text-sm font-semibold py-5 px-7 border-b border-gray'>This commercial Showroom is available for lease at Mota Varachha of Surat, an emerging real estate destination that will be ideal for your business. The Showroom is spread over a carpet area of 855.0 square feet . There are facilities such as Water Storage. The property is available at a rent of 20.0k per month %. The age of the property is 10 years. Please call for additional details</p>
                            <p className='text-orange text-base font-semibold py-5 px-7 flex items-center justify-center'>Read More <MdExpandMore size={20} /></p>
                        </Card>
                    </div>
                    <div id="OVERVIEW">
                        <Card cardClassName={"bg-white"}>
                            <p className='text-lg font-semibold py-5 px-7 border-b border-gray'>Overview</p>
                            <div className='grid grid-cols-2 py-5 px-7 gap-6'>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item) => (
                                        <div className='flex flex-col gap-y-1'>
                                            <p className='text-muted-transparent text-base font-semibold'>Carpet  Area</p>
                                            <p className='text-base font-semibold'>855 sq.ft</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </div>
                    <div id="ADDITIONAL_DETAILS">
                        <Card cardClassName={"bg-white"}>
                            <p className='text-lg font-semibold py-5 px-7 border-b border-gray'>Additional Details</p>
                            <div className='grid grid-cols-2 py-5 px-7 gap-6'>
                                {
                                    [1, 2]?.map((item) => (
                                        <div className='flex flex-col gap-y-1'>
                                            <p className='text-muted-transparent text-base font-semibold'>Ownership</p>
                                            <p className='text-base font-semibold'>freehold</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </div>
                    <div id="AMENITIES">
                        <Card cardClassName={"bg-white"}>
                            <p className='text-lg font-semibold py-5 px-7 border-b border-gray'>Amenities</p>
                            <div className='grid grid-cols-2 py-5 px-7 gap-6'>
                                {
                                    [1]?.map((item) => (
                                        <div className='flex flex-col gap-y-1'>
                                            <img src={row_oil} alt='row_oil' className='w-8 h-8' />
                                            <p className='text-base font-semibold'>Water Storage</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </div>
                    <SimilarPropertiesShowroom data={[1,2,3,4,5,6]} slidesToShow={3} />
                </div>
                <div className='lg:w-[38%] w-1/2 mt-5'>
                    <div className='sticky top-5 right-0 '>
                        <Card cardClassName={"bg-white p-5"}>
                            <CardBody bodyClassName={"flex flex-col gap-y-5"}>
                                <div className='border border-orange bg-[#E56C0626] rounded-md flex gap-3 justify-center p-2'>
                                    <IoFlash className='text-orange' />
                                    <p className='text-xs font-medium'>Great choice! Most viewed project in this area</p>
                                </div>
                                <Card cardClassName={"shadow-[2px_2px_10px_0px_#00000040] py-4 px-6 rounded-md"}>
                                    <CardBody bodyClassName={"flex flex-col gap-y-4"}>
                                        <p className='text-xl font-medium'>CONTACT SELLER</p>
                                        <div className='flex gap-2'>
                                            <img src={seller_img} alt='seller_img' className='rounded-full w-14 h-14 object-cover border border-black' />
                                            <div className='flex flex-col w-full max-w-[80%]'>
                                                <p className='font-bold text-xl'>Palm Harbor</p>
                                                <p className='truncate w-full text-xs font-medium text-muted-transparent'>2699 Green Valley, Highland Lake, FL</p>
                                                <p className='text-xs font-semibold'>+91 9876543210</p>
                                            </div>
                                        </div>
                                        <p className='text-base font-semibold'>Please share your contact</p>
                                        <div className='flex flex-col gap-y-3'>
                                            <div className='flex flex-col gap-y-1'>
                                                <label className='text-base font-medium'>Name</label>
                                                <input type='text' placeholder='Enter your name' className='w-full focus-visible:outline-0 rounded-xl border border-gray p-3' />
                                            </div>
                                            <div className='flex flex-col gap-y-1'>
                                                <label className='text-base font-medium'>Phone Number</label>
                                                <input type='text' placeholder='Enter your phone number' className='w-full focus-visible:outline-0 rounded-xl border border-gray p-3' />
                                            </div>
                                            <div className='flex flex-col gap-y-1'>
                                                <label className='text-base font-medium'>Email</label>
                                                <input type='email' placeholder='Enter your email' className='w-full focus-visible:outline-0 rounded-xl border border-gray p-3' />
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                                <div className='flex gap-2'>
                                    <input type='checkbox' className='accent-orange w-full max-w-4 h-5' />
                                    <p className='text-xs font-bold leading-5'>I agree to be contacted by Gala on Rent and agents via WhatsApp, SMS, Phone, Email etc</p>
                                </div>
                                <ThemeButton title={"Get contact details"} className={"!justify-center !max-w-[350px]"} />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails
