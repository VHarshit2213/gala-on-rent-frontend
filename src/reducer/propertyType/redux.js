import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyType",
  initialState: {
    type: null,
  },
  reducers: {
    setPropertyType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setPropertyType} = propertyTypeSlice.actions;
export default propertyTypeSlice.reducer;
