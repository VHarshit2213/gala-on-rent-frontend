import React from "react";
import { ThemeButton } from "../../components/common";
import { BiCctv } from "react-icons/bi";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import row_oil from "../../assets/Property/row-oil.png";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";

const amenities = [
  { id: "cctv", label: "CCTV", icon: <BiCctv size={25} /> },
  {
    id: "water storage",
    label: "Water Storage",
    icon: <img src={row_oil} alt="row_oil" className="w-6" />,
  },
  {
    id: "fire extinguishers",
    label: "Fire Extinguishers",
    icon: <LiaFireExtinguisherSolid size={25} />,
  },
];

const AddAmenities = ({ activeTab, setActiveTab, getProperty, propertyId }) => {
  const dispatch = useDispatch();
  const { Amenities } = getProperty || [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Amenities: (getProperty && Amenities) || [],
    },
    validationSchema: Yup.object({
      Amenities: Yup.array().min(1, "Please select at least one amenity."),
    }),
    onSubmit: (values) => {
      dispatch(appendPropertyDetails(values));
      setActiveTab(activeTab + 1);
    },
  });

  const toggleAmenity = (id) => {
    const selected = formik.values.Amenities;
    if (selected.includes(id)) {
      formik.setFieldValue(
        "Amenities",
        selected.filter((amenity) => amenity !== id)
      );
    } else {
      formik.setFieldValue("Amenities", [...selected, id]);
    }
    if (!formik.touched.Amenities) {
      formik.setFieldTouched("Amenities", true);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 sm:p-6 lg:p-10 l:p-15 flex flex-col gap-6 sm:gap-8 l:gap-10">
      <h1 className="xsm:text-lg sm:text-xl md:text-2xl l:text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />
        {propertyId ? "Edit Amenities" : "Add Amenities"}
      </h1>
      <div>
        <div className="flex flex-col xsm:flex-row gap-4 sm:gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className={`border rounded-xl p-2 xsm:w-24 xsm:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center cursor-pointer ${
                formik.values.Amenities?.includes(amenity.id)
                  ? "border-orange bg-orange/10"
                  : "border-[#D9D9D9DD]"
              }`}
              onClick={() => toggleAmenity(amenity.id)}
            >
              {amenity.icon}
              <span className="font-medium text-xs sm:text-sm text-center"> {amenity.label}</span>
            </div>
          ))}
        </div>
        {formik.touched.Amenities && formik.errors.Amenities && (
          <p className="text-red-500 text-sm font-medium">
            {formik.errors.Amenities}
          </p>
        )}
      </div>
      <ThemeButton
        title={"Continue"}
        className={"!max-w-full !justify-center !text-xs xsm:!text-sm lg:!text-base"}
        titleClass="!capitalize"
        type="submit"
      />
    </form>
  );
};

export default AddAmenities;
