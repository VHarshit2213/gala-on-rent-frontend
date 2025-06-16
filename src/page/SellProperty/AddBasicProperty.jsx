import { useDispatch } from "react-redux";
import { Button, ThemeButton } from "../../components/common/index";
import React from "react";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";

const BasicProperty = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();

  const [propertyType, setPropertyType] = React.useState("Owner");
  const [lookingTo, setLookingTo] = React.useState("Rent");

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
    <div className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Add Basic Details</h1>
      <div className="flex flex-col gap-y-3">
        <p className="text-muted-transparent text-base font-normal">
          Property Belongs To
        </p>
        <div className="flex gap-13">
          <Button
            className={`${
              propertyType === "Owner"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } max-w-[192px] w-full h-15 rounded-lg p-2 border border-gray`}
            onClick={() => setPropertyType("Owner")}
          >
            {" "}
            Owner{" "}
          </Button>
          <Button
            className={`${
              propertyType === "Friends / Family"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } max-w-[192px] w-full h-15 rounded-lg p-2 border border-gray`}
            onClick={() => setPropertyType("Friends / Family")}
          >
            {" "}
            Friends / Family{" "}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-muted-transparent text-base font-normal">
          Looking to
        </p>
        <div className="flex gap-13">
          <Button
            className={`${
              lookingTo === "Rent"
                ? "bg-[#E56C0633] text-orange"
                : "bg-transparent"
            } max-w-[192px] w-full h-15 rounded-lg p-2 border border-gray`}
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
            } max-w-[192px] w-full h-15 rounded-lg p-2 border border-gray`}
            onClick={() => setLookingTo("Sell")}
          >
            {" "}
            Sell{" "}
          </Button>
        </div>
      </div>
      <ThemeButton
        title={"Next, add property details"}
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        onClick={handleAddPropertyDetails}
      />
    </div>
  );
};

export default BasicProperty;
