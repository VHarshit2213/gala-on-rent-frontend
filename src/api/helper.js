// auth
export const signUp = "/user/Signup";
export const signIn = "/user/Signin";

//properties
export const createProperties = "/properties/createProperties";
export const getAllProperties = "/properties/getAllProperties";
export const getPropertiesByCity = (city, area) =>
  `/properties/getAllProperties?city=${city}&Popular_Area=${area}`;
export const getAllTokenWiseProperties =
  "/properties/getAllTokenWiseProperties";
export const removeProperty = (propertyId) =>
  `/properties/deleteProperty/${propertyId}`;
export const getSingleProperty = (propertyId) =>
  `/properties/getProperty/${propertyId}`;
export const editProperty = (propertyId) =>
  `/properties/editProperty/${propertyId}`;
