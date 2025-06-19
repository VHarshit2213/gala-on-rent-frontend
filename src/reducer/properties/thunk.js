import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";

// end point
import {
  createProperties,
  editProperty,
  getAllProperties,
  getAllTokenWiseProperties,
  getSingleProperty,
  removeProperty,
} from "../../api/helper";
import { toast } from "react-toastify";

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

//get all Properties
export const fetchAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(getAllProperties);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);

//get all Token Wise Properties
export const fetchAllTokenWiseProperties = createAsyncThunk(
  "property/getAllTokenWiseProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(getAllTokenWiseProperties);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);

//get Single Property
export const fetchSingleProperty = createAsyncThunk(
  "property/getSingleProperty",
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await api.get(getSingleProperty(propertyId));
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);

//delete Property
export const deleteProperty = createAsyncThunk(
  "property/removeProperty",
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await api.delete(removeProperty(propertyId));
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);

//edit Property
export const updateProperty = createAsyncThunk(
  "property/editProperty",
  async ({ payload, propertyId }, { rejectWithValue }) => {
    try {
      const response = await api.put(editProperty(propertyId), payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error);
    }
  }
);
