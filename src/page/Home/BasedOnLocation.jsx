import React from "react";
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

const TabContent = () => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {[1, 2, 3, 4, 5, 6]?.map((item) => (
        <Card
          cardClassName="bg-white w-full rounded-lg border border-[#F0EFFB] cursor-pointer"
          onClick={() => navigate("/property-details")}
        >
          <div className="relative">
            {[1, 2, 3]?.includes(item) && (
              <div
                className={`absolute -bottom-9 -translate-y-1/2 left-[-3%] bg-orange text-white flex justify-start items-center gap-2 uppercase text-sm font-semibold p-2 rounded-tl-lg rounded-r-lg`}
              >
                <div className="absolute top-9 -left-0 w-0 h-0 border-b-[10px] border-l-transparent border-l-[10px] border-b-[#934300] rotate-[271deg]"></div>
                <img src={popular} /> popular
              </div>
            )}
            <img src={maskGroup} className="w-full" />
          </div>
          <CardBody>
            <div className="p-6 flex flex-col gap-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-end gap-1">
                  <span className="text-orange text-xl font-semibold">
                    $2,095
                  </span>
                  <span className="text-muted opacity-50 font-medium">
                    /month
                  </span>
                </div>
                <div className="p-3.5 rounded-50 border border-[#e56c064d]">
                  <FaRegHeart size={20} className="text-orange" />
                </div>
              </div>
              <div className="text-muted flex flex-col gap-y-1">
                <h2 className="font-bold text-2xl">Palm Harbor</h2>
                <p className="opacity-50 text-sm">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </div>
            <hr className="border-b-0 border-[#F0EFFB]" />
          </CardBody>
          <CardFooter footerClassName="flex justify-between items-center p-6">
            <div className="flex gap-2 text-muted">
              <img src={squareMeters} />
              <span className="opacity-50 text-sm">5,000 sq.ft.</span>
            </div>
            <div className="p-3 rounded-50 border border-orange bg-orange-transparent">
              <GrLinkNext className="text-orange" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
const BasedOnLocation = () => {
  return (
    <div className="mt-15 bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF] flex flex-col gap-[50px] px-20">
      <Title
        title="Based on your"
        highlightTitle="location"
        description="Some of our picked properties near you location."
      />
      <Tabs
        defaultActive="Office"
        className="gap-11 flex flex-col"
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
          <TabContent />
        </Tab>
        <Tab
          eventKey="Industrial Area"
          title={
            <>
              <RiHomeLine /> Industrial Area
            </>
          }
        >
          <TabContent />
        </Tab>
      </Tabs>
      <ThemeButton title={"Browse more properties"} className={"!pl-5"} />
    </div>
  );
};

export default BasedOnLocation;
