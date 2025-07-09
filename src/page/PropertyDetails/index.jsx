import React, { useEffect, useRef, useState } from "react";
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
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import SimilarPropertiesShowroom from "../../components/SimilarPropertiesShowroom";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProperty } from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import moment from "moment/moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { WhatsappShareButton } from "react-share";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const contactValidationSchema = Yup.object({
  name: Yup.string().required("Name Is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "PPhone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

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

  const [isExpandedAbout, setIsExpandedAbout] = useState(false);
  const [showToggleAbout, setShowToggleAbout] = useState(false);
  const aboutRef = useRef(null);

  const pageUrl = window.location.href;

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

  const handleContactClick = () => {
    setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      const message = `Name: ${values.name}%0APhone number: ${values.phone}%0AEmail: ${values.email}%0AProperty Link: ${pageUrl}`;
      const phoneNumber = User_data?.Phone_number;
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
  });

  useEffect(() => {
    const paragraph = aboutRef.current;
    if (paragraph.scrollHeight > paragraph.clientHeight) {
      setShowToggleAbout(true);
    }
  }, [About_the_property, isExpandedAbout]);

  useEffect(() => {
    dispatch(fetchSingleProperty(params.id));
  }, [params.id, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex flex-col gap-y-6 py-6 px-4 xsm:px-10 l:px-30 xl:px-40 p-3">
        <div className="flex justify-between gap-4 text-muted-transparent font-medium text-xs sm:text-sm lg:text-base">
          <p>
            Home / {city} / {Popular_Area} / Property for {looking_to} in {city}
          </p>
          <p>Last Updated: {moment(date).format("ll")}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end">
          <div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-orange-transparent rounded-full cursor-pointer bg-white">
              <WhatsappShareButton url={pageUrl} title={type_of_property}>
                <RiShareFill
                  className="text-orange text-lg md:text-xl lg:text-2xl"
                  title="share Property"
                />
              </WhatsappShareButton>
            </div>
            <p className="text-muted text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              {address}, {city}
            </p>
            <p className="text-muted-transparent text-xs md:text-sm lg:text-base font-medium">
              {Popular_Area} - {pincode}
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-1 md:gap-y-2.5">
            <p className="text-muted font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
              Price ₹{Financials}
            </p>
            {!fromAdmin && (
              <Button
                className="bg-orange text-white py-2 lg:py-3 px-6 lg:px-8 rounded-lg text-xs lg:text-sm cursor-pointer text-nowrap "
                onClick={handleContactClick}
              >
                Contact Developer
              </Button>
            )}
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
                  className={`h-[200px] xsm:h-[300px] lg:h-[400px] xl:h-[500px] w-full object-cover rounded-lg`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={`${BASE_URL}/${image?.[0]}`}
            alt="property"
            className="h-[200px] xsm:h-[300px] lg:h-[400px] xl:h-[500px] w-[80%] mx-auto object-cover rounded-lg"
          />
        )}
      </div>
      <div>
        <div className="flex flex-col gap-y-6 py-6 px-4 xsm:px-10 l:px-30 xl:px-40 p-3">
          <ul className="flex text-center text-[10px] sm:text-xs md:text-base l:text-xl justify-between">
            <li className="px-3 md:px-5 self-center capitalize">
              {Carpet_Area} Carpet Area
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-2 sm:px-3 md:px-5 self-center capitalize">
              {looking_to}
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-2 sm:px-3 md:px-5 self-center capitalize">
              {type_of_property}
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-2 sm:px-3 md:px-5 self-center capitalize">
              Floors No. {blockNumber}
            </li>
            <hr className="border-r border-[#D9D9D9DD] h-16" />
            <li className="px-2 sm:px-3 md:px-5 self-center capitalize">
              Available From {available_From}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#D9D9D9DD] font-medium text-[10px] xsm:text-xs sm:text-sm md:text-base lg:text-xl py-7 px-4 xsm:px-10 l:px-30 xl:px-40 shadow-[0px_4px_10px_0px_#55555540]">
        <div className="flex justify-between gap-4 lg:w-[80%] w-full">
          <a href="#ABOUT">ABOUT</a>
          <a href="#OVERVIEW">OVERVIEW</a>
          <a href="#ADDITIONAL_DETAILS">ADDITIONAL DETAILS</a>
          <a href="#AMENITIES">AMENITIES</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 px-4 xsm:px-10 l:px-30 xl:px-40 py-4.5 w-full bg-[#F8F8F8]">
        <div className="flex-1 lg:w-[62%] md:w-1/2 w-full mb-3 flex flex-col gap-y-5">
          <div id="ABOUT">
            <Card cardClassName={"bg-white"}>
              <p
                className={`lg:text-lg font-semibold py-3 lg:py-5 px-4 xsm:px-7 border-b border-gray `}
              >
                About The Property
              </p>
              <p
                ref={aboutRef}
                className={`text-xs lg:text-sm font-semibold pt-3 lg:pt-5 px-4 xsm:px-7 border-b border-gray capitalize transition-all duration-300 ${
                  isExpandedAbout ? "" : "line-clamp-2"
                }`}
              >
                {About_the_property}
              </p>
              {showToggleAbout && (
                <p
                  className="text-orange text-base font-semibold py-3 lg:py-5 px-4 xsm:px-7 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsExpandedAbout((prev) => !prev)}
                >
                  {isExpandedAbout ? (
                    <>
                      Show Less <MdExpandLess size={20} />
                    </>
                  ) : (
                    <>
                      Read More <MdExpandMore size={20} />
                    </>
                  )}
                </p>
              )}
            </Card>
          </div>
          <div id="OVERVIEW">
            <Card cardClassName={"bg-white"}>
              <p className="lg:text-lg font-semibold py-3 lg:py-5 px-4 xsm:px-7 border-b border-gray">
                Overview
              </p>
              <div className="grid grid-cols-2 py-3 lg:py-5 px-4 xsm:px-7 gap-6">
                {overViewDetails?.map((item) => (
                  <div className="flex flex-col gap-y-1">
                    <p className="text-muted-transparent text-sm lg:text-base font-semibold capitalize">
                      {item.label}
                    </p>
                    <p className="text-sm lg:text-base font-semibold capitalize">
                      {" "}
                      {item.value}
                    </p>
                  </div>
                ))}
                <div className="flex flex-col gap-y-1">
                  <p className="text-muted-transparent text-sm lg:text-base font-semibold capitalize">
                    Suitable For
                  </p>
                  {Property_Suitable_For?.map((item) => (
                    <p className="text-sm lg:text-base font-semibold capitalize">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-muted-transparent text-sm lg:text-base font-semibold capitalize">
                    Water Supply
                  </p>
                  {Type_of_Water_Supply?.map((item) => (
                    <p className="text-sm lg:text-base font-semibold capitalize">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div id="ADDITIONAL_DETAILS">
            <Card cardClassName={"bg-white"}>
              <p className="lg:text-lg font-semibold py-3 lg:py-5 px-4 xsm:px-7 border-b border-gray">
                Additional Details
              </p>
              <div className="grid grid-cols-2 py-3 lg:py-5 px-4 xsm:px-7 gap-6">
                {additionalDetails?.map((item, index) => (
                  <div className="flex flex-col gap-y-1" key={index}>
                    <p className="text-muted-transparent text-sm lg:text-base font-semibold capitalize">
                      {item.label}
                    </p>
                    <p className="text-sm lg:text-base font-semibold capitalize">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div id="AMENITIES">
            <Card cardClassName={"bg-white"}>
              <p className="lg:text-lg font-semibold py-3 lg:py-5 px-4 xsm:px-7 border-b border-gray">
                Amenities
              </p>
              <div className="grid grid-cols-2 py-3 lg:py-5 px-4 xsm:px-7 gap-6">
                {Amenities?.map((label, index) => {
                  const icon = amenitiesIcon[label.toLowerCase()];
                  if (!icon) return null;
                  return (
                    <div className="flex flex-col gap-y-1" key={index}>
                      <div>{icon}</div>
                      <p className="text-sm lg:text-base font-semibold capitalize">
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
          {/* <SimilarPropertiesShowroom
            data={[1, 2, 3, 4, 5, 6]}
            slidesToShow={3}
          /> */}
        </div>
        {!fromAdmin && (
          <div id="contact-form" className="lg:w-[38%] md:w-1/2 w-full mt-5">
            <div className="sticky top-5 right-0 ">
              <Card cardClassName={"bg-white p-5"}>
                <form
                  className="flex flex-col gap-y-5"
                  onSubmit={formik.handleSubmit}
                >
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
                    <div className="flex flex-col gap-y-4">
                      <p className="text-base xsm:text-lg lg:text-xl font-medium">
                        CONTACT SELLER
                      </p>
                      <div className="flex gap-2">
                        <img
                          src={seller_img}
                          alt="seller_img"
                          className="rounded-full w-14 h-14 object-cover border border-black"
                        />
                        <div className="flex flex-col w-full max-w-[80%]">
                          <p className="font-bold text-sm xsm:text-lg lg:text-xl capitalize">
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
                          <label className="text-sm lg:text-base font-medium">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values?.name}
                            placeholder="Enter your name"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-2 lg:p-3 placeholder:text-sm sm:placeholder:text-base"
                          />
                          {formik.touched.name && formik.errors.name && (
                            <span className="text-red-500 text-sm">
                              {formik.errors.name}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <label className="text-sm lg:text-base font-medium">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values?.phone}
                            placeholder="Enter your phone number"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-2 lg:p-3 placeholder:text-sm sm:placeholder:text-base"
                          />
                          {formik.touched.phone && formik.errors.phone && (
                            <span className="text-red-500 text-sm">
                              {formik.errors.phone}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <label className="text-sm lg:text-base font-medium">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values?.email}
                            placeholder="Enter your email"
                            className="w-full focus-visible:outline-0 rounded-xl border border-gray p-2 lg:p-3 placeholder:text-sm sm:placeholder:text-base"
                          />
                          {formik.touched.email && formik.errors.email && (
                            <span className="text-red-500 text-sm">
                              {formik.errors.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                  <ThemeButton
                    title={"Get contact details"}
                    className={"!justify-center !max-w-full"}
                    type="submit"
                  />
                </form>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
