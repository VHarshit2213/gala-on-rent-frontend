import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
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

const searchValidationSchema = Yup.object({
  city: Yup.string().required("please select City."),
  popularArea: Yup.string().required("please select Area/Locality."),
});

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProperty, loading } = useSelector((state) => state.property);

  const [activeTab, setActiveTab] = useState("Buy");

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
    id: city,
    value: city,
  }));

  const areaOptions = formik.values.city
    ? cityAreaData[formik.values.city].map((area) => ({
        id: area,
        value: area,
      }))
    : [];

  const tabs = ["Buy", "Rent"];

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

  return (
    <>
      <div className="h-[540px] xl:h-[650px]">
        <div className='bg-[url("/assets/home/main-bg.jpg")] bg-cover bg-center h-[440px] xl:h-[550px] w-full relative'>
          <Card cardClassName="bg-white rounded-2xl shadow-[-5px_0px_20px_0px_#00000040] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[12%] md:translate-y-[60%] xl:translate-y-[97%] md:max-w-[900px] w-[90%] z-40">
            <Tabs
              defaultActive="Buy"
              onChange={(tab) => setActiveTab(tab)}
              tabClassName="flex gap-15 py-[24px] px-[26px] border-b border-[#D9D9D9DD]"
              tabButton="font-normal text-xl text-[#939393] pb-2"
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
                          formik.setFieldValue("area", "");
                        }}
                        value={cityOptions.find(
                          (opt) => opt.value === formik.values.city
                        )}
                        defaultText="Select City"
                        options={cityOptions}
                        listBoxClass="md:max-w-fit w-full"
                        listButtonClass="md:!text-xl text-sm"
                      />
                      {formik.touched.city && formik.errors.city && (
                        <div className="text-red-500 text-sm pl-3">
                          {formik.errors.city}
                        </div>
                      )}
                    </div>
                    <div className="md:border-r border-[#D9D9D9DD] md:h-20 mx-10"></div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-[30px] w-full">
                      <div className="flex flex-col items-center text-base w-full">
                        {/* <IoSearchOutline size={25} /> */}
                        {/* <input
                        type="text"
                        placeholder="Search for locality, landmark, project, or builder"
                        className="max-w-[420px] w-full text-md focus:outline-0"
                      /> */}
                        <Select
                          onChange={(val) =>
                            formik.setFieldValue(
                              "popularArea",
                              val?.value || ""
                            )
                          }
                          value={areaOptions.find(
                            (opt) => opt.value === formik.values.popularArea
                          )}
                          defaultText="select Area / Locality"
                          options={areaOptions}
                          listBoxClass="w-full"
                          listButtonClass="md:!text-xl text-sm"
                        />
                        {formik.touched.popularArea &&
                          formik.errors.popularArea && (
                            <div className="pl-3 self-start text-red-500 text-sm">
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
    </>
  );
};

export default Home;
