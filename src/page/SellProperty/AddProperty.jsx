import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import BasicProperty from "./AddBasicProperty";
import AddPropertyDetails from "./AddPropertyDetails";
import AddPriceDetails from "./AddPriceDetails";
import AddAmenities from "./AddAmenities";
import AddPhotos from "./AddPhotos";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProperty } from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import { clearPropertyDetails } from "../../reducer/properties/redux";

const AddProperty = () => {
  const dispatch = useDispatch();
  const { getProperty, loading } = useSelector((state) => state.property);
  const params = useParams();

  const navTab = [
    "Basic Details",
    "Property Details",
    "Price Details",
    "Amenities",
    "Photos",
  ];
  const [activeTab, setActiveTab] = React.useState(0);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchSingleProperty(params.id));
    }
  }, [params.id]);

  useEffect(() => {
    return () => {
      dispatch(clearPropertyDetails([]));
    };
  }, []);

  if (params.id && loading) {
    return <Spinner />;
  }

  return (
    <div className="py-15 flex justify-center">
      <div className="flex flex-col justify-center border border-gray rounded-lg max-w-250 w-full h-full">
        <div className="bg-orange-transparent p-3 px-20 flex justify-around items-center gap-15 w-full overflow-y-auto scrollbar-hide">
          {(navTab || [])?.map((item, index) => (
            <div
              className="flex items-center gap-15"
              onClick={() => index < activeTab && setActiveTab(index)}
              key={index}
            >
              <div
                key={index}
                className="flex items-center gap-6  cursor-pointer transition-colors rounded-lg"
              >
                {index < activeTab ? (
                  <div
                    className={`w-7 h-7 rounded-full bg-[#4BE252] text-white flex items-center justify-center`}
                  >
                    <FaCheck />
                  </div>
                ) : (
                  <div
                    className={`w-6 h-6 rounded-full ${
                      activeTab === index
                        ? "bg-orange outline-3 outline-offset-3 outline-orange"
                        : "bg-[#E56C064D]"
                    }`}
                  />
                )}
                <div className="flex flex-col justify-center items-center gap-y-0.5">
                  <span className="text-base whitespace-nowrap">{item}</span>
                  {index < activeTab ? (
                    <span className="text-[10px] text-[#4BE252] rounded-full bg-[#00FF0D33] w-fit px-3 py-[0.5px] flex items-center whitespace-nowrap">
                      Completed
                    </span>
                  ) : activeTab === index ? (
                    <span className="text-[10px] text-orange rounded-full bg-[#E56C064D] w-fit px-3 py-[0.5px] flex items-center whitespace-nowrap">
                      In progress
                    </span>
                  ) : (
                    <span className="text-[10px] text-muted-transparent rounded-full bg-white w-fit px-3 py-[0.5px] flex items-center whitespace-nowrap">
                      Pending
                    </span>
                  )}
                </div>
              </div>
              {navTab?.length - 1 !== index && (
                <div
                  className={`${
                    index < activeTab ? "bg-[#4BE252]" : "bg-[#E56C064D]"
                  } w-25 h-1`}
                ></div>
              )}
            </div>
          ))}
        </div>
        {activeTab === 0 && (
          <BasicProperty
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            getProperty={getProperty}
            propertyId={params.id}
          />
        )}
        {activeTab === 1 && (
          <AddPropertyDetails
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            getProperty={getProperty}
            propertyId={params.id}
          />
        )}
        {activeTab === 2 && (
          <AddPriceDetails
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            getProperty={getProperty}
            propertyId={params.id}
          />
        )}
        {activeTab === 3 && (
          <AddAmenities
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            getProperty={getProperty}
            propertyId={params.id}
          />
        )}
        {activeTab === 4 && (
          <AddPhotos
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            getProperty={getProperty}
            propertyId={params.id}
          />
        )}
      </div>
    </div>
  );
};

export default AddProperty;
