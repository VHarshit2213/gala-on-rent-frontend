import Home from "./page/Home";
import Landing from "./page/Landing";

// Non Private route
export const nonPrivateRoute = [
  { path: "/", component: Landing },
//   { path: "/home", component: Home },
];

// Private routes
export const privateRoute = [
  { path: "/home", component: Home },
];