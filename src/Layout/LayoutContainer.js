import React from "react";
import Routes from "../Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Components/Header";

const LayoutContainer = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default LayoutContainer;
