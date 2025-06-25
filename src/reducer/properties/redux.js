import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProperties,
  fetchAllTokenWiseProperties,
  fetchPropertyByCity,
  fetchSingleProperty,
} from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProperty: [],
    getProperty: [],
    AllTokenWiseProperties: [],
    searchPropertiesByCity: [],
    status: null,
    error: null,
    loading: false,
  },
  reducers: {
    clearPropertyDetails(state, action) {
      state.getProperty = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all Properties
      .addCase(fetchAllProperties.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProperty = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAllProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      })

      //get all Token Wise Properties
      .addCase(fetchAllTokenWiseProperties.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllTokenWiseProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.AllTokenWiseProperties = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAllTokenWiseProperties.rejected, (state, action) => {
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
      })

      // get Property by city and area
      .addCase(fetchPropertyByCity.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPropertyByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchPropertiesByCity = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchPropertyByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      });
  },
});

export default propertySlice.reducer;
export const { clearPropertyDetails } = propertySlice.actions;
