import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Select,
  ThemeButton,
} from "../../components/common";
import { IoIosInformationCircle } from "react-icons/io";
import expertProfill from "../../assets/Property/expertProfill.svg";
import container from "../../assets/Property/Container.png";
import maskGroup from "../../assets/Home/maskGroup.png";
import ad_banner from "../../assets/Property/ad_banner.png";
import ad_Group from "../../assets/Property/ad_Group_.png";
import SimilarPropertiesShowroom from "../../components/SimilarPropertiesShowroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProperties } from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import { TypeOfProperty } from "../../constants/constant";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const sortOptions = [
  {
    id: "price (low to high)",
    value: "price (low to high)",
    order: "financials_asc",
  },
  {
    id: "price (high to low)",
    value: "price (high to low)",
    order: "financials_desc",
  },
  // { id: "property (accending)", value: "property (accending)" },
  // { id: "property (decending)", value: "property (decending)" },
];

const SearchProperty = () => {
  const dispatch = useDispatch();
  const { searchPropertiesByCity, loading } = useSelector(
    (state) => state.property
  );

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const city = queryParams.get("city");
  const area = queryParams.get("Popular_Area");
  const lookingTo = queryParams.get("looking_to");

  const [isSticky, setIsSticky] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const fetchData = (propertyType, sort) => {
    const payload = {
      city,
      area,
      lookingTo,
      propertyType: propertyType || "",
      sort: sort || "",
    };
    dispatch(fetchFilteredProperties(payload));
  };

  const handleSortPriceChange = (val) => {
    setSortByPrice(val);
    fetchData(selectedPropertyType, val?.order);
  };

  const handlePropertyChange = (val) => {
    const selectedType = val?.value || null;
    setSelectedPropertyType(selectedType);
    fetchData(selectedType, sortByPrice?.order);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40); // Adjust 40 as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (city || area || lookingTo) {
      fetchData(null, null);
    }
  }, [city, area, lookingTo]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="my-32 sm:my-30">
        <div
          className={`bg-white shadow-[0px_1px_8px_0px_#0000001A] w-full fixed flex flex-wrap whitespace-nowrap gap-2 transition-all duration-300 ease-in-out ${
            isSticky ? "top-0" : "top-20 mt-6"
          } py-3 px-4 sm:px-10 z-30`}
        >
          <Select
            onChange={(val) => handlePropertyChange(val)}
            value={TypeOfProperty.find(
              (item) => item.value === selectedPropertyType
            )}
            defaultText="Property Type"
            options={TypeOfProperty}
            textClass="!text-sm !font-medium !text-[#000000]"
            className="max-w-[250px] border border-[#CCCCCC] rounded-3xl"
            listBoxClass="!bg-transparent"
            listButtonClass="!bg-transparent"
          />
          {/* <Select
            onChange={(val) => setSelected(val)}
            value={select}
            defaultText="Construction Status"
            options={options}
            textClass="!text-sm !font-medium !text-[#000000] w-full truncate"
            className="max-w-[168px] border border-[#CCCCCC] rounded-3xl"
            listBoxClass="!bg-transparent"
            listButtonClass="!bg-transparent"
          /> */}
          {/* <div className="text-sm font-medium text-[#000000] max-w-fit px-4 w-full flex gap-1 justify-center items-center border border-[#CCCCCC] rounded-3xl">
            Verified{" "}
            <IoIosInformationCircle className="text-[#999999]" size={18} />
          </div> */}
          {/* <div className="text-sm font-medium text-[#000000] max-w-fit px-4 w-full flex gap-1 items-center justify-center border border-[#CCCCCC] rounded-3xl">
            Expert Pro Agents
            <img src={expertProfill} alt="expertProfill" />
          </div> */}

          {/* <Select
            onChange={(val) => setSelected(val)}
            value={select}
            defaultText="More Filters"
            options={options}
            textClass="!text-sm !font-medium !text-[#000000]"
            className="max-w-fit border border-[#CCCCCC] rounded-3xl"
            listBoxClass="!bg-transparent"
            listButtonClass="!bg-transparent"
          /> */}
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-5 px-4 sm:px-10">
        <div className="lg:w-[60%] w-full flex-1">
          <div className="flex flex-col gap-8 mb-6">
            <div className="flex justify-between text-[#747474] font-normal text-sm">
              <p className="capitalize">
                Home <span className="text-[#000000]">/</span> {city}{" "}
                {(lookingTo || area) && (
                  <>
                    <span className="text-[#000000]">/</span> Property
                    {lookingTo && ` for ${lookingTo}`}
                    {area && ` in ${area}`}
                  </>
                )}
              </p>
              {/* <p>Last Updated: Mar 5, 2025</p> */}
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-[#747474]">
                  Showing 1 - 30 of 427
                </p>
                <p className="text-sm md:text-base lg:text-lg font-medium text-[#222222] capitalize">
                  Property
                  {lookingTo && ` for ${lookingTo}`}
                  {(area || lookingTo) &&
                    ` in ${area ? `${area}, ` : ""}${city}`}
                  {!area && !lookingTo && ` in ${city}`}
                </p>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <span className="text-sm font-medium text-nowrap">
                  Sort by:
                </span>
                <Select
                  onChange={(val) => handleSortPriceChange(val)}
                  value={sortByPrice}
                  defaultText="select"
                  options={sortOptions}
                  textClass="!text-sm !font-medium !text-[#000000]"
                  className="!w-[190px] border border-[#CCCCCC] rounded-3xl"
                  listBoxClass="!bg-transparent"
                  listButtonClass="!bg-transparent"
                />
              </div>
            </div>
            {searchPropertiesByCity && searchPropertiesByCity?.length > 0 ? (
              <div className="flex flex-col gap-4">
                {searchPropertiesByCity.map((properties) => {
                  const {
                    _id,
                    image,
                    type_of_property,
                    address,
                    city,
                    Popular_Area,
                    property_belongsTo,
                    User_data,
                    Carpet_Area,
                    Financials,
                    available_From,
                    Type_of_Power,
                  } = properties;

                  const raw = property_belongsTo;
                  const displayText = raw?.replace(/&#x2F;/g, "/");

                  return (
                    <Card
                      key={_id}
                      cardClassName={
                        "bg-white border-2 border-orange shadow-[0px_0px_20px_0px_#0000000f] rounded-2xl p-4 cursor-pointer"
                      }
                      onClick={() => {
                        navigate(`/property-details/${_id}`);
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <img
                          src={`${BASE_URL}/${image?.[0]}`}
                          alt="container"
                          className="w-full md:w-[200px] h-[200px] xsm:h-[300px] md:h-[190px] rounded-lg object-cover"
                        />
                        <div className="flex flex-col gap-2 w-full h-auto">
                          <div className="flex justify-between items-center gap-4">
                            <h3 className="text-sm md:text-base l:text-lg font-bold text-muted capitalize">
                              {type_of_property}
                            </h3>
                            <p>
                              <span className="text-orange font-extrabold  text-base md:text-lg l:text-xl">
                                ₹{Financials}
                              </span>{" "}
                              <span className="text-muted font-medium text-sm l:text-base opacity-50">
                                /month
                              </span>
                            </p>
                          </div>
                          <p className="text-sm md:text-base font-medium text-muted opacity-50">
                            {address} , {Popular_Area} , {city}
                          </p>
                          <ul className="flex flex-wrap text-muted opacity-50 text-sm md:text-base font-medium gap-x-7 ml-5">
                            <li className="list-disc">
                              Power: {Type_of_Power}
                            </li>
                            <li className="list-disc">Sizes: {Carpet_Area}</li>
                            {/* <li className="list-disc">Under Construction</li> */}
                            <li className="list-disc">
                              Possession: {available_From}
                            </li>
                          </ul>
                          <span className="border-b-2 border-gray py-1" />
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                              <div className="w-8 h-8 md:w-10 md:h-10 l:w-12 l:h-12 rounded-lg bg-[#1DD38F] text-white flex justify-center items-center">
                                {User_data?.person_name
                                  ?.split(" ")
                                  .map((word) => word[0])
                                  .join("")
                                  .toUpperCase()}
                              </div>
                              <p className="flex flex-col l:gap-1">
                                <span className="text-[#222222] font-normal text-xs md:text-sm capitalize">
                                  {User_data?.person_name}
                                </span>
                                <span className="text-muted-transparent text-xs font-normal">
                                  {displayText}
                                </span>
                              </p>
                            </div>
                            <ThemeButton
                              title="Rent Now"
                              className="!ml-auto !mr-0 !text-xs md:!text-sm l:!text-base"
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-2xl py-10">
                No properties found.
              </p>
            )}

            {/* <SimilarPropertiesShowroom
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              slidesToShow={4}
            /> */}
          </div>
        </div>
        <div className="lg:w-[40%] w-full pb-4">
          <div className="bg-orange-transparent flex flex-col gap-y-6 rounded-2xl pt-2 sticky top-5 right-0 z-50">
            <Card
              cardClassName={
                "bg-white w-full flex flex-col gap-y-7 rounded-2xl p-4 shadow-[0px_1px_2px_0px_#0000001A]"
              }
            >
              <CardBody
                bodyClassName={
                  "grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-3 justify-between gap-4"
                }
              >
                <Card
                  cardClassName={"border border-orange rounded-xl bg-white"}
                >
                  <CardBody>
                    <div className="flex gap-2">
                      <div className="relative">
                        <img
                          src={maskGroup}
                          alt="maskGroup"
                          className="xsm:w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover"
                        />
                        <div className="text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1">
                          Ad
                        </div>
                      </div>
                      <div className="text-xs font-light flex flex-col justify-center">
                        <p>Price on Request</p>
                        <p>Raghuvir Spalex</p>
                        <p className="truncate text-[#9F9F9F] w-25">
                          by Raghuvir Devel defhy
                        </p>
                        <p className="truncate text-[#9F9F9F]">Vesu, Surat</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  cardClassName={"border border-orange rounded-xl bg-white"}
                >
                  <CardBody>
                    <div className="flex gap-2">
                      <div className="relative">
                        <img
                          src={maskGroup}
                          alt="maskGroup"
                          className="xsm:w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover"
                        />
                        <div className="text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1">
                          Ad
                        </div>
                      </div>
                      <div className="text-xs font-light flex flex-col justify-center">
                        <p>Price on Request</p>
                        <p>Raghuvir Spalex</p>
                        <p className="truncate text-[#9F9F9F]  w-25">
                          by Raghuvir Devel defhy
                        </p>
                        <p className="truncate text-[#9F9F9F]">Vesu, Surat</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  cardClassName={"border border-orange rounded-xl bg-white"}
                >
                  <CardBody>
                    <div className="flex gap-2">
                      <div className="relative">
                        <img
                          src={maskGroup}
                          alt="maskGroup"
                          className="xsm:w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover"
                        />
                        <div className="text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1">
                          Ad
                        </div>
                      </div>
                      <div className="text-xs font-light flex flex-col justify-center">
                        <p>Price on Request</p>
                        <p>Raghuvir Spalex</p>
                        <p className="truncate text-[#9F9F9F]  w-25">
                          by Raghuvir Devel defhy
                        </p>
                        <p className="truncate text-[#9F9F9F]">Vesu, Surat</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </CardBody>
              <CardFooter>
                <img
                  src={ad_banner}
                  alt="ad_banner"
                  className="w-full object-cover"
                />
              </CardFooter>
            </Card>
            <Card
              cardClassName={
                "bg-white w-full p-3 pb-0 rounded-xl shadow-[0px_1px_2px_0px_#0000001A]"
              }
            >
              <CardBody
                bodyClassName={"flex justify-between items-center gap-4"}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[13px] font-light">
                    Are you a commercials space owner looking to rent/sell?
                  </p>
                  <a
                    href="#"
                    className="text-[12px] font-light text-[#5E23DC] underline underline-offset-1"
                  >
                    Post your property for FREE
                  </a>
                </div>
                <img src={ad_Group} alt="ad_Group" />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
