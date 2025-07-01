import { createSlice } from "@reduxjs/toolkit";
import { fetchAllReviews } from "./thunk";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    allReviews: [],
    status: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all Reviews
      .addCase(fetchAllReviews.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReviews = action.payload?.data?.data;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.data?.message || null;
        state.loading = false;
      });
  },
});

export default reviewSlice.reducer;
