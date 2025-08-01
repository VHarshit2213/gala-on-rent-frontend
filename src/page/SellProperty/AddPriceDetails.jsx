import React from "react";
import { ThemeButton } from "../../components/common";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { appendPropertyDetails } from "../../reducer/propertyDetails/redux";

const priceValidationSchema = () =>
  Yup.object().shape({
    Financials: Yup.string().required("Expected Rent is required"),
  });

const AddPriceDetails = ({
  activeTab,
  setActiveTab,
  getProperty,
  propertyId,
}) => {
  const dispatch = useDispatch();
  const { Financials } = getProperty || [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Financials: (getProperty && Financials) || "",
    },
    validationSchema: priceValidationSchema,
    onSubmit: (values) => {
      dispatch(appendPropertyDetails(values));
      setActiveTab(activeTab + 1);
    },
  });

  return (
    <div className="p-4 sm:p-6 lg:p-10 l:p-15 flex flex-col gap-6 sm:gap-8 l:gap-10">
      <h1 className="xsm:text-lg sm:text-xl md:text-2xl l:text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        {propertyId ? "Edit Price Details" : "Add Price Details"}
      </h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 sm:gap-8 l:gap-10">
        <div className="flex flex-col gap-y-1">
          <label className="text-sm lg:text-base font-medium">Expected Rent / Expected Sell Price *</label>
          <input
            type="text"
            name="Financials"
            value={formik.values.Financials}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Expected Rent"
            className={`p-2 border rounded-lg w-full placeholder:text-gray placeholder:text-xs ${
              formik.touched.Financials && formik.errors.Financials
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>
        <ThemeButton
          title={propertyId ? "Edit Property" : "Post Property"}
          className={"!max-w-full !justify-center !text-xs xsm:!text-sm lg:!text-base"}
          titleClass="!capitalize"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPriceDetails;
