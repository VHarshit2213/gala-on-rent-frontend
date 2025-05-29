import React from 'react'
import { Card, Title } from '../../components/common'
import { IoStar } from "react-icons/io5";
import quote from "../../assets/Home/quote.png"
import clientImage from "../../assets/Home/clientImage.jpg"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 1116,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const WhatClientSays = () => {
  return (
    <div className='flex flex-col gap-12.5 bg-linear-to-t from-[#FFF] to-[#FFEEE0] py-20 px-[120px]'>
      <Title
        title="What Client"
        highlightTitle=" Say's"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className="slider-container client_slider">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index}>
              <Card className="bg-white p-6 px-7 flex flex-col gap-5 rounded-xl relative">
                <div className="border-2 border-dotted border-orange rounded-50 w-20 h-20 p-1 absolute right-10 -top-7.5">
                  <img src={clientImage} alt="Client" className="rounded-50" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="text-orange" />
                  ))}
                </div>
                <div className="text-[#757F95] font-normal text-sm">
                  There are many variations of passages available but the majority have suffered alteration in some form by injected.
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#192E3F] font-semibold text-xl">Sylvia H Green</p>
                    <p className="text-[#757F95] font-normal text-sm">Founder & CEO</p>
                  </div>
                  <img src={quote} alt="Quote Icon" />
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default WhatClientSays
