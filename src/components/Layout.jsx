import React from "react";
import Header from "./Header";
import { Footer } from "./common";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
