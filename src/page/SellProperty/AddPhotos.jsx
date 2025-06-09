import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../components/common";
import { useDropzone } from "react-dropzone";
import gallery from "../../assets/Property/gallery.png";
import { FaChevronLeft } from "react-icons/fa";

const AddPhotos = ({ activeTab, setActiveTab }) => {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const uploadedFile = acceptedFiles[0];
      if (uploadedFile) {
        setFile(
          Object.assign(uploadedFile, {
            preview: URL.createObjectURL(uploadedFile),
          })
        );
      }
    },

    maxFiles: 1,
  });

  // ✅ Cleanup preview URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <div className="p-15 flex flex-col gap-10">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChevronLeft
          className="hover:text-orange cursor-pointer"
          onClick={() => setActiveTab(activeTab - 1)}
        />{" "}
        Add Photos
      </h1>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-orange bg-orange-50 rounded-lg h-[413px] flex justify-center cursor-pointer transition-colors duration-300 `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-3">
          {file?.preview ? (
            <img
              src={file.preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-md"
            />
          ) : (
            <img src={gallery} alt="Upload" className="w-24 h-24" />
          )}
          <p className="text-sm font-bold">Drag and drop here</p>
          <div className="flex justify-center items-center gap-2">
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

      <div className="flex gap-2">
        <input type="checkbox" className="accent-orange w-full max-w-4 h-5" />
        <p className="leading-5 font-semibold">
          I accept the terms and conditions*
        </p>
      </div>

      <ThemeButton
        title={"Submit"}
        className={"!max-w-full !justify-center"}
        titleClass="!capitalize"
        onClick={() => setActiveTab(activeTab + 1)}
      />
    </div>
  );
};

export default AddPhotos;
