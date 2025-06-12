import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../src/reducer/auth/redux";
import propertyTypeSlice from "../src/reducer/propertyType/redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  auth: AuthSlice,
  propertyType:propertyTypeSlice,
});

const persistConfig = {
  key: "root", // A unique key for the persisted store
  storage, // Use local storage (or other storage)
  whitelist: ["propertyType"], // Optional: List of reducers to persist
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