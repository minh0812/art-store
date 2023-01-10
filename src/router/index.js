import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ErrorLayout from "../layouts/ErrorLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorLayout />} />
    </Routes>
  );
};

export default Router;
