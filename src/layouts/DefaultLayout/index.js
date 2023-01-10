import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default DefaultLayout;
