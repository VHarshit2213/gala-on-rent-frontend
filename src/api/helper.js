// auth
export const signUp = "/user/Signup";
export const signIn = "/user/Signin";

//properties
export const createProperties = "/properties/createProperties";
export const getAllProperties = "/properties/getAllProperties";
export const getAllTokenWiseProperties =
  "/properties/getAllTokenWiseProperties";
export const removeProperty = (propertyId) =>
  `/properties/deleteProperty/${propertyId}`;
export const getSingleProperty = (propertyId) =>
  `/properties/getProperty/${propertyId}`;
export const editProperty = (propertyId) =>
  `/properties/editProperty/${propertyId}`;
export const filterProperties = (
  city,
  area,
  lookingTo,
  propertyType = "",
  sort = ""
) => {
  let url = `/properties/getAllProperties?city=${city}&Popular_Area=${area}&looking_to=${lookingTo}`;
  if (propertyType) url += `&type_of_property=${propertyType}`;
  if (sort) url += `&Financials=${sort}`;
  return url;
};
