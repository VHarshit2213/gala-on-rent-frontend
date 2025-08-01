import { useDispatch } from "react-redux";
import { Button, ThemeButton } from "../../components/common/index";
import React from "react";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";

const BasicProperty = ({
  activeTab,
  setActiveTab,
  getProperty,
  propertyId,
}) => {
  const dispatch = useDispatch();

  const raw = getProperty?.property_belongsTo;
  const displayText = raw?.replace(/&#x2F;/g, "/");

  const [propertyType, setPropertyType] = React.useState(
    displayText || "My Self"
  );
  const [lookingTo, setLookingTo] = React.useState(
    getProperty?.looking_to || "Rent"
  );

  const handleAddPropertyDetails = () => {
    dispatch(
      appendPropertyDetails({
        property_belongsTo: propertyType,
        looking_to: lookingTo,
      })
    );
    setActiveTab(activeTab + 1);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 l:p-15 flex flex-col gap-6 sm:gap-8 l:gap-10">
      <h1 className="xsm:text-lg sm:text-xl md:text-2xl l:text-3xl font-bold">
        {propertyId ? "Edit Basic Details" : "Add Basic Details"}
      </h1>
      <div className="flex flex-col gap-y-3">
        <p className="text-muted-transparent text-sm md:text-base font-normal">
          Property Belongs To
        </p>
        <div className="flex gap-4 sm:gap-8 lg:gap-13">
          {/* <Button
            className={`${
              propertyType === "Owner"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setPropertyType("Owner")}
          >
            {" "}
            Owner{" "}
          </Button> */}
          <Button
            className={`${
              propertyType === "My Self"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setPropertyType("My Self")}
          >
            My Self
          </Button>
          <Button
            className={`${
              propertyType === "I Am Agent"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setPropertyType("I Am Agent")}
          >
            I Am Agent
          </Button>
          <Button
            className={`${
              propertyType === "Friends / Family"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setPropertyType("Friends / Family")}
          >
            {" "}
            Friends / Family{" "}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-muted-transparent text-sm md:text-base font-normal">
          Looking to
        </p>
        <div className="flex gap-4 sm:gap-8 lg:gap-13">
          <Button
            className={`${
              lookingTo === "Rent"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setLookingTo("Rent")}
          >
            {" "}
            Rent{" "}
          </Button>
          <Button
            className={`${
              lookingTo === "Sell"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } w-[100px] sm:w-[150px] lg:w-[192px] h-12 md:h-15 rounded-lg p-2 border border-gray text-xs sm:text-sm lg:text-base`}
            onClick={() => setLookingTo("Sell")}
          >
            {" "}
            Sell{" "}
          </Button>
        </div>
      </div>
      <ThemeButton
        title={
          propertyId ? "Update Basic Details" : "Next, add property details"
        }
        className={
          "!max-w-full !justify-center !text-xs xsm:!text-sm lg:!text-base"
        }
        titleClass="!capitalize"
        onClick={handleAddPropertyDetails}
      />
    </div>
  );
};

export default BasicProperty;
