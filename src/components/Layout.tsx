import React from "react";
import { FC } from "react";

import NavBar from "../components/NavBar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
