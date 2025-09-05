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
  const params = new URLSearchParams();

  if (city) params.append("city", city);
  if (area) params.append("Popular_Area", area);
  if (lookingTo) params.append("looking_to", lookingTo);
  if (propertyType) params.append("type_of_property", propertyType);
  if (sort) params.append("Financials", sort);

  return `/properties/getAllProperties?${params.toString()}`;
};
export const filterAgent = (
  city,page
) => {
  const params = new URLSearchParams();

  if (city) params.append("city", city?.toUpperCase());
  return `/user/getAllagents?page=${page}&${params.toString()}`;
};

// reviews
export const getAllReviews = "/review/getAllReviews";
