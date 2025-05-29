import AboutUs from "./page/AboutUs";
import SignInUp from "./page/Auth/SignInUp";
import Home from "./page/Home";
import Landing from "./page/Landing";

// Non Private route
export const nonPrivateRoute = [
  { path: "/", component: Landing },
  { path: "/login", component: SignInUp },
  { path: "/about-us", component: AboutUs },
];

// Private routes
export const privateRoute = [
  { path: "/home", component: Home },
];