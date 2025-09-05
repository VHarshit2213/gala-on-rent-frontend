import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProperties,
  fetchAllTokenWiseProperties,
  fetchFilteredProperties,
  fetchSingleProperty,
  fetchAgent
} from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProperty: [],
    getProperty: [],
    AllTokenWiseProperties: [],
    searchPropertiesByCity: [],
    AgentList: [], 
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
        const message = action.payload?.data?.message;

        if (message === "No Properties found") {
          state.status = "succeeded";
          state.AllTokenWiseProperties = [];
          state.error = null;
        } else {
          state.status = "failed";
          state.error = message || "Something went wrong";
        }
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
      .addCase(fetchFilteredProperties.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchFilteredProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchPropertiesByCity = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchFilteredProperties.rejected, (state, action) => {
        state.status = "failed";
        state.searchPropertiesByCity = [];
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      })
      // Fetch agent name list
      .addCase(fetchAgent.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAgent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.AgentList = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAgent.rejected, (state, action) => {
        state.status = "failed";
        state.AgentList = [];
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      });
  },
});

export default propertySlice.reducer;
export const { clearPropertyDetails } = propertySlice.actions;
