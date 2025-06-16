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

const AddPriceDetails = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Financials: "",
    },
    validationSchema: priceValidationSchema,
    onSubmit: (values) => {
      dispatch(appendPropertyDetails(values));
      setActiveTab(activeTab + 1);
    },
  });

  return (
    <div className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        Add Price Details
      </h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-y-1">
          <label className="text-base font-medium">Financials *</label>
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
          title={"Post Property"}
          className={"!max-w-full !justify-center"}
          titleClass="!capitalize"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPriceDetails;
