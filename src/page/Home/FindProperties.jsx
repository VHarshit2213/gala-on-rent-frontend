import React from "react";
import { Button, Title } from "../../components/common";
import Mumbai from "./../../assets/Home/Mumbai.jpg";
import pune from "./../../assets/Home/pune.jpg";
import thane from "./../../assets/Home/thane.jpg";
import nagpur from "./../../assets/Home/nagpur.avif";
import sellKey from "./../../assets/Home/sellKey.png";
import sellPropertyKey from "./../../assets/Home/sellPropertyKey.png";
import sellProperty from "./../../assets/Home/sellProperty.png";
import { setPropertyType } from "../../reducer/propertyType/redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilteredProperties } from "../../reducer/properties/thunk";
import { toast } from "react-toastify";

const Image = ({ src, title, imageClass, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative overflow-clip h-[100px] xsm:h-[150px] sm:h-[200px] md:h-[300px] lg:h-[350px] xxl:h-[450px] w-full rounded-xl cursor-pointer"
    >
      <img
        src={src}
        alt={src}
        className={`${imageClass} w-full h-full object-cover transition-transform duration-500 ease-in-out hover:[transform:rotate(-3deg)_scale(1.1)]`}
      />
      <div className="absolute h-1/2 top-1/2 inset-0 bg-gradient-to-t from-[#FFEEE0]/50 to-transparent"></div>
      <div className="absolute bottom-2 xsm:bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center">
        <h4 className="text-white font-semibold text-[10px] sm:text-sm md:text-xl text-nowrap">
          {title}
        </h4>
      </div>
    </div>
  );
};
const FindProperties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCityClick = async (city) => {
    try {
      await dispatch(fetchFilteredProperties({ city })).unwrap();
      navigate(`/search-property?city=${city}`);
    } catch (error) {
      toast.error(`No properties found in ${city}`);
    }
  };

  return (
    <>
      <div className="my-8 xsm:my-15 flex flex-col gap-7.5 px-4 xsm:px-10 l:px-20 xl:px-32">
        <Title
          title="Find Properties in"
          highlightTitle="These Cities"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="grid grid-cols-3 gap-2 sm:gap-4 l:gap-8">
          <div className="col-span-1">
            <Image
              src={Mumbai}
              title={"Mumbai"}
              onClick={() => handleCityClick("Mumbai")}
            />
          </div>
          <div className="col-span-2">
            <Image
              src={pune}
              title={"Pune"}
              onClick={() => handleCityClick("Pune")}
            />
          </div>
          <div className="col-span-2">
            <Image
              src={thane}
              title={"Thane"}
              onClick={() => handleCityClick("Thane")}
            />
          </div>
          <div className="col-span-1">
            <Image
              src={nagpur}
              title={"Nagpur"}
              onClick={() => handleCityClick("Nagpur")}
            />
          </div>
        </div>
      </div>
      <div className="pt-0 pb-0 flex flex-col gap-2 lg:gap-7.5 w-full px-4 xsm:px-10 l:px-20 xl:px-32">
        <Title title="Have a property" highlightTitle="to sell?" />
        <div className="flex justify-between lg:border border-gray rounded-[30px] h-fit">
          <div className="relative h-50 hidden lg:block">
            <img src={sellKey} className="relative z-50" />
            <img
              src={sellPropertyKey}
              className="relative z-10 bottom-32.5 left-5"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center text-center items-center mx-auto">
            <p className="text-base xsm:text-lg sm:text-xl md:text-2xl">
              List your property & connect with clients faster!
            </p>
            <Button
              className="text-orange border border-orange font-semibold p-2 py-2.5 max-w-[300px] w-full rounded-lg text-base cursor-pointer"
              onClick={() => {
                dispatch(setPropertyType("sell"));
                navigate("/signup");
              }}
            >
              Sell your property
            </Button>
          </div>
          <div className="hidden lg:block">
            <img src={sellProperty} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindProperties;
