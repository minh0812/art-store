import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProductID from "../pages/ProductID";
import Page404 from "../components/404";
import Cart from "../pages/Cart";
import KitsPage from "../pages/Kits";
import AboutPage from "../pages/About";
import GalleryPage from "../pages/Gallery";
import LoginPage from "../pages/Login";
import CheckoutPage from "../pages/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductID />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/kits" element={<KitsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
