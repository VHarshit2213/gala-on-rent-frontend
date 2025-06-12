import React, { useState } from "react";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";
import { Card, CardBody, Select, ThemeButton } from "../../components/common";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const options = [
  { id: "MUMBAI", value: "MUMBAI" },
  { id: "PUNE", value: "PUNE" },
  { id: "THANE", value: "THANE" },
  { id: "NAGPUR", value: "NAGPUR" },
];

const sellRegisterValidationSchema = () =>
  Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    property_belongs_to: Yup.string().required("Please select one option"),
    city: Yup.string().required("Please select a city"),
    email: Yup.string().email("Invalid email").required("email is required"),
  });

const SellRegisterForm = () => {
  const [select, setSelected] = useState(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const cityPrefixes = {
    MUMBAI: "MUM",
    PUNE: "PUN",
    THANE: "THA",
    NAGPUR: "NAG",
  };

  const propertyBelongsTo = {
    "My Self": "SLF",
    "I Am Agent": "AGT",
    Family: "FMY",
    Friends: "FRD",
  };

  //generate random code
  const generateRandomCode = (city, belongsTo) => {
    const min = 100000;
    const max = 999999;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const propertyCode = propertyBelongsTo[belongsTo];
    const cityCode = cityPrefixes[city];
    return `${propertyCode}${cityCode}${random}`;
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      toast.success("Code has been copied");
      setShowModal(false);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.massage);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      property_belongs_to: "",
      city: "",
      email: "",
    },
    validationSchema: sellRegisterValidationSchema,
    onSubmit: (values) => {
      const fullCode = generateRandomCode(
        values.city,
        values.property_belongs_to
      );
      setGeneratedCode(fullCode);
      setShowModal(true);
      console.log("values", values, "fullCode", fullCode);
    },
  });

  return (
    <>
      <div className="w-full h-screen pl-[40px] pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover relative">
        <img
          src={Gala_On_RenT_LOGO}
          alt="Gala On Rent Logo"
          className="max-w-[200px] w-full absolute"
        />
        <div className="flex items-center justify-center w-full h-full">
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white rounded-xl p-14 w-1/2 mx-auto">
            <CardBody bodyClassName="flex flex-col justify-between gap-y-13">
              <form
                className="grid grid-cols-2 gap-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter Your First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.first_name}
                    className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${
                      formik.touched.first_name && formik.errors.first_name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.last_name}
                    className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${
                      formik.touched.last_name && formik.errors.last_name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium">
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Id"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.email}
                    className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">Select City</label>
                  <Select
                    onChange={(val) => {
                      setSelected(val);
                      formik.setFieldValue("city", val?.value || "");
                    }}
                    value={select}
                    defaultText="Select City"
                    options={options}
                    listBoxClass="w-full"
                    listButtonClass="md:!text-xl text-sm"
                    className={`border rounded-lg p-[2px] ${
                      formik.touched.city && formik.errors.city
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    textClass="text-[14px]"
                    onBlur={() => formik.setFieldTouched("city", true)}
                  />
                </div>
                <div className="flex flex-col gap-y-2 col-span-2">
                  <label className="font-medium">Property Belongs To</label>
                  <div className="flex items-center gap-4">
                    {["My Self", "I Am Agent", "Family", "Friends"].map(
                      (label) => (
                        <label
                          key={label}
                          className="inline-flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="property_belongs_to"
                            value={label}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={
                              formik.values.property_belongs_to === label
                            }
                            className="w-5 h-5 hue-rotate-[163deg]"
                          />
                          <span className="text-sm">{label}</span>
                        </label>
                      )
                    )}
                  </div>
                  {formik.touched.property_belongs_to &&
                    formik.errors.property_belongs_to && (
                      <p className="text-sm text-red-500">
                        {formik.errors.property_belongs_to}
                      </p>
                    )}
                </div>

                <ThemeButton
                  type="submit"
                  title={"Generate Code"}
                  className="!justify-center !max-w-full col-span-2"
                />
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* model */}
      {showModal && (
        <>
          {/* Background Blur */}
          <div className="fixed inset-0 bg-black/50 z-40"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-3">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
              <h2 className="text-lg xs:text-xl font-semibold mb-4 text-center">
                Your Generated Code
              </h2>
              <p className="text-2xl font-mono mb-6 text-orange text-center">
                {generatedCode}
              </p>
              <div className="text-right">
                <button
                  className="text-sm xs:text-base bg-orange hover:bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                  onClick={handleCopyCode}
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SellRegisterForm;
