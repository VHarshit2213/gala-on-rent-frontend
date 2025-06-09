import React from "react";
import { ThemeButton } from "../../components/common";
import { FaChevronLeft } from "react-icons/fa";

const AddPriceDetails = ({ activeTab, setActiveTab }) => {
  return (
    <div className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        Add Price Details
      </h1>
      <div className="flex flex-col gap-y-1">
        <label className=" text-base font-medium">Financials *</label>
        <input
          type="text"
          placeholder="Expected Rent"
          className="p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs"
        />
      </div>
      <ThemeButton
        title={"Post Property"}
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        onClick={() => setActiveTab(activeTab + 1)}
      />
    </div>
  );
};

export default AddPriceDetails;
