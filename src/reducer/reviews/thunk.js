import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import { toast } from "react-toastify";

// end point
import { getAllReviews } from "../../api/helper";

//get all Reviews
export const fetchAllReviews = createAsyncThunk(
  "review/getAllReviews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(getAllReviews);      
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);
