import { Route, Routes } from "react-router-dom";
import "./App.css";
import { nonPrivateRoute, privateRoute, sellRoute } from "./Route";
import SellPropertySidebarHeader from "./components/common/SellPropertySidebarHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import AuthProtected from "./components/AuthProtected";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        {nonPrivateRoute?.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}
        {privateRoute?.map((route) => (
          <Route
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        ))}
        {sellRoute?.map((route) => (
          <Route
            path={route.path}
            element={
              <AuthProtected>
                <SellPropertySidebarHeader>
                  <route.component />
                </SellPropertySidebarHeader>
              </AuthProtected>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
