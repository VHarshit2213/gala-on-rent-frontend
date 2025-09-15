import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../components/common";
import { useDropzone } from "react-dropzone";
import gallery from "../../assets/Property/gallery.png";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetPropertyDetails } from "../../reducer/propertyDetails/redux";
import { addProperties, updateProperty } from "../../reducer/properties/thunk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react';

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

const imageValidationSchema = (hasExistingImages) =>
  Yup.object({
    image: hasExistingImages
      ? Yup.array().max(10, "You can upload up to 10 photos only.")
      : Yup.array()
        .min(1, "Please upload at least 1 photo.")
        .max(10, "You can upload up to 10 photos only."),
    isAcceptTermsCondition: Yup.boolean()
  });

const AddPhotos = ({ activeTab, setActiveTab, getProperty, propertyId }) => {
  const dispatch = useDispatch();
  const propertyDetails = useSelector(
    (state) => state.propertyDetails.propertyDetails
  );
  const navigate = useNavigate();

  const [isTermsAndConditionsOpen, setIsTermsAndConditionsOpen] = useState(false)
  const [files, setFiles] = useState([]);
  const { image, isAcceptTermsCondition } = getProperty || [];

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      const combinedFiles = [...files, ...mappedFiles].slice(0, 10);

      setFiles(combinedFiles);
      formik.setFieldValue("image", combinedFiles);
    },
    maxFiles: 10,
  });

  const handleDeleteImage = (indexToDelete) => {
    const fileToDelete = files[indexToDelete];
    URL.revokeObjectURL(fileToDelete.preview);

    const updatedFiles = files.filter((_, idx) => idx !== indexToDelete);
    setFiles(updatedFiles);
    formik.setFieldValue("image", updatedFiles);
  };

  const handleReplaceImage = (e, indexToReplace) => {
    const newFile = e.target.files[0];
    if (!newFile) return;

    // Clean up old preview URL
    URL.revokeObjectURL(files[indexToReplace]?.preview);

    newFile.preview = URL.createObjectURL(newFile);

    const updatedFiles = [...files];
    updatedFiles[indexToReplace] = newFile;

    setFiles(updatedFiles);
    formik.setFieldValue("image", updatedFiles);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: [],
      isAcceptTermsCondition :isAcceptTermsCondition || false,
    },
    validationSchema: imageValidationSchema(
      image?.length > 0 || files.length > 0
    ),
    onSubmit: async (values) => {
      const formData = new FormData();

      try {
        // Append normal fields except arrays & images
        Object.entries(propertyDetails).forEach(([key, value]) => {
          if (
            key !== "image" &&
            key !== "Amenities" &&
            key !== "Property_Suitable_For" &&
            key !== "Type_of_Water_Supply"
          ) {
            formData.append(key, value);
          }
        });

        const imageFilePromises = values.image.map(async (img) => {
          // Case 1: New uploaded file (has path or File properties)
          if (img instanceof File || img.path || img instanceof Blob) {
            formData.append("image", img);
          }
          // Case 2: Edited existing image from server (has preview URL only)
          else if (
            img.preview &&
            typeof img.preview === "string" &&
            img.preview.startsWith("http")
          ) {
            const response = await fetch(img.preview);
            const blob = await response.blob();
            const filename = img.preview.split("/").pop();
            const file = new File([blob], filename, { type: blob.type });
            formData.append("image", file);
          }
        });

        await Promise.all(imageFilePromises);

        // Append arrays as JSON strings
        formData.append("Amenities", JSON.stringify(propertyDetails.Amenities));
        formData.append(
          "Property_Suitable_For",
          JSON.stringify(propertyDetails.Property_Suitable_For)
        );
        formData.append(
          "Type_of_Water_Supply",
          JSON.stringify(propertyDetails.Type_of_Water_Supply)
        );
        formData.append("isAcceptTermsCondition",values.isAcceptTermsCondition);

        if (propertyId) {
          await dispatch(
            updateProperty({ propertyId: propertyId, payload: formData })
          ).unwrap();
          toast.success("Property updated successfully!");
        } else {
          await dispatch(addProperties(formData)).unwrap();
          toast.success("Property added successfully!");
        }
        dispatch(resetPropertyDetails([]));
        navigate("/property-list");
      } catch (error) {
        toast.error(
          error?.message || "Failed to submit property. Please try again."
        );
      }
    },
  });

  // ✅ Cleanup preview URL to prevent memory leaks
  useEffect(() => {
    return () => {
      files?.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  useEffect(() => {
    if (image && Array.isArray(image)) {
      const filePreviews = image.map((url) => ({
        preview: `${BASE_URL}/${url}`,
      }));
      setFiles(filePreviews);
    }
  }, [getProperty]);

  return (
    <>
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 sm:p-6 lg:p-10 l:p-15 flex flex-col gap-6 sm:gap-8 l:gap-10"
    >
      <h1 className="xsm:text-lg sm:text-xl md:text-2xl l:text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        {propertyId ? "Edit Photos" : "Add Photos"}
      </h1>

      <div>
        <div className="border-2 border-dashed border-orange bg-orange-50 rounded-lg h-auto flex flex-col items-center justify-center p-4 transition-colors duration-300">
          {files?.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="relative inline-flex border border-gray-300 rounded-md overflow-hidden w-16 h-16 xsm:w-24 xsm:h-24"
                >
                  <img
                    src={file.preview}
                    alt={`Preview ${idx}`}
                    className="block w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage(idx);
                    }}
                    className="absolute z-10 top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition"
                  >
                    <FaTimes size={12} />
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    title=""
                    onChange={(e) => handleReplaceImage(e, idx)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <img src={gallery} alt="Upload" className="w-24 h-24" />
          )}

          {/* DRAG & DROP AREA */}
          <div
            {...getRootProps()}
            className="mt-4 w-full p-6 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-sm font-bold">Drag and drop here</p>
            <div className="flex justify-center items-center gap-2 my-2">
              <hr className="w-12 border-left-gradient" />
              <span className="text-xs text-gray-500">or</span>
              <hr className="w-12 border-right-gradient" />
            </div>
            <button
              type="button"
              className="px-10 py-1 text-sm bg-orange-200 text-orange rounded border border-orange cursor-pointer"
            >
              Browse
            </button>
          </div>
        </div>

        {formik.touched.image && formik.errors.image && (
          <p className="text-red-500 text-sm font-medium mt-2">
            {formik.errors.image}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={formik.values.isAcceptTermsCondition}
          className="accent-orange w-full max-w-4 h-5"
          onClick={(event) => formik.setFieldValue("isAcceptTermsCondition", event.target.checked)}
        />
        <p className="leading-5 font-semibold underline decoration-solid text-blue-600 cursor-pointer" onClick={() => setIsTermsAndConditionsOpen(!isTermsAndConditionsOpen)}>
          I accept the terms and conditions*
        </p>
      </div>

      <ThemeButton
        title={
          formik.isSubmitting
            ? "Submitting..."
            : propertyId
            ? "Update"
            : "Submit"
        }
        className={`!max-w-full !justify-center !text-xs xsm:!text-sm lg:!text-base 
        `}
        style={{
          cursor: formik.values.isAcceptTermsCondition ? "pointer" : "not-allowed",
        }}
        titleClass="!capitalize"
        type="submit"
        disabled={formik.isSubmitting || !formik.values.isAcceptTermsCondition}
      />
    </form>

      {
        isTermsAndConditionsOpen &&
        <>
          <div className="fixed inset-0 bg-black/50 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 p-3">
            <div className="absolute max-w-lg mx-auto bg-white p-5 rounded-[10px] shadow-2xl max-h-[80vh] h-full invisible-scrollbar">
              <div className="flex justify-end cursor-pointer" onClick={() => setIsTermsAndConditionsOpen(!isTermsAndConditionsOpen)}> <X size={18} /></div>
              <div className="flex flex-col gap-3">
                <h5 className="text-lg font-bold">Terms and Conditions</h5>
                <div className="flex flex-col gap-5">
                  <p>Terms and conditions (T&Cs) for an online account are a legally binding contract outlining service rules, user
                    responsibilities, and company policies for using a website, app, or service. To sign up, you typically must
                    acknowledge these T&Cs, often by checking a box, which signifies your agreement. Key aspects include user
                    conduct, content use, intellectual property, account security, liability limitations, and data privacy, all designed to
                    protect both the user and the service provider.</p>

                  <div>
                    <h5 className="font-semibold"> What are Terms and Conditions?</h5>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>
                        <span className="font-medium">A Contract: </span> T&Cs are a legally binding contract between the service provider and the user, clarifying the
                        conditions for using the online account and its associated services.
                      </li>
                      <li>
                        <span className="font-medium">Rules and Expectations: </span> They set the rules for user behavior, service usage, and interaction with others
                        on the platform.
                      </li>
                      <li>
                        <span className="font-medium"> Protective Document: </span> T&Cs protect both the company's content from copyright infringement and the
                        company from potential liabilities, like service malfunctions or misuse of content
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold"> What You Need to Know When Signing Up</h5>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>
                        <span className="font-medium">Read and Understand: </span> Even though you must agree to them, it is your responsibility to understand the
                        terms of service before you sign up for an online account.
                      </li>
                      <li>
                        <span className="font-medium">Legal Agreement: </span> Your agreement to the T&Cs, often indicated by clicking an "agree" button or checking
                        a box, is a legal acknowledgment that you will abide by the outlined terms.
                      </li>
                      <li>
                        <span className="font-medium">No Physical Signature Needed: </span> For online accounts, your agreement is given electronically, creating a
                        legally binding agreement without a physical signature, as confirmed in the SBI E-Signature and Electronic
                        Disclosure Agreement.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold"> Key Components Typically Found in Terms and Conditions</h5>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>
                        <span className="font-medium">ReUser Conduct : </span> Rules governing how users must behave on the platform.
                      </li>
                      <li>
                        <span className="font-medium">Content and Copyright: </span> Guidelines on how users can and cannot use the content provided by the service.
                      </li>
                      <li>
                        <span className="font-medium">Account Security: </span> Responsibilities to keep your account secure, such as using strong passwords and not
                        sharing them.
                      </li>
                      <li>
                        <span className="font-medium">Liability Limitations: </span> Clauses that limit the service provider's liability in certain situations, such as
                        malfunctions or unauthorized access.
                      </li>
                      <li>
                        <span className="font-medium">Account Suspension/Cancellation: </span> Rules and procedures for suspending or canceling an account if terms
                        are violated.
                      </li>
                      <li>
                        <span className="font-medium">Privacy Policy: </span> Information on how your personal data is collected, used, and protected.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default AddPhotos;
