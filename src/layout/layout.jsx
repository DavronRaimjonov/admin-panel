import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { Products } from "../pages";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
