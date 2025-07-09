import React, { useEffect } from "react";
import Header from "./Header";
import { Footer } from "./common";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
