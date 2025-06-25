import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, CardBody, ThemeButton } from "../../components/common";
import seller_img from "../../assets/Property/seller_img.jpg";
import row_oil from "../../assets/Property/row-oil.png";
import { RiShareFill } from "react-icons/ri";
import { BiCctv } from "react-icons/bi";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import { IoFlash } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import SimilarPropertiesShowroom from "../../components/SimilarPropertiesShowroom";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProperty } from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import moment from "moment/moment";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const imgSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "400px",
  dotsClass: "slick-dots property-custom-dots",
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        centerPadding: "350px",
      },
    },
    {
      breakpoint: 1536,
      settings: {
        centerPadding: "300px",
      },
    },
    {
      breakpoint: 1280,
      settings: {
        centerPadding: "250px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 900,
      settings: {
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 640,
      settings: {
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: "30px",
      },
    },
  ],
};

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const { getProperty, loading } = useSelector((state) => state.property);
  const params = useParams();
  const location = useLocation();
  const fromAdmin = location.state?.fromAdmin || false;

  // destructure Property details
  const {
    date,
    Financials,
    address,
    city,
    Popular_Area,
    pincode,
    image,
    Carpet_Area,
    looking_to,
    type_of_property,
    Property_Suitable_For,
    Type_of_Power,
    Amenities,
    Number_of_Washroom,
    Type_of_Water_Supply,
    Other_Area,
    available_From,
    About_the_property,
    User_data,
  } = getProperty;

  // for extract floor
  const getBlockNumber = (address) => {
    if (!address) return "";

    const parts = address.split("-");
    if (parts.length > 1) {
      const block = parts[0].trim();
      const number = parts[1].trim().split(" ")[0];
      return `${block}-${number}`;
    } else {
      return address.split(",")[0].trim().split(" ")[0];
    }
  };
  const blockNumber = getBlockNumber(address);

  const overViewDetails = [
    { label: "Carpet Area", value: Carpet_Area },
    { label: "Number of Washroom", value: Number_of_Washroom },
    { label: "Other Area", value: Other_Area },
    { label: "Location Hub", value: type_of_property },
    { label: "floor", value: blockNumber },
  ];

  const additionalDetails = [
    { label: "Looking To", value: looking_to },
    { label: "Power", value: Type_of_Power },
  ];

  const amenitiesIcon = {
    "fire extinguishers": <LiaFireExtinguisherSolid size={25} />,
    cctv: <BiCctv size={25} />,
    "water storage": <img src={row_oil} alt="row_oil" className="w-6" />,
  };

  useEffect(() => {
    dispatch(fetchSingleProperty(params.id));
  }, [params.id, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex flex-col gap-y-6 py-6 xl:px-[198px] lg:px-[138px] p-3">
        <div className="flex justify-between text-muted-transparent font-medium">
          <p>
            Home / {city} / {Popular_Area} / Property for Rent in {city}
          </p>
          <p>Last Updated: {moment(date).format("ll")}</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="border border-orange-transparent rounded-full p-3 cursor-pointer bg-white inline-block">
              <RiShareFill
                className="text-orange text-2xl"
                title="share Property"
              />
            </div>
            <p className="text-muted text-2xl font-bold">
              {address}, {city}
            </p>
            <p className="text-muted-transparent text-base font-medium">
              {Popular_Area} - {pincode}
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-2.5">
            <p className="text-muted font-bold text-2xl">Price ₹{Financials}</p>
            <Button className="bg-orange text-white py-3 px-8 rounded-lg text-sm">
              Contact Developer
            </Button>
          </div>
        </div>
      </div>

      <div className="property-img-slider">
        {image?.length > 1 ? (
          <Slider {...imgSliderSettings}>
            {image?.map((img, index) => (
              <div key={index}>
                <img
                  src={`${BASE_URL}/${img}`}
                  alt={`property_${index}`}
                  className={`h-[400px] w-full object-cover rounded-lg`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={`${BASE_URL}/${image?.[0]}`}
            alt="property"
            className="h-[500px] w-[80%] mx-auto object-cover rounded-lg"
          />
        )}
      </div>
      <div>
        <div className="flex flex-col gap-y-6 py-6 xl:px-[198px] lg:px-[138px] p-3">
          <ul className="flex text-center text-xl justify-between">
            <li className="px-5 self-center capitalize">
              {Carpet_Area} Carpet Area
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-5 self-center capitalize">{looking_to}</li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-5 self-center capitalize">{type_of_property}</li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-5 self-center capitalize">
              Floors No. {blockNumber}
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-5 self-center capitalize">
              Available From {available_From}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#D9D9D9DD] font-medium text-xl py-7 xl:px-[198px] lg:px-[138px] px-3 shadow-[0px_4px_10px_0px_#55555540]">
        <div className="flex justify-between lg:w-[80%] w-full">
          <a href="#ABOUT">ABOUT</a>
          <a href="#OVERVIEW">OVERVIEW</a>
          <a href="#ADDITIONAL_DETAILS">ADDITIONAL DETAILS</a>
          <a href="#AMENITIES">AMENITIES</a>
        </div>
      </div>
      <div className="flex gap-3 xl:px-[198px] lg:px-[138px] px-3 py-4.5 w-full bg-[#F8F8F8]">
        <div className="flex-1 lg:w-[62%] w-1/2 mb-3 flex flex-col gap-y-5">
          <div id="ABOUT">
            <Card cardClassName={"bg-white"}>
              <p className="text-lg font-semibold py-5 px-7 border-b border-gray">
                About the property
              </p>
              <p className="text-sm font-semibold py-5 px-7 border-b border-gray capitalize">
                {About_the_property}
              </p>
              <p className="text-orange text-base font-semibold py-5 px-7 flex items-center justify-center">
                Read More <MdExpandMore size={20} />
              </p>
            </Card>
          </div>
          <div id="OVERVIEW">
            <Card cardClassName={"bg-white"}>
              <p className="text-lg font-semibold py-5 px-7 border-b border-gray">
                Overview
              </p>
              <div className="grid grid-cols-2 py-5 px-7 gap-6">
                {overViewDetails?.map((item) => (
                  <div className="flex flex-col gap-y-1">
                    <p className="text-muted-transparent text-base font-semibold capitalize">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold capitalize">
                      {" "}
                      {item.value}
                    </p>
                  </div>
                ))}
                <div className="flex flex-col gap-y-1">
                  <p className="text-muted-transparent text-base font-semibold capitalize">
                    Suitable For
                  </p>
                  {Property_Suitable_For?.map((item) => (
                    <p className="text-base font-semibold capitalize">{item}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-muted-transparent text-base font-semibold capitalize">
                    Water Supply
                  </p>
                  {Type_of_Water_Supply?.map((item) => (
                    <p className="text-base font-semibold capitalize">{item}</p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div id="ADDITIONAL_DETAILS">
            <Card cardClassName={"bg-white"}>
              <p className="text-lg font-semibold py-5 px-7 border-b border-gray">
                Additional Details
              </p>
              <div className="grid grid-cols-2 py-5 px-7 gap-6">
                {additionalDetails?.map((item, index) => (
                  <div className="flex flex-col gap-y-1" key={index}>
                    <p className="text-muted-transparent text-base font-semibold capitalize">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold capitalize">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div id="AMENITIES">
            <Card cardClassName={"bg-white"}>
              <p className="text-lg font-semibold py-5 px-7 border-b border-gray">
                Amenities
              </p>
              <div className="grid grid-cols-2 py-5 px-7 gap-6">
                {Amenities?.map((label, index) => {
                  const icon = amenitiesIcon[label.toLowerCase()];
                  if (!icon) return null;
                  return (
                    <div className="flex flex-col gap-y-1" key={index}>
                      <div>{icon}</div>
                      <p className="text-base font-semibold capitalize">
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
          <SimilarPropertiesShowroom
            data={[1, 2, 3, 4, 5, 6]}
            slidesToShow={3}
          />
        </div>
        {!fromAdmin && (
          <div className="lg:w-[38%] w-1/2 mt-5">
            <div className="sticky top-5 right-0 ">
              <Card cardClassName={"bg-white p-5"}>
                <CardBody bodyClassName={"flex flex-col gap-y-5"}>
                  <div className="border border-orange bg-[#E56C0626] rounded-md flex gap-3 justify-center p-2">
                    <IoFlash className="text-orange" />
                    <p className="text-xs font-medium">
                      Great choice! Most viewed project in this area
                    </p>
                  </div>
                  <Card
                    cardClassName={
                      "shadow-[2px_2px_10px_0px_#00000040] py-4 px-6 rounded-md"
                    }
                  >
                    <CardBody bodyClassName={"flex flex-col gap-y-4"}>
                      <p className="text-xl font-medium">CONTACT SELLER</p>
                      <div className="flex gap-2">
                        <img
                          src={seller_img}
                          alt="seller_img"
                          className="rounded-full w-14 h-14 object-cover border border-black"
                        />
                        <div className="flex flex-col w-full max-w-[80%]">
                          <p className="font-bold text-xl capitalize">
                            {User_data?.person_name}
                          </p>
                          {/* <p className="truncate w-full text-xs font-medium text-muted-transparent">
                          2699 Green Valley, Highland Lake, FL
                        </p> */}
                          <p className="text-xs font-semibold">
                            {User_data?.Phone_number}
                          </p>
                        </div>
                      </div>
                      <p className="text-base font-semibold">
                        Please share your contact
                      </p>
                      <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1">
                          <label className="text-base font-medium">Name</label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-3"
                          />
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <label className="text-base font-medium">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your phone number"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-3"
                          />
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <label className="text-base font-medium">Email</label>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-3"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="accent-orange w-full max-w-4 h-5"
                    />
                    <p className="text-xs font-bold leading-5">
                      I agree to be contacted by Gala on Rent and agents via
                      WhatsApp, SMS, Phone, Email etc
                    </p>
                  </div>
                  <ThemeButton
                    title={"Get contact details"}
                    className={"!justify-center !max-w-[350px]"}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
