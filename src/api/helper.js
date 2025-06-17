// auth
export const signUp = "/user/Signup";

//properties
export const createProperties = "/properties/createProperties";
export const getAllProperties = "/properties/getAllProperties";
export const removeProperty = (propertyId) =>
  `/properties/deleteProperty/${propertyId}`;
export const getSingleProperty = (propertyId) =>
  `/properties/getProperty/${propertyId}`;
