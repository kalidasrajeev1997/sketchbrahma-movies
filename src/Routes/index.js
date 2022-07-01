import { Routes as Router, Route } from "react-router-dom";
import Home from "../Components/Home";
import Movie from "../Components/Movie";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/page/:page" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Router>
  );
};

export default Routes;
