import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    // property: {},
    status: null,
    error: null,
  },
  reducers: {},
});

export default propertySlice.reducer;
