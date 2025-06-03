import React from 'react'
import { Button, Card } from './common'
import property_1 from "../assets/Property/property_1.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarPropertiesShowroom = ({data=[],slidesToShow}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        responsive: [
            {
                breakpoint: 1216,
                settings: {
                    slidesToShow: slidesToShow-1,
                    slidesToScroll: slidesToShow-1,
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
    return (
        <div>
            <Card cardClassName={"bg-white"}>
                <p className='text-lg font-semibold py-5 px-7 border-b border-gray'>Similar Properties to Showroom</p>
                <div className='pt-8 px-7.5 slider-container properties-slider'>
                    <Slider {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className='w-fit border border-gray rounded-lg relative' key={index}>
                                    <img src={property_1} alt='property_1' className='w-full rounded-tl-lg rounded-tr-lg' />
                                    <div className='p-3 flex flex-col gap-y-4'>
                                        <div className='flex flex-col font-semibold text-sm'>
                                            <p className='text-lg'>Showroom</p>
                                            <p>by Bharat</p>
                                            <p>Moradiya</p>
                                        </div>
                                        <div className='flex flex-col font-semibold text-xs text-muted-transparent'>
                                            <p className='truncate'>Immediately  *   700 sq.ft  *  1 eefe</p>
                                            <p>Subhash Nagar Society,</p>
                                            <p className='truncate w-12'>Katar frn</p>
                                        </div>
                                        <p className='font-semibold text-base'>$25,000</p>
                                    </div>
                                    <Button className="absolute -bottom-5 left-5 bg-orange text-white py-1 text-sm flex justify-center rounded-md w-25">Contact</Button>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Card>
        </div>
    )
}

export default SimilarPropertiesShowroom
