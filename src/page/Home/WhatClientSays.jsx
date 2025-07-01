import React, { useEffect } from "react";
import { Card, Title } from "../../components/common";
import quote from "../../assets/Home/quote.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllReviews } from "../../reducer/reviews/thunk";
import Spinner from "../../components/common/Spinner";
import { Rating } from "@mui/material";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

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
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ReviewCard = ({ review }) => {
  const { image, _id, star, description, name, subtitle } = review;
  return (
    <Card
      className="bg-white p-4 xsm:p-6 xsm:px-7 flex flex-col gap-5 rounded-xl relative"
      key={_id}
    >
      <div className="border-2 border-dotted border-orange rounded-50 w-20 h-20 p-1 absolute right-10 -top-7.5">
        <img
          src={`${BASE_URL}/${image}`}
          alt="Client"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex gap-1">
        <Rating
          name="simple-controlled"
          value={star}
          readOnly 
          sx={{
            fontSize: "1.1rem",
            "& .MuiRating-iconFilled": {
              color: "#e56c06",
            },
          }}
        />
      </div>
      <div className="text-[#757F95] font-normal text-sm">{description}</div>
      <div className="flex justify-between">
        <div>
          <p className="text-[#192E3F] font-semibold text-lg md:text-xl">{name}</p>
          <p className="text-[#757F95] font-normal text-xs md:text-sm">{subtitle}</p>
        </div>
        <img src={quote} alt="Quote Icon" className="h-12 w-12 md:w-16 md:h-16"/>
      </div>
    </Card>
  );
};

const WhatClientSays = () => {
  const dispatch = useDispatch();
  const { allReviews, loading } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (!allReviews || allReviews.length === 0) return null;

  return (
    <div className="flex flex-col gap-[30px] xsm:gap-12.5 bg-linear-to-t from-[#FFF] to-[#FFEEE0] py-8 xsm:py-20 px-4 xsm:px-10 l:px-20 xl:px-32">
      <Title
        title="What Client"
        highlightTitle=" Say's"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      {allReviews?.length < 3 ? (
        <div className="grid sm:grid-cols-2 gap-16 sm:gap-8 mt-6 sm:mt-0">
          {allReviews?.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      ) : (
        <div className="slider-container client_slider">
          <Slider {...settings}>
            {allReviews?.map((review) => (
              <ReviewCard review={review} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default WhatClientSays;
