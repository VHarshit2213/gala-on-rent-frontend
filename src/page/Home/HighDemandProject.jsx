import React, { useEffect, useState } from "react";
import { Card, Title } from "../../components/common";
import {
  Button,
  CardBody,
  ThemeButton,
} from "../../components/common/Components";
import highDemandProject from "../../assets/Home/highDemandProject.jpg";
import highDemandProjectBg from "../../assets/Home/highDemandProjectBg.jpg";
import HighDemandProjectImage from "../../assets/Home/HighDemandProjectImage.jpg";
import illustration from "../../assets/Home/Illustration.png";
import propertyIcon from "../../assets/Home/propertyIcon.png";
import insurance from "../../assets/Home/insurance.png";
import dollar from "../../assets/Home/dollar.png";
import modulor from "../../assets/Home/modulor.png";
import dollar1 from "../../assets/Home/dollar1.png";
import modulor1 from "../../assets/Home/modulor1.png";
import home1 from "../../assets/Home/home1.png";
import location1 from "../../assets/Home/location1.png";
import Spinner from "../../components/common/Spinner";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const HighDemandProject = ({ allProperty, loading }) => {
  const navigate = useNavigate();

  const [randomProperties, setRandomProperties] = useState([]);

  useEffect(() => {
    if (allProperty && allProperty.length > 0) {
      const shuffled = [...allProperty].sort(() => 0.5 - Math.random());
      setRandomProperties(shuffled.slice(0, 6));
    }
  }, [allProperty]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        className="py-8 xsm:py-16 flex flex-col gap-[30px] xsm:gap-y-12.5 px-4 xsm:px-10 l:px-20 xl:px-32 bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF]"
        // style={{ background: `url(${highDemandProjectBg})` }}
      >
        <Title
          title="High-demand"
          highlightTitle="Project"
          description="Leading project in high demand"
        />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
          {randomProperties?.map((property) => {
            const {
              image,
              _id,
              type_of_property,
              User_data,
              address,
              Popular_Area,
              city,
              Financials,
            } = property;

            return (
              <Card
                cardClassName="w-full border border-gray rounded-lg overflow-clip cursor-pointer"
                key={_id}
                onClick={() => {
                  navigate(`/property-details/${_id}`);
                }}
              >
                <CardBody>
                  <div className="flex h-[172px]">
                    <img
                      src={`${BASE_URL}/${image?.[0]}`}
                      className="w-1/2 xl:w-[200px] h-[172px]"
                    />
                    <div className="text-muted flex flex-col justify-center gap-y-2.5 p-3">
                      <div>
                        <p className="font-semibold text-sm xsm:text-base capitalize">
                          {type_of_property}
                        </p>
                        <p className="font-light text-[11px] text-muted-transparent">
                          by {User_data?.person_name}
                        </p>
                      </div>
                      <div>
                        <p className="font-normal text-[10px] xsm:text-[13px]">
                          {address}
                        </p>
                        <p className="font-light text-[11px] text-muted-transparent">
                          {Popular_Area} , {city}
                        </p>
                      </div>
                      <p className="font-medium xsm:text-xl text-base">
                        Price{" "}
                        <span className="text-orange xsm:text-xl text-base font-semibold">
                          ₹{Financials}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="relative px-4 xsm:px-10 l:px-20 xl:px-32 py-8 xsm:py-15 w-full auto overflow-x-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-[0.15]"
          style={{ backgroundImage: `url(${HighDemandProjectImage})` }}
        ></div>

        <div className="relative z-10 grid grid-cols-9 2xl:gap-18 xl:gap-16 sm:gap-10 gap-5">
          <div className="flex flex-col border border-orange rounded-lg p-5 lg:col-span-3 md:col-span-5 col-span-9">
            <div className="pr-5 flex flex-col justify-start gap-3 sm:gap-4">
              <p className="text-orange font-semibold text-xl xsm:text-2xl sm:text-3xl">
                The new way to find your new home
              </p>
              <p className="text-[#757F95] font-normal text-sm opacity-70">
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
              <ThemeButton
                className="!max-w-[200px] !justify-center gap-2 !mx-0 whitespace-nowrap"
                title="Discover More "
              />
            </div>
            <img
              src={illustration}
              alt="illustration"
              className="max-w-[324px] w-full"
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap md:flex-col flex-row gap-5 md:gap-16 lg:col-span-3 md:col-span-4 col-span-9">
            <div className="flex flex-col gap-6">
              <div className="border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative">
                <img
                  src={propertyIcon}
                  className="absolute rounded-full border-4 border-white p-3 bg-orange-transparent"
                />
                <img
                  src={insurance}
                  className="absolute -right-[5px] -bottom-[1px]"
                />
              </div>
              <div className="flex flex-col gap-2 xsm:gap-3 sm:gap-4">
                <p className="text-orange font-semibold text-lg xsm:text-xl sm:text-2xl">
                  Property Insurance
                </p>
                <p className="text-gray-600 text-base font-normal opacity-70 pr-5">
                  We offer our customer property protection of liability
                  coverage and insurance for their better life.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative">
                <img
                  src={modulor}
                  className="absolute rounded-full border-4 border-white p-3 bg-orange-transparent"
                />
                <img
                  src={dollar}
                  className="absolute -right-[5px] -bottom-[1px]"
                />
              </div>
              <div className="flex flex-col gap-2 xsm:gap-3 sm:gap-4">
                <p className="text-orange font-semibold text-lg xsm:text-xl sm:text-2xl">
                  Lowest Commission
                </p>
                <p className="text-gray-600 text-base font-normal opacity-70  pr-5">
                  You no longer have to negotiate commissions and haggle with
                  other agents it only cost 2%!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap lg:flex-col flex-row gap-5 md:gap-16 lg:col-span-3 md:col-span-9 col-span-9">
            <div className="flex flex-col gap-6">
              <div className="border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative">
                <img
                  src={dollar1}
                  className="absolute rounded-full border-4 border-white p-3 bg-orange-transparent"
                />
                <img
                  src={modulor1}
                  className="absolute -right-[5px] -bottom-[1px]"
                />
              </div>
              <div className="flex flex-col gap-2 xsm:gap-3 sm:gap-4">
                <p className="text-orange font-semibold text-lg xsm:text-xl sm:text-2xl">Best Price</p>
                <p className="text-gray-600 text-base font-normal opacity-70  pr-5">
                  Not sure what you should be charging for your property? No
                  need to worry, let us do the numbers for you.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative">
                <img
                  src={location1}
                  className="absolute rounded-full border-4 border-white p-3 bg-orange-transparent"
                />
                <img
                  src={home1}
                  className="absolute -right-[5px] -bottom-[1px]"
                />
              </div> 
              <div className="flex flex-col gap-2 xsm:gap-3 sm:gap-4">
                <p className="text-orange font-semibold text-lg xsm:text-xl sm:text-2xl">
                  Overall Control
                </p>
                <p className="text-gray-600 text-base font-normal opacity-70  pr-5">
                  Get a virtual tour, and schedule visits before you rent or buy
                  any properties. You get overall control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighDemandProject;
