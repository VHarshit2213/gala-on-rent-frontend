import React from "react";
import { ThemeButton } from "../../components/common";
import { BiCctv } from "react-icons/bi";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import row_oil from "../../assets/Property/row-oil.png";
import { FaChevronLeft } from "react-icons/fa";

const AddAmenities = ({ activeTab, setActiveTab }) => {
  return (
    <div className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />
        Add Amenities
      </h1>
      <div className="flex gap-6">
        <div className="border border-[#D9D9D9DD] rounded-xl w-30 h-30 flex flex-col justify-center items-center">
          <BiCctv size={25} />
          <span className="font-medium text-sm">CCTV</span>
        </div>
        <div className="border border-[#D9D9D9DD] rounded-xl w-30 h-30 flex flex-col justify-center items-center">
          <img src={row_oil} alt="row_oil" className="w-6" />
          <span className="font-medium text-sm">Water Storage</span>
        </div>
        <div className="border border-[#D9D9D9DD] rounded-xl w-30 h-30 flex flex-col justify-center items-center">
          <LiaFireExtinguisherSolid size={25} />
          <span className="font-medium text-[15px] text-center flex flex-wrap">
            Fire extinguishers{" "}
          </span>
        </div>
      </div>
      <ThemeButton
        title={"Continue"}
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        onClick={() => setActiveTab(activeTab + 1)}
      />
    </div>
  );
};

export default AddAmenities;
