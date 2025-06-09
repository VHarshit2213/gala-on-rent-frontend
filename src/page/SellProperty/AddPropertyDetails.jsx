import React, { useState } from "react";
import { Select, ThemeButton } from "../../components/common";
import { FaChevronLeft } from "react-icons/fa";

const options = [
  { id: "Surat", value: "Surat" },
  { id: "Ahmedabad", value: "Ahmedabad" },
  { id: "Delhi", value: "Delhi" },
  { id: "Mumbai", value: "Mumbai" },
];

const AddPropertyDetails = ({ activeTab, setActiveTab }) => {
  const [select, setSelected] = useState(null);
  return (
    <div>
      <div className="p-15 flex flex-col gap-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaChevronLeft  className="hover:text-orange cursor-pointer" onClick={() => setActiveTab(activeTab - 1)}/> Add Property Details
        </h1>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Address of Property *
            </label>
            <input
              type="text"
              placeholder="Building Name / Plot No, Floor, Road, Area, Landmark, Village or Town , Pin-code"
              className="p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Carpet Area of Property *
            </label>
            <div className="flex gap-1 items-center">
              <input
                type="text"
                placeholder="Enter area"
                className="p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs"
              />
              <div className="w-1/3 pl-4">
                <Select
                  onChange={(val) => setSelected(val)}
                  value={select}
                  defaultText="Square Foot"
                  options={options}
                  listBoxClass="w-full"
                  listButtonClass="md:!text-xl text-sm"
                  className="border border-gray rounded-lg p-[2px]"
                  textClass="text-[14px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Other Area (Open Space / Chaija / Maliya) :
            </label>
            <input
              type="text"
              className="p-2 border border-gray rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Popular Area Search Name :
            </label>
            <Select
              onChange={(val) => setSelected(val)}
              value={select}
              defaultText="select ..."
              options={options}
              listBoxClass="w-full"
              listButtonClass="md:!text-xl text-sm"
              className="border border-gray rounded-lg p-[2px]"
              textClass="text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">Type of Property *</label>
            <Select
              onChange={(val) => setSelected(val)}
              value={select}
              defaultText="select ..."
              options={options}
              listBoxClass="w-full"
              listButtonClass="md:!text-xl text-sm"
              className="border border-gray rounded-lg p-[2px]"
              textClass="text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-base font-medium">
              Property Suitable For: *
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[
                "Factory",
                "Godown",
                "Shop/Store",
                "Office",
                "Hotel",
                "Hospital",
                "Bank",
                "Other(Specify)",
              ]?.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <input
                    type="checkbox"
                    id={`propertySuitableFor-${item}`}
                    className="w-7 h-7 rounded-xl"
                  />
                  <label
                    htmlFor={`propertySuitableFor-${item}`}
                    className="text-base font-medium"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-base font-medium">Type of Power *</label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="Single Phase"
                  className="w-6 h-6 hue-rotate-[163deg]"
                />
                <span className="text-sm">Single Phase</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="Three Phase"
                  className="w-6 h-6 hue-rotate-[163deg]"
                />
                <span className="text-sm">Three Phase</span>
              </label>
            </div>
          </div>
          <div className="flex">
            <label className="text-[14px] font-medium w-1/2">
              If Three Phase, HP(1-6):
            </label>
            <input
              type="text"
              className="p-2 border border-gray rounded-lg w-1/2"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-base font-medium">
              Type of Water Supply:{" "}
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[
                "Society",
                "Muncipaity",
                "Well",
                "Bore Well",
                "None",
                "Other(Specify)",
              ]?.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <input
                    type="checkbox"
                    id={`propertySuitableFor-${item}`}
                    className="w-7 h-7 rounded-xl"
                  />
                  <label
                    htmlFor={`propertySuitableFor-${item}`}
                    className="text-base font-medium"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Number of Washroom :
            </label>
            <input
              type="text"
              className="p-2 border border-gray rounded-lg w-full"
            />
          </div>
        </div>
        <ThemeButton
          title={"Next, add price details"}
          className={"!max-w-full !justify-center"}
          titleClass="!capitalize"
          onClick={() => setActiveTab(activeTab + 1)}
        />
      </div>
    </div>
  );
};

export default AddPropertyDetails;
