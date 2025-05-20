import { Route, Routes } from "react-router-dom";
import "./App.css";
import { nonPrivateRoute, privateRoute } from "./Route";
import AuthProtected from "./components/AuthProtected";

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
    </Routes>
  );
}

export default App;
