import AboutUs from "./page/AboutUs";
import SignInUp from "./page/Auth/SignInUp";
import Home from "./page/Home";
import Landing from "./page/Landing";
import PropertyDetails from "./page/PropertyDetails";
import SearchProperty from "./page/SearchProperty";
import AddProperty from "./page/SellProperty/AddProperty";
import Dashboard from "./page/SellProperty/dashboard";
import PropertyList from "./page/SellProperty/PropertyList";

// Non Private route
export const nonPrivateRoute = [
  { path: "/", component: Landing },
  { path: "/login", component: SignInUp },
  { path: "/about-us", component: AboutUs },
];

// Private routes
export const privateRoute = [
  { path: "/home", component: Home },
  { path: "/property-details", component: PropertyDetails },
  { path: "/search-property", component: SearchProperty },
];
// sellRoute routes
export const sellRoute = [
  { path: "/dashboard", component: Dashboard },
  { path: "/add-property", component: AddProperty },
  { path: "/property-list", component: PropertyList },
];