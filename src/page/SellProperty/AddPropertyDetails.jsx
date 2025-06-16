import React from "react";
import { Select, ThemeButton } from "../../components/common";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch} from "react-redux";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";

const popularArea = [
  { id: "Mumbai", value: "Mumbai" },
  { id: "Borivali West", value: "Borivali West" },
  { id: "LT Road", value: "LT Road" },
];

const TypeOfProperty = [
  { id: "land", value: "open land ( with out boundry)" },
  { id: "plot", value: "open plot (with boundry)" },
  { id: "gala", value: "gala" },
  { id: "commercial", value: "commercial" },
  { id: "shop", value: "shop" },
  { id: "commercial office", value: "commercial office" },
];

const carpetAreaUnits = [
  { id: "Squre Foot", value: "Squre Foot" },
  { id: "Squre Meter", value: "Squre Meter" },
  { id: "ACRE", value: "ACRE" },
  { id: "Gutha", value: "Gutha" },
  { id: "Other", value: "Other" },
];

const propertyValidationSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  carpetArea: Yup.string().required("Carpet area is required"),
  areaUnit: Yup.string().required("Area unit is required"),
  otherArea: Yup.string().required("Other Area is required"),
  popularArea: Yup.string().required("Popular Area is required"),
  propertyType: Yup.string().required("Property Type is required"),
  suitableFor: Yup.array().min(1, "Select at least one option"),
  powerType: Yup.string().required("Please select one option"),
  hp: Yup.number().when("powerType", {
    is: (val) => val === "Three Phase",
    then: (schema) =>
      schema
        .required("Please enter HP if Three Phase is selected")
        .min(1)
        .max(6),
    otherwise: (schema) => schema.notRequired(),
  }),
  waterSupply: Yup.array().min(1, "Select at least one option"),
  washrooms: Yup.number()
    .required("Must be a number")
    .min(1, "Must be at least 1")
    .max(3, "Max is 3"),
});

const AddPropertyDetails = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  // const [select, setSelected] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: "",
      carpetArea: "",
      areaUnit: "",
      otherArea: "",
      popularArea: "",
      propertyType: "",
      suitableFor: [],
      powerType: "",
      hp: "",
      waterSupply: [],
      washrooms: "",
    },
    validationSchema: propertyValidationSchema,
    onSubmit: (values) => {
      const payload = {
        address: values.address,
        Carpet_Area: `${values.carpetArea} ${values.areaUnit}`,
        Other_Area: values.otherArea,
        Popular_Area: values.popularArea,
        type_of_property: values.propertyType,
        Property_Suitable_For: values.suitableFor,
        Type_of_Power: values.hp
          ? `${values.powerType} ${values.hp}`
          : values.powerType,
        Type_of_Water_Supply: values.waterSupply,
        Number_of_Washroom: values.washrooms,
      };

      dispatch(appendPropertyDetails(payload));
      setActiveTab(activeTab + 1);
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="p-15 flex flex-col gap-10"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaChevronLeft
            className="hover:text-orange cursor-pointer"
            onClick={() => setActiveTab(activeTab - 1)}
          />{" "}
          Add Property Details
        </h1>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
              Address of Property *
            </label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Building Name / Plot No, Floor, Road, Area, Landmark, Village or Town , Pin-code"
              className={`p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
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
                name="carpetArea"
                value={formik.values.carpetArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`p-2 border border-gray rounded-lg w-full placeholder:text-gray placeholder:text-xs ${
                  formik.touched.carpetArea && formik.errors.carpetArea
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <div className="w-1/3 pl-4">
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
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
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
            <label className=" text-base font-medium">
              Popular Area Search Name :
            </label>
            <Select
              onChange={(val) =>
                formik.setFieldValue("popularArea", val?.value || "")
              }
              value={popularArea.find(
                (opt) => opt.value === formik.values.popularArea
              )}
              defaultText="select popular area"
              options={popularArea}
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
            <label className=" text-base font-medium">Type of Property *</label>
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
                    name="suitableFor"
                    value={item}
                    checked={formik.values.suitableFor.includes(item)}
                    onChange={formik.handleChange}
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
            {formik.touched.suitableFor && formik.errors.suitableFor && (
              <div className="text-red-500 text-sm">
                {formik.errors.suitableFor}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-base font-medium">Type of Power *</label>
            <div className="flex items-center gap-4">
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
          <div className="flex">
            <label className="text-[14px] font-medium w-1/2">
              If Three Phase, HP(1-6):
            </label>
            <input
              type="number"
              name="hp"
              min={1}
              max={6}
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
            <label className=" text-base font-medium">
              Type of Water Supply:{" "}
            </label>
            <div className="grid grid-cols-4 gap-3">
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
            {formik.touched.waterSupply && formik.errors.waterSupply && (
              <div className="text-red-500 text-sm">
                {formik.errors.waterSupply}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-1">
            <label className=" text-base font-medium">
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
        </div>
        <ThemeButton
          title={"Next, add price details"}
          className={"!max-w-full !justify-center"}
          titleClass="!capitalize"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPropertyDetails;
