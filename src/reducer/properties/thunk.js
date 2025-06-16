import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";

// end point
import { createProperties } from "../../api/helper";

//add Properties
export const addProperties = createAsyncThunk(
  "property/createProperties",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(createProperties, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
