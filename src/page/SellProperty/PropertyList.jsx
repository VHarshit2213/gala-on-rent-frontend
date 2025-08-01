import React, { useEffect, useState } from "react";
import Property from "../../assets/Property/property.png";
import squareMeters from "../../assets/Home/squareMeters.png";
import { Card, CardBody, CardFooter } from "../../components/common";
import { FaRegHeart } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProperty,
  fetchAllTokenWiseProperties,
} from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import DeleteModel from "../../components/common/DeleteModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { WhatsappShareButton } from "react-share";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const PropertyList = () => {
  const dispatch = useDispatch();
  const { AllTokenWiseProperties, loading } = useSelector(
    (state) => state.property
  );
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isRemovedLoading, setIsRemovedLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsRemovedLoading(true);
      await dispatch(deleteProperty(deleteId)).unwrap();
      dispatch(fetchAllTokenWiseProperties());
      toast.success("Property Delete successfully!");
    } catch (error) {
      console.error("Error deleting property:", error);
      toast.error("Failed to delete property");
    } finally {
      setIsRemovedLoading(false);
      setShowModal(false);
      setDeleteId(null);
    }
  };

  const handleViewPropertyDetails = (propertyId) => {
    navigate(`/property-details/${propertyId}`, { state: { fromAdmin: true } });
  };

  useEffect(() => {
    dispatch(fetchAllTokenWiseProperties());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="h-[calc(100vh-70px)] overflow-y-auto">
      <div className="p-4 sm:p-10 l:p-15 space-y-6">
        {AllTokenWiseProperties && AllTokenWiseProperties?.length > 0 ? (
          AllTokenWiseProperties.map((property) => {
            const {
              _id,
              image,
              Financials,
              address,
              city,
              Popular_Area,
              pincode,
              Carpet_Area,
              type_of_property,
              Type_of_Power,
            } = property;
            return (
              <Card
                key={_id}
                cardClassName="bg-white rounded-lg overflow-hidden border border-[#F0EFFB] max-w-250 w-full"
              >
                <div className="py-2 px-2 xsm:px-5 border-b-1 border-b-gray flex flex-col xsm:flex-row justify-between gap-2">
                  <p className="text-muted-transparent text-[10px] sm:text-sm order-2 xsm:order-none">
                    ID : {_id}
                  </p>
                  <div className="text-orange flex justify-end gap-4 sm:gap-6 text-xs sm:text-sm font-bold order-1 xsm:order-none">
                    <WhatsappShareButton
                      url={`${window.location.origin}/property-details/${property._id}`}
                      title={`Check out this ${property.type_of_property} in ${property.city}`}
                    >
                      <div className="cursor-pointer">Share</div>
                    </WhatsappShareButton>
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setShowModal(true);
                        setDeleteId(_id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => navigate(`/edit-property/${_id}`)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div
                  className="flex flex-col md:flex-row w-full cursor-pointer md:h-[250px]"
                  onClick={() => handleViewPropertyDetails(_id)}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={`${BASE_URL}/${image?.[0]}`}
                      alt="Property"
                      className="w-full h-[150px] xsm:h-[250px] md:h-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <CardBody>
                      <div className="p-2 xsm:p-4 flex flex-col gap-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-end gap-1">
                            <span className="text-orange text-sm xsm:text-base sm:text-lg lg:text-xl font-semibold">
                              ₹{Financials}
                            </span>
                            <span className="text-muted opacity-50 font-medium text-sm xsm:text-base">
                              /month
                            </span>
                          </div>
                          <div className="p-1.5 xsm:p-2.5 lg:p-3.5 rounded-50 border border-[#e56c064d]">
                            <FaRegHeart className="text-orange text-sm xsm:text-base lg:text-xl" />
                          </div>
                        </div>
                        <div className="text-muted flex flex-col lg:gap-y-1 l:gap-y-2">
                          <h2 className="font-bold text-sm xsm:text-base lg:text-xl l:text-2xl">
                            {type_of_property}
                          </h2>
                          <p className="opacity-50 text-xs xsm:text-sm">
                            {address}, {city}, {Popular_Area} - {pincode}
                          </p>
                          <p className="opacity-50 text-xs xsm:text-sm">
                            Power : {Type_of_Power}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                    <hr className="border-b-0 border-[#F0EFFB]" />
                    <CardFooter footerClassName="flex justify-between items-center p-3 xsm:p-4">
                      <div className="flex gap-2 text-muted">
                        <img src={squareMeters} />
                        <span className="opacity-50 text-xs xsm:text-sm">
                          {Carpet_Area}
                        </span>
                      </div>
                      <div className="p-1 xsm:p-2 lg:p-3 rounded-50 border border-orange bg-orange-transparent">
                        <GrLinkNext className="text-orange text-xs xsm:text-base lg:text-xl" />
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-2xl">
            No properties found.
          </p>
        )}
      </div>

      <DeleteModel
        show={showModal}
        deleteMsg="Are you sure you want to delete this Property?"
        onDelete={handleDelete}
        onCancel={() => {
          setShowModal(false);
          setDeleteId(null);
        }}
        isLoading={isRemovedLoading}
      />
    </div>
  );
};

export default PropertyList;
