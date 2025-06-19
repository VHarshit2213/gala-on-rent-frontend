import React, { useEffect, useState } from "react";
import Property from "../../assets/Property/property.png";
import squareMeters from "../../assets/Home/squareMeters.png";
import { Card, CardBody, CardFooter } from "../../components/common";
import { FaRegHeart } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProperty,
  fetchAllProperties,
} from "../../reducer/properties/thunk";
import Spinner from "../../components/common/Spinner";
import DeleteModel from "../../components/common/DeleteModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const PropertyList = () => {
  const dispatch = useDispatch();
  const { allProperty, loading } = useSelector((state) => state.property);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isRemovedLoading, setIsRemovedLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsRemovedLoading(true);
      await dispatch(deleteProperty(deleteId)).unwrap();
      dispatch(fetchAllProperties());
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
    navigate(`/property-details/${propertyId}`,{ state: { fromAdmin: true } });
  };

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="p-15 space-y-6">
        {allProperty && allProperty?.length > 0 ? (
          allProperty.map((property) => {
            const {
              _id,
              image,
              Financials,
              address,
              Carpet_Area,
              type_of_property,
            } = property;
            return (
              <Card
                key={_id}
                cardClassName="bg-white rounded-lg overflow-hidden border border-[#F0EFFB] max-w-250 w-full"
              >
                <div className="py-2 px-5 border-b-1 border-b-gray flex justify-between">
                  <p className="text-muted-transparent text-sm ">
                    ID : {_id}
                  </p>
                  <div className="text-orange flex gap-6 text-sm font-bold ">
                    <button className="cursor-pointer">Share</button>
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
                <div className="flex w-full cursor-pointer" onClick={() => handleViewPropertyDetails(_id)}>
                  <div className="w-1/2 h-[255px]">
                    <img
                      src={`${BASE_URL}/${image?.[0]}`}
                      alt="Property"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-between">
                    <CardBody>
                      <div className="p-6 flex flex-col gap-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-end gap-1">
                            <span className="text-orange text-xl font-semibold">
                              ₹{Financials}
                            </span>
                            <span className="text-muted opacity-50 font-medium">
                              /month
                            </span>
                          </div>
                          <div className="p-3.5 rounded-50 border border-[#e56c064d]">
                            <FaRegHeart size={20} className="text-orange" />
                          </div>
                        </div>
                        <div className="text-muted flex flex-col gap-y-2">
                          <h2 className="font-bold text-2xl">
                            {type_of_property}
                          </h2>
                          <p className="opacity-50 text-sm">{address}</p>
                        </div>
                      </div>
                    </CardBody>
                    <hr className="border-b-0 border-[#F0EFFB]" />
                    <CardFooter footerClassName="flex justify-between items-center p-6">
                      <div className="flex gap-2 text-muted">
                        <img src={squareMeters} />
                        <span className="opacity-50 text-sm">
                          {Carpet_Area}
                        </span>
                      </div>
                      <div className="p-3 rounded-50 border border-orange bg-orange-transparent">
                        <GrLinkNext className="text-orange" />
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
    </>
  );
};

export default PropertyList;
