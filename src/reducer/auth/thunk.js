import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";

// end point
import { signIn, signUp } from "../../api/helper";

//signup
export const fetchSignUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(signUp, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//signin
export const fetchSignIn = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(signIn, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
