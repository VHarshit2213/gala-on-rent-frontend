import AboutUs from "./page/AboutUs";
import SellRegisterForm from "./page/Auth/SellRegisterForm";
import SignIn from "./page/Auth/SignIn";
import SignUp from "./page/Auth/SignUp";

import Home from "./page/Home";
import Landing from "./page/Landing";
import PropertyDetails from "./page/PropertyDetails";
import SearchProperty from "./page/SearchProperty";
import AddProperty from "./page/SellProperty/AddProperty";
import Dashboard from "./page/SellProperty/Dashboard";
import PropertyList from "./page/SellProperty/PropertyList";

// Non Private route
export const nonPrivateRoute = [
  { path: "/", component: Landing },
  { path: "/login", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/about-us", component: AboutUs },
  { path: "/sell-register-form", component: SellRegisterForm },
];

// Private routes
export const privateRoute = [
  { path: "/home", component: Home },
  { path: "/property-details/:id", component: PropertyDetails },
  { path: "/search-property", component: SearchProperty },
];

// sellRoute routes
export const sellRoute = [
  { path: "/dashboard", component: Dashboard },
  { path: "/add-property", component: AddProperty },
  { path: "/edit-property/:id", component: AddProperty },
  { path: "/property-list", component: PropertyList },
];