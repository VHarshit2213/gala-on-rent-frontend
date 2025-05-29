import AboutUs from "./page/AboutUs";
import SignInUp from "./page/Auth/SignInUp";
import Home from "./page/Home";
import Landing from "./page/Landing";
import PropertyDetails from "./page/PropertyDetails";

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
];