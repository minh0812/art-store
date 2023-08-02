import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProductID from "../pages/ProductID";
import Page404 from "../components/404";
import Cart from "../pages/Cart";
import KitsPage from "../pages/Kits";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductID />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/kits" element={<KitsPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
