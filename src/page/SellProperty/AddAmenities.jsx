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

const AddAmenities = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Amenities: [],
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
    <form onSubmit={formik.handleSubmit} className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />
        Add Amenities
      </h1>
      <div>
        <div className="flex gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className={`border rounded-xl w-30 h-30 flex flex-col justify-center items-center cursor-pointer ${
                formik.values.Amenities?.includes(amenity.id)
                  ? "border-orange bg-orange/10"
                  : "border-[#D9D9D9DD]"
              }`}
              onClick={() => toggleAmenity(amenity.id)}
            >
              {amenity.icon}
              <span className="font-medium text-sm"> {amenity.label}</span>
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
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        type="submit"
      />
    </form>
  );
};

export default AddAmenities;
