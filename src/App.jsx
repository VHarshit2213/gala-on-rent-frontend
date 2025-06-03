import { Route, Routes } from "react-router-dom";
import "./App.css";
import { nonPrivateRoute, privateRoute, sellRoute } from "./Route";
import AuthProtected from "./components/AuthProtected";
import SellPropertySidebarHeader from "./components/common/SellPropertySidebarHeader";

function App() {
  return (
    <Routes>
      {nonPrivateRoute?.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
      {privateRoute?.map((route) => (
        <Route
          path={route.path}
          element={
            <AuthProtected>
              <route.component />
            </AuthProtected>
          }
        />
      ))}
      {sellRoute?.map((route) => (
        <Route
          path={route.path}
          element={
            <SellPropertySidebarHeader>
              <route.component />
            </SellPropertySidebarHeader>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
