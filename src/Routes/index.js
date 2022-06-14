import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Category from "../pages/Category";
import Home from "../pages/index";
import SinglePage from "../pages/SinglePage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/single-page" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
