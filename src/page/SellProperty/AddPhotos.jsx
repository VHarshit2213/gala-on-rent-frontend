import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../components/common";
import { useDropzone } from "react-dropzone";
import gallery from "../../assets/Property/gallery.png";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetPropertyDetails } from "../../reducer/propertyDetails/redux";
import { addProperties } from "../../reducer/properties/thunk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPhotos = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  const propertyDetails = useSelector(
    (state) => state.propertyDetails.propertyDetails
  );
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: [],
    },
    validationSchema: Yup.object({
      image: Yup.array()
        .min(1, "Please upload at least 1 photo.")
        .max(10, "You can upload up to 10 photos only."),
    }),
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

        // Append each image file
        values.image.forEach((file) => {
          formData.append("image", file);
        });

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

        await dispatch(addProperties(formData)).unwrap();
        toast.success("Property added successfully!");
        dispatch(resetPropertyDetails([]));
        navigate("/property-list");
      } catch (error) {
        console.error(error);
        toast.error(
          error?.message || "Failed to add property. Please try again."
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

  return (
    <form onSubmit={formik.handleSubmit} className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        Add Photos
      </h1>

      <div>
        <div className="border-2 border-dashed border-orange bg-orange-50 rounded-lg h-auto flex flex-col items-center justify-center p-4 transition-colors duration-300">
          {files?.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="relative inline-flex border border-gray-300 rounded-md overflow-hidden w-24 h-24"
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
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition"
                  >
                    <FaTimes size={12} />
                  </button>
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

      {/* <div className="flex gap-2">
        <input type="checkbox" className="accent-orange w-full max-w-4 h-5" />
        <p className="leading-5 font-semibold">
          I accept the terms and conditions*
        </p>
      </div> */}

      <ThemeButton
        title={"Submit"}
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        type="submit"
      />
    </form>
  );
};

export default AddPhotos;
