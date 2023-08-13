import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppProvider } from "../../context";

const DefaultLayout = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Router />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
};

export default DefaultLayout;
