import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: null,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default authSlice.reducer;
