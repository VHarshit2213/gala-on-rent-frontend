import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteModel = ({ show, deleteMsg, onDelete, onCancel, isLoading }) => {
  if (!show) return null;
  return (
    <>
      {/* Background Blur */}
      <div className="fixed inset-0 bg-black/50 z-40"></div>

      <div className="fixed inset-0 flex items-center justify-center z-50 p-3">
        <div className="relative  bg-white p-6 rounded-lg shadow-xl text-center">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onCancel}
          >
            <FaTimes size={18} />
          </button>
          <p className="text-sm xs:text-base my-6">{deleteMsg}</p>
          <div className="flex justify-center gap-2 xs:gap-4">
            <button
              className="text-sm xs:text-base bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg disabled:opacity-75 cursor-pointer"
              onClick={onDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Yes, I'm sure"}
            </button>
            <button
              className="text-sm xs:text-base bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg cursor-pointer"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModel;
