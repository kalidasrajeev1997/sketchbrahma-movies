import React from "react";
import Routes from "../Routes";
import { BrowserRouter as Router } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default LayoutContainer;
