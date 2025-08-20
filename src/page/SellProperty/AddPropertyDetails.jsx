import React from "react";
import { Select, ThemeButton } from "../../components/common";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";
import { cityAreaData, TypeOfProperty } from "../../constants/constant";

// if change or add carpetAreaUnits value also change or add areaUnits variable value
const carpetAreaUnits = [
  { id: "Squre Foot", value: "Squre Foot" },
  { id: "Squre Meter", value: "Squre Meter" },
  { id: "ACRE", value: "ACRE" },
  { id: "Gutha", value: "Gutha" },
  { id: "Other Area", value: "Other Area" },
];
const propertyRegisteredBy = [
  { id: "Local Municipality", value: "Local Municipality" },
  { id: "Rera Registered", value: "Rera Registered" },
  { id: "Gram Panchayat", value: "Gram Panchayat" },
  { id: "MIDC", value: "MIDC" },
  { id: "NA", value: "NA" },
  { id: "Other", value: "Other" },
];

const areaUnits = ["Squre Foot", "Squre Meter", "ACRE", "Gutha", "Other"];

const propertyValidationSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit Indian Pincode"),
  carpetArea: Yup.string().required("Carpet area is required"),
  areaUnit: Yup.string().required("Area unit is required"),
  registeredBy: Yup.string().required("Property Registered By is required"),
  otherArea: Yup.string().required("Other Area is required"),
  popularArea: Yup.string().required("Popular Area is required"),
  propertyType: Yup.string().required("Property Type is required"),
  availableFrom: Yup.string().required("Property available From is required"),
  suitableFor: Yup.array().min(1, "Select at least one option"),
  powerType: Yup.string().required("Please select one option"),
  hp: Yup.string().required("Please enter HP"),
  waterSupply: Yup.array().min(1, "Select at least one option"),
  washrooms: Yup.number()
    .required("Must be a number")
    .min(1, "Must be at least 1")
    .max(3, "Max is 3"),
  about: Yup.string()
    .required("About the Property is required")
    // .test("min-words", "Description must be at least 50 words", (value) => {
    //   if (!value) return true; // Allow empty if not required
    //   const wordCount = value.trim().split(/\s+/).length;
    //   return wordCount >= 50;
    // }),
});

