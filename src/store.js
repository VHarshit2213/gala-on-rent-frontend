import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../src/reducer/auth/redux";
import propertyTypeSlice from "../src/reducer/propertyType/redux";
import propertyDetailsSlice from "../src/reducer/propertyDetails/redux";
import propertySlice from "../src/reducer/properties/redux";
import reviewSlice from "../src/reducer/reviews/redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  auth: AuthSlice,
  propertyType: propertyTypeSlice,
  propertyDetails: propertyDetailsSlice,
  property: propertySlice,
  review: reviewSlice,
});

const persistConfig = {
  key: "root", // A unique key for the persisted store
  storage, // Use local storage (or other storage)
  whitelist: ["propertyType", "auth", "propertyDetails"], // Optional: List of reducers to persist
  // blacklist: ['loading'], // Optional: List of reducers to ignore
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
