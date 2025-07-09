import { PiKeyBold } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Card, Tabs, Tab, Title } from "../../components/common";
import maskGroup from "../../assets/Home/maskGroup.png";
import squareMeters from "../../assets/Home/squareMeters.png";
import popular from "../../assets/Home/popular.png";
import {
  CardBody,
  CardFooter,
  ThemeButton,
} from "../../components/common/Components";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/common/Spinner";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const TabContent = ({ allProperty, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {allProperty && allProperty?.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-8 mb-8">
          {allProperty.map((property, index) => {
            const {
              _id,
              image,
              Financials,
              address,
              city,
              Popular_Area,
              pincode,
              Carpet_Area,
              type_of_property,
            } = property;
            return (
              <Card
                key={_id}
                cardClassName="bg-white w-full rounded-lg border border-[#F0EFFB] cursor-pointer"
                onClick={() => {
                  navigate(`/property-details/${_id}`);
                }}
              >
                <div className="relative">
                  {index < 3 && (
                    <div className="absolute -bottom-9 -translate-y-1/2 left-[-3%] bg-orange text-white flex justify-start items-center gap-2 uppercase text-sm font-semibold p-2 rounded-tl-lg rounded-r-lg">
                      <div className="absolute top-9 -left-0 w-0 h-0 border-b-[10px] border-l-transparent border-l-[10px] border-b-[#934300] rotate-[271deg]"></div>
                      <img src={popular} alt="Popular" /> popular
                    </div>
                  )}
                  <img
                    src={`${BASE_URL}/${image?.[0]}`}
                    className="w-full h-[250px] rounded-tr-lg rounded-tl-lg"
                    alt="Property"
                  />
                </div>
                <CardBody>
                  <div className="p-6 flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-end gap-1">
                        <span className="text-orange text-xl font-semibold">
                          ₹{Financials}
                        </span>
                        <span className="text-muted opacity-50 font-medium">
                          /month
                        </span>
                      </div>
                      <div className="p-3 md:p-3.5 rounded-50 border border-[#e56c064d]">
                        <FaRegHeart className="text-orange text-lg md:text-xl" />
                      </div>
                    </div>
                    <div className="text-muted flex flex-col gap-y-3 h-[100px]">
                      <h2 className="font-bold text-xl md:text-2xl capitalize">
                        {type_of_property}
                      </h2>
                      <p className="opacity-50 text-sm capitalize line-clamp-3">
                        {address}, {city}, {Popular_Area} - {pincode}
                      </p>
                    </div>
                  </div>
                  <hr className="border-b-0 border-[#F0EFFB]" />
                </CardBody>
                <CardFooter footerClassName="flex justify-between items-center p-6">
                  <div className="flex gap-2 text-muted">
                    <img src={squareMeters} alt="Square Meters" />
                    <span className="opacity-50 text-sm">{Carpet_Area}</span>
                  </div>
                  <div className="p-3 rounded-50 border border-orange bg-orange-transparent">
                    <GrLinkNext className="text-orange" />
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-2xl py-10">
          No properties found.
        </p>
      )}
    </>
  );
};
const BasedOnLocation = ({ allProperty, loading }) => {
  return (
    <div className="mt-8 xsm:mt-15 bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF] flex flex-col gap-[30px] xsm:gap-[50px] px-4 xsm:px-10 l:px-20 xl:px-32">
      <Title
        title="Based on your"
        highlightTitle="location"
        description="Some of our picked properties near you location."
      />
      <TabContent allProperty={allProperty} loading={loading} />
      {/* <Tabs
        defaultActive="Office"
        className="gap-6 xsm:gap-11 flex flex-col text-sm xsm:text-base"
        tabClassName="border-2 border-[#E0DEF7] bg-[#F7F7F7] rounded-lg p-2 flex gap-4 items-center max-w-fit w-full"
        tabButton="flex gap-2 items-center text-[#807DA8] p-2 rounded-lg"
        active="text-orange border-2 px-3 border-[#E0DEF7] bg-white"
      >
        <Tab
          eventKey="Office"
          title={
            <>
              <PiKeyBold /> Office
            </>
          }
        >
          <TabContent allProperty={allProperty} loading={loading} />
        </Tab>
        <Tab
          eventKey="Industrial Area"
          title={
            <>
              <RiHomeLine /> Industrial Area
            </>
          }
        >
          <TabContent allProperty={allProperty} loading={loading} />
        </Tab>
      </Tabs> */}
      {/* {allProperty && allProperty?.length > 0 && (
        <ThemeButton
          title={"Browse more properties"}
          className={"!pl-5 mb-8"}
        />
      )} */}
    </div>
  );
};

export default BasedOnLocation;
