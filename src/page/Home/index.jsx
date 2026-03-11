import React, { useEffect, useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import {
  Card,
  Tabs,
  Tab,
  Button,
  Select,
  ThemeButton,
} from "../../components/common";
import BasedOnLocation from "./BasedOnLocation";
import FindProperties from "./FindProperties";
import HighDemandProject from "./HighDemandProject";
import TopCities from "./TopCities";
import WhatClientSays from "./WhatClientSays";
import office_img from "./../../assets/Home/officeImage.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cityAreaData } from "../../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProperties,
  fetchFilteredProperties,
} from "../../reducer/properties/thunk";
import ReactSelect from "react-select";

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    backgroundColor: "white",
    padding: "4px 0",
    fontSize: "20px",
    cursor: "pointer",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#6b7280",
    fontSize: "20px",
  }),

  menu: (base) => ({
    ...base,
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    zIndex: 50,
  }),

  menuList: (base) => ({
    ...base,
    maxHeight: "300px",
    overflowY: "auto",
    padding: "4px",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#6366f1" : "white",
    color: state.isFocused ? "white" : "#4b5563",
    fontSize: "14px",
    padding: "8px 12px",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#111827",
  }),
  input: (base) => ({
    ...base,
    color: "#111827",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
};

const searchValidationSchema = Yup.object({
  city: Yup.string().required("please select City."),
  popularArea: Yup.string().required("please type or select Area/Locality."),
});

// property code model
const CodeModal = ({ show, onClose, onSubmit }) => {
  const [enteredCode, setEnteredCode] = useState("");

  const handleSearch = () => {
    if (enteredCode.trim() !== "") {
      onSubmit(enteredCode.trim());
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (!show) setEnteredCode("");

    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-125">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Enter Code</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <IoClose size={24} />
          </button>
        </div>
        <input
          type="text"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          onKeyDown={handleEnterPress}
          placeholder="Enter code here"
          className="w-full max-w-md border border-gray-300 rounded-md px-3 sm:px-4 py-2 mb-4 sm:mb-6 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <div className="flex justify-end gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="px-4 sm:px-6 py-2 rounded-md border border-gray-300 text-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSearch}
            disabled={enteredCode.trim() === ""}
            className={`px-4 sm:px-5 py-1 rounded-md transition ${enteredCode.trim() === ""
              ? "bg-orange/50 text-white cursor-not-allowed"
              : "bg-orange text-white hover:bg-dark cursor-pointer"
              }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProperty, loading } = useSelector((state) => state.property);

  const [activeTab, setActiveTab] = useState("Buy");
  const [showCodeModal, setShowCodeModal] = useState(false);

  const tabToPayloadMap = {
    Buy: "Sell",
    Rent: "Rent",
  };

  const formik = useFormik({
    initialValues: {
      city: "Mumbai",
      popularArea: "",
    },
    validationSchema: searchValidationSchema,
    onSubmit: async (values) => {
      await dispatch(
        fetchFilteredProperties({
          city: values.city,
          area: values.popularArea,
          lookingTo: tabToPayloadMap[activeTab],
        })
      ).unwrap();
      navigate(
        `/search-property?city=${values.city}&Popular_Area=${values.popularArea}&looking_to=${tabToPayloadMap[activeTab]}`
      );
    },
  });

  const cityOptions = Object.keys(cityAreaData).map((city) => ({
    value: city,
    label: city,
  }));

  const areaOptions = formik.values.city
    ? cityAreaData[formik.values.city].map((area) => ({
      value: area,
      label: area,
    }))
    : [];

  const selectedAreaOption =
    areaOptions.find((opt) => opt.value === formik.values.popularArea) ||
    (formik.values.popularArea
      ? { label: formik.values.popularArea, value: formik.values.popularArea }
      : null);

  const tabs = ["Buy", "Rent"];

  const handleCodeSubmit = (code) => {
    setShowCodeModal(false);
    navigate(`/search-property?city=${"mumbai"}`);
  };

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

  return (
    <>
      <div className="h-[540px] xl:h-[650px]">
        <div className='bg-[url("/assets/home/main-bg.jpg")] bg-cover bg-center h-[440px] xl:h-[550px] w-full relative'>
          <div className="absolute left-1/2 top-10 md:top-16 xl:top-32 -translate-x-1/2 text-center text-white px-4">
            <h1 className="hidden sm:block text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Commercial Spaces Made Simple. Transparent. Direct.
            </h1>
            <p className="hidden sm:block mt-3 text-sm md:text-base xl:text-lg max-w-[880px] mx-auto opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Discover verified commercial properties for rent or sale — directly
              from owners, tenants, and trusted agents. No inflated quotes. No
              endless calls. Just quick, clean, real deals.
            </p>
            <div className="mt-16 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                className="text-white bg-orange rounded-md text-base lg:text-lg font-normal px-4 py-2 w-full sm:w-auto min-w-[230px] lg:min-w-[180px] cursor-pointer"
                onClick={() => setShowCodeModal(true)}
              >
                Search Properties via Code
              </Button>
              <Button
                className="text-orange bg-white border border-orange rounded-md text-base lg:text-lg font-normal px-5 py-2 w-full sm:w-auto min-w-[200px] text-nowrap cursor-pointer"
              onClick={() => navigate("/")}
              >
                List Your Property Free
              </Button>
            </div>
          </div>
          <Card cardClassName="bg-white rounded-2xl shadow-[-5px_0px_20px_0px_#00000040] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[12%] md:translate-y-[60%] xl:translate-y-[97%] md:max-w-[900px] w-[90%] z-40">
            <Tabs
              defaultActive="Buy"
              onChange={(tab) => setActiveTab(tab)}
              tabClassName="flex gap-15 py-[20px] md:py-[24px] px-[26px] border-b border-[#D9D9D9DD]"
              tabButton="font-normal text-lg md:text-xl text-[#939393] pb-2"
              active="font-semibold !text-[#000000] border-b border-orange border-b-3"
              tabContent="px-[20px]"
            >
              {tabs.map((label) => (
                <Tab key={label} eventKey={label} title={label}>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col md:flex-row items-center justify-center text-muted-transparent"
                  >
                    <div className="w-full md:w-1/3 md:pl-4 pt-4 md:pt-0">
                      <Select
                        onChange={(val) => {
                          formik.setFieldValue("city", val?.value || "");
                          // formik.setFieldValue("area", "");
                        }}
                        value={cityOptions.find(
                          (opt) => opt.value === formik.values.city
                        )}
                        defaultText="Select City"
                        options={cityOptions}
                        listBoxClass="md:max-w-fit w-full"
                        listButtonClass="md:!text-xl text-sm"
                        textClass="text-black"
                      />
                      {formik.touched.city && formik.errors.city && (
                        <div className="text-red-500 text-sm pl-3">
                          {formik.errors.city}
                        </div>
                      )}
                    </div>
                    <div className="md:border-r border-[#D9D9D9DD] md:h-20 mx-10"></div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-[20px] md:py-[30px] w-full">
                      <div className="flex flex-col items-center md:text-base w-full relative">
                        {/* <IoSearchOutline size={25} /> */}
                        {/* <input
                        type="text"
                        placeholder="Search for locality, landmark, project, or builder"
                        className="max-w-[420px] w-full text-md focus:outline-0"
                      /> */}
                        <ReactSelect
                          options={areaOptions}
                          placeholder="Type or select Area / Locality"
                          value={selectedAreaOption}
                          onChange={(option) => {
                            formik.setFieldValue("popularArea", option?.value || "");
                          }}
                          onInputChange={(input, meta) => {
                            if (meta.action === "input-change") {
                              formik.setFieldValue("popularArea", input);
                            }
                          }}
                          onBlur={() => {
                            formik.setFieldTouched("popularArea", true);
                          }}
                          isSearchable
                          styles={customSelectStyles}
                          className="w-full"
                        />
                        {formik.touched.popularArea &&
                          formik.errors.popularArea && (
                            <div className="absolute left-3 -bottom-4 text-red-500 text-sm">
                              {formik.errors.popularArea}
                            </div>
                          )}
                      </div>
                      <Button
                        className="text-white bg-orange rounded-md text-lg font-normal p-2 px-3 w-full max-w-[114px] cursor-pointer self-end"
                        type="submit"
                      >
                        Search
                      </Button>
                    </div>
                  </form>
                </Tab>
              ))}
              {/* <Tab eventKey="Rent" title="Rent">
                <div className="flex items-center justify-center text-muted-transparent">
                  <div className="w-1/3 pl-4">
                    <Select
                      onChange={(val) => setSelected(val)}
                      value={select}
                      defaultText="Surat"
                      options={options}
                      listBoxClass="max-w-fit w-full"
                      listButtonClass="md:text-base text-sm"
                    />
                  </div>
                  <div className="border-r border-[#D9D9D9DD] h-20 mx-10"></div>
                  <div className="flex gap-4 items-center justify-between py-[30px] w-full">
                    <div className="flex gap-4 items-center text-base w-full">
                      <IoSearchOutline size={25} />
                      <input
                        type="text"
                        placeholder="Search for locality, landmark, project, or builder"
                        className="max-w-[420px] w-full text-md"
                      />
                    </div>
                    <Button
                      className="text-white bg-orange rounded-lg text-lg font-normal p-2  w-[114px] cursor-pointer"
                      onClick={() => navigate("/search-property")}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </Tab> */}
              {/* <Tab
                eventKey="New Launch"
                title={
                  <>
                    <span>New Launch</span>
                    <span className="text-[#E56C06]">*</span>
                  </>
                }
              >
                <div className="flex items-center justify-center text-muted-transparent">
                  <div className="w-1/3 pl-4">
                    <Select
                      onChange={(val) => setSelected(val)}
                      value={select}
                      defaultText="Mumbai"
                      options={options}
                      listBoxClass="max-w-fit w-full"
                      listButtonClass="md:text-base text-sm"
                    />
                  </div>
                  <div className="border-r border-[#D9D9D9DD] h-20 mx-10"></div>
                  <div className="flex gap-4 items-center justify-between py-[30px] w-full">
                    <div className="flex gap-4 items-center text-base w-full">
                      <IoSearchOutline size={25} />
                      <input
                        type="text"
                        placeholder="Search for locality, landmark, project, or builder"
                        className="max-w-[420px] w-full text-md"
                      />
                    </div>
                    <Button
                      className="text-white bg-orange rounded-lg text-lg font-normal p-2  w-[114px] cursor-pointer"
                      onClick={() => navigate("/search-property")}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </Tab> */}
            </Tabs>
          </Card>
        </div>
      </div>
      <hr className="w-[95%] mx-auto mt-15 border-b-0 border-muted-transparent" />
      <BasedOnLocation allProperty={allProperty} loading={loading} />
      <FindProperties />
      <HighDemandProject allProperty={allProperty} loading={loading} />
      {/* <TopCities /> */}
      <WhatClientSays />
      <div className="relative">
        <div
          className="relative bg-cover bg-no-repeat bg-center px-[135px] py-15 w-full h-[450px] overflow-hidden"
          style={{ backgroundImage: `url(${office_img})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute text-center top-1/2 lg:left-1/2 -translate-y-1/2 lg:-translate-x-1/2 text-white flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 p-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Ready to find your next office or warehouse?
          </h3>
          <p className="text-xs sm:text-sm md:text-base mb-3 opacity-80">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <ThemeButton
            className={"!pl-5 !justify-center gap-2 text-sm"}
            title={"Rent Now "}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>

      <CodeModal
        show={showCodeModal}
        onClose={() => setShowCodeModal(false)}
        onSubmit={handleCodeSubmit}
      />
    </>
  );
};

export default Home;
