import React from "react";

import Navigation from "../components/Navigation";
function Layout({ children }) {
  return (
    <div className="w-full">
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
