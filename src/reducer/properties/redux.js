import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProperties, fetchSingleProperty } from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProperty: [],
    getProperty: [],
    status: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all Properties
      .addCase(fetchAllProperties.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProperty = action.payload?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAllProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      })

      // get Single Property
      .addCase(fetchSingleProperty.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchSingleProperty.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getProperty = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchSingleProperty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      });
  },
});

export default propertySlice.reducer;
