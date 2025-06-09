import React from "react";
import Property from "../../assets/Property/Property.png";
import squareMeters from "../../assets/Home/squareMeters.png";
import { Card, CardBody, CardFooter } from "../../components/common";
import { FaRegHeart } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";

const PropertyList = () => {
  return (
    <div className="p-15 space-y-6">
      {[1, 2, 3, 4, 5, 6]?.map((item) => (
        <Card cardClassName="bg-white rounded-lg overflow-hidden border border-[#F0EFFB] max-w-250 w-full">
          <div className="py-2 px-5 border-b-1 border-b-gray flex justify-between">
            <p className="text-muted-transparent text-sm ">ID:1000040123</p>
            <div className="text-orange flex gap-6 text-sm font-bold ">
              <button className="cursor-pointer">Share</button>
              <button className="cursor-pointer">Delete</button>
              <button className="cursor-pointer">Edit</button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 h-[255px]">
              <img src={Property} className="w-full h-full" />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <CardBody>
                <div className="p-6 flex flex-col gap-y-1">
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
                  <div className="text-muted flex flex-col gap-y-2">
                    <h2 className="font-bold text-2xl">Palm Harbor</h2>
                    <p className="opacity-50 text-sm">
                      2699 Green Valley, Highland Lake, FL
                    </p>
                  </div>
                </div>
              </CardBody>
              <hr className="border-b-0 border-[#F0EFFB]" />
              <CardFooter footerClassName="flex justify-between items-center p-6">
                <div className="flex gap-2 text-muted">
                  <img src={squareMeters} />
                  <span className="opacity-50 text-sm">5,000 sq.ft.</span>
                </div>
                <div className="p-3 rounded-50 border border-orange bg-orange-transparent">
                  <GrLinkNext className="text-orange" />
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PropertyList;
