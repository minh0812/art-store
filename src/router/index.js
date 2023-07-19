import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ErrorLayout from "../layouts/ErrorLayout";
import ProductsPage from "../pages/Products";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<ErrorLayout />} />
    </Routes>
  );
};

export default Router;
