import React from "react";
import Header from "./Header";

const AuthProtected = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default AuthProtected;