const AddPropertyDetails = ({
  activeTab,
  setActiveTab,
  getProperty,
  propertyId,
}) => {
  const dispatch = useDispatch();
  const {
    address,
    city,
    pincode,
    Carpet_Area,
    registeredBy,
    Other_Area,
    Popular_Area,
    type_of_property,
    Property_Suitable_For,
    Type_of_Power,
    Type_of_Water_Supply,
    Number_of_Washroom,
    available_From,
    About_the_property,
  } = getProperty || [];

  //split carpet area value
  let carpetArea = "";
  let unit = "";

  // Loop to find matching unit at the end of the string
  for (let u of areaUnits) {
    if (Carpet_Area?.endsWith(u)) {
      unit = u;
      carpetArea = Carpet_Area.replace(u, "").trim();
      break;
    }
  }

  //split type of power value
  const parts = Type_of_Power?.split(" ") || [];
  const power = parts.slice(0, 2).join(" "); // "Single Phase" or "Three Phase"
  const hp = parts[2] || "";  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: (getProperty && address) || "",
      popularArea: (getProperty && Popular_Area) || "",
      city: (getProperty && city) || "",
      pincode: (getProperty && pincode) || "",
      carpetArea: (getProperty && carpetArea) || "",
      areaUnit: (getProperty && unit) || "",
      registeredBy: (getProperty && registeredBy) || "",
      otherArea: (getProperty && Other_Area) || "",
      propertyType: (getProperty && type_of_property) || "",
      suitableFor: (getProperty && Property_Suitable_For) || [],
      powerType: (getProperty && power) || "",
      hp: (getProperty && hp) || "",
      waterSupply: (getProperty && Type_of_Water_Supply) || [],
      washrooms: (getProperty && Number_of_Washroom) || "",
      availableFrom: (getProperty && available_From) || "",
      about: (getProperty && About_the_property) || "",
    },
    validationSchema: propertyValidationSchema,
    onSubmit: (values) => {
      const payload = {
        address: values.address,
        city: values.city,
        Popular_Area: values.popularArea,
        pincode: values.pincode,
        Carpet_Area: `${values.carpetArea} ${values.areaUnit}`,
        registeredBy: values.registeredBy,
        Other_Area: values.otherArea,
        type_of_property: values.propertyType,
        Property_Suitable_For: values.suitableFor,
        Type_of_Power: values.hp
          ? `${values.powerType} ${values.hp}`
          : values.powerType,
        Type_of_Water_Supply: values.waterSupply,
        Number_of_Washroom: values.washrooms,
        available_From: values.availableFrom,
        About_the_property: values.about,
      };

      dispatch(appendPropertyDetails(payload));
      setActiveTab(activeTab + 1);
    },
  });

  const cityOptions = Object.keys(cityAreaData).map((city) => ({
    id: city,
    value: city,
  }));

  const areaOptions = formik.values.city
    ? cityAreaData[formik.values.city].map((area) => ({
        id: area,
        value: area,
      }))
    : [];

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 sm:p-6 lg:p-10 l:p-15 flex flex-col gap-6 sm:gap-8 l:gap-10"
      >
        <h1 className="xsm:text-lg sm:text-xl md:text-2xl l:text-3xl font-bold flex items-center gap-2">
          <FaChevronLeft
            className="hover:text-orange cursor-pointer"
            onClick={() => setActiveTab(activeTab - 1)}
          />{" "}
          {propertyId ? "Edit Property Details" : "Add Property Details"}
        </h1>
        <div className="flex flex-col gap-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex flex-col gap-y-1">
              <label className="text-sm lg:text-base font-medium">
                Address of Property *
              </label>
              <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Building Name / Plot No, Floor, Road, Area, Landmark"
                className={`p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-sm lg:text-base font-medium">City *</label>
              <Select
                onChange={(val) => {
                  formik.setFieldValue("city", val?.value || "");
                  formik.setFieldValue("popularArea", "");
                }}
                value={cityOptions.find(
                  (opt) => opt.value === formik.values.city
                )}
                defaultText="Select City"
                options={cityOptions}
                listBoxClass="w-full"
                listButtonClass="md:!text-xl text-sm"
                className={`border rounded-lg p-[2px] ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                textClass="text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-sm lg:text-base font-medium">
                Popular Area Name *
              </label>
              <Select
                onChange={(val) =>
                  formik.setFieldValue("popularArea", val?.value || "")
                }
                value={areaOptions.find(
                  (opt) => opt.value === formik.values.popularArea
                )}
                defaultText="select popular area"
                options={areaOptions}
                disabled={!formik.values.city}
                listBoxClass="w-full"
                listButtonClass="md:!text-xl text-sm"
                className={`border rounded-lg p-[2px] ${
                  formik.touched.popularArea && formik.errors.popularArea
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                textClass="text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-sm lg:text-base font-medium">
                PinCode *
              </label>
              <input
                type="text"
                name="pincode"
                maxLength={6}
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Pincode"
                className={`p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs ${
                  formik.touched.pincode && formik.errors.pincode
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              {formik.values.areaUnit === "Other Area" ? "Carpet Area of Property (Specify Other Unit)" : "Carpet Area of Property"} *
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Enter area"
                name="carpetArea"
                value={formik.values.carpetArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-2 border border-gray rounded-lg w-full sm:w-1/2 lg:w-full placeholder:text-gray placeholder:text-xs ${
                  formik.touched.carpetArea && formik.errors.carpetArea
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <Select
                  onChange={(val) =>
                    formik.setFieldValue("areaUnit", val?.value)
                  }
                  value={carpetAreaUnits.find(
                    (opt) => opt.value === formik.values.areaUnit
                  )}
                  defaultText="Select Carpet Area"
                  options={carpetAreaUnits}
                  listBoxClass="w-full"
                  listButtonClass="md:!text-xl text-sm"
                  className={`border rounded-lg p-[2px] ${
                    formik.touched.areaUnit && formik.errors.areaUnit
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  textClass="text-[14px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              Property Registered By :
            </label>
                <Select
                  onChange={(val) =>
                    formik.setFieldValue("registeredBy", val?.value)
                  }
                  value={propertyRegisteredBy.find(
                    (opt) => opt.value === formik.values.registeredBy
                  )}
                  defaultText="Select Property Registered By"
                  options={propertyRegisteredBy}
                  listBoxClass="w-full"
                  listButtonClass="md:!text-xl text-sm"
                  className={`border rounded-lg p-[2px] ${
                    formik.touched.registeredBy && formik.errors.registeredBy
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  textClass="text-[14px]"
                />
              </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              Other Area (Open Space / Chajja / Maliya) :
            </label>
            <input
              type="text"
              id="otherArea"
              name="otherArea"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.otherArea}
              className={`p-2 border border-gray rounded-lg w-full ${
                formik.touched.otherArea && formik.errors.otherArea
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              Type of Property *
            </label>
            <Select
              onChange={(val) =>
                formik.setFieldValue("propertyType", val?.value || "")
              }
              value={TypeOfProperty.find(
                (opt) => opt.value === formik.values.propertyType
              )}
              defaultText="select property type "
              options={TypeOfProperty}
              listBoxClass="w-full"
              listButtonClass="md:!text-xl text-sm"
              className={`border rounded-lg p-[2px] ${
                formik.touched.propertyType && formik.errors.propertyType
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              textClass="text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              Property Available From :
            </label>
            <input
              type="text"
              id="availableFrom"
              name="availableFrom"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.availableFrom}
              className={`p-2 border border-gray rounded-lg w-full ${
                formik.touched.availableFrom && formik.errors.availableFrom
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm lg:text-base font-medium">
              Property Suitable For: *
            </label>
            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
                    name="suitableFor"
                    value={item}
                    checked={formik.values.suitableFor.includes(item)}
                    onChange={formik.handleChange}
                    className="w-5 h-5 lg:w-7 lg:h-7 rounded-xl"
                  />
                  <label
                    htmlFor={`propertySuitableFor-${item}`}
                    className="text-sm lg:text-base font-medium"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.suitableFor && formik.errors.suitableFor && (
              <div className="text-red-500 text-sm">
                {formik.errors.suitableFor}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm lg:text-base font-medium">
              Type of Power *
            </label>
            <div className="flex flex-col xsm:flex-row xsm:items-center gap-2 xsm:gap-4">
              {["Single Phase", "Three Phase"].map((power) => (
                <label
                  key={power}
                  className="inline-flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="powerType"
                    value={power}
                    checked={formik.values.powerType === power}
                    onChange={formik.handleChange}
                    className="w-6 h-6 hue-rotate-[163deg]"
                  />
                  <span className="text-sm">{power}</span>
                </label>
              ))}
            </div>
            {formik.touched.powerType && formik.errors.powerType && (
              <p className="text-red-500 text-sm">{formik.errors.powerType}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row">
            <label className="text-[14px] font-medium sm:w-1/2">
              If {formik.values.powerType || "Three Phase"}, HP :
              {/* ({formik.values.powerType === "Single Phase" ? "1-5" : "1-100"}): */}
            </label>
            <input
              type="number"
              name="hp"
              min={1}
              // max={formik.values.powerType === "Single Phase" ? 5 : 100}
              value={formik.values.hp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-2 border rounded-lg w-full ${
                formik.touched.hp && formik.errors.hp
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm lg:text-base font-medium">
              Type of Water Supply:{" "}
            </label>
            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Society",
                "Municipality",
                "Well",
                "Bore Well",
                "None",
                "Other(Specify)",
              ]?.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <input
                    type="checkbox"
                    name="waterSupply"
                    value={item}
                    checked={formik.values.waterSupply.includes(item)}
                    onChange={formik.handleChange}
                    id={`propertySuitableFor-${item}`}
                    className="w-5 h-5 lg:w-7 lg:h-7 rounded-xl"
                  />
                  <label
                    htmlFor={`propertySuitableFor-${item}`}
                    className="text-sm lg:text-base font-medium"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.waterSupply && formik.errors.waterSupply && (
              <div className="text-red-500 text-sm">
                {formik.errors.waterSupply}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              Number of Washroom :
            </label>
            <input
              type="number"
              name="washrooms"
              min={1}
              max={3}
              onChange={formik.handleChange}
              value={formik.values.washrooms}
              className={`p-2 border rounded-lg w-full ${
                formik.touched.washrooms && formik.errors.washrooms
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm lg:text-base font-medium">
              About The Property ( Like other structure details / location /
              near to ) :
            </label>
            <textarea
              id="about"
              name="about"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.about}
              className={`p-2 border border-gray rounded-lg w-full ${
                formik.touched.about && formik.errors.about
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.about && formik.errors.about && (
              <div className="text-red-500 text-sm">{formik.errors.about}</div>
            )}
          </div>
        </div>
        <ThemeButton
          title={
            propertyId ? "Next, Edit price details" : "Next, add price details"
          }
          className={
            "!max-w-full !justify-center !text-xs xsm:!text-sm lg:!text-base"
          }
          titleClass="!capitalize"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPropertyDetails;
