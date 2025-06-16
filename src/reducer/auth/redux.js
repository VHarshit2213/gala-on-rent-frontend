import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
    status: null,
    error: null,
  },
  reducers: {
    appendUserData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    resetUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { appendUserData, resetUserData } = authSlice.actions;
export default authSlice.reducer;
