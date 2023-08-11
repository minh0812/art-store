import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppProvider } from "../../context";

const DefaultLayout = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default DefaultLayout;
