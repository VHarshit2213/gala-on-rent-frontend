// auth
export const signUp = "/user/Signup";
export const signIn = "/user/Signin";

//properties
export const createProperties = "/properties/createProperties";
export const getAllProperties = "/properties/getAllProperties";
export const removeProperty = (propertyId) =>
  `/properties/deleteProperty/${propertyId}`;
export const getSingleProperty = (propertyId) =>
  `/properties/getProperty/${propertyId}`;
export const editProperty = (propertyId) =>
  `/properties/editProperty/${propertyId}`;
