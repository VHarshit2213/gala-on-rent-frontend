import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState: {
    propertyDetails: {},
    status: null,
    error: null,
  },
  reducers: {
    appendPropertyDetails: (state, action) => {
      state.propertyDetails = {
        ...state.propertyDetails,
        ...action.payload,
      };
    },
    resetPropertyDetails: (state, action) => {
      state.propertyDetails = action.payload;
    },
  },
});

export const { appendPropertyDetails, resetPropertyDetails } =
  propertyDetailsSlice.actions;
export default propertyDetailsSlice.reducer;
