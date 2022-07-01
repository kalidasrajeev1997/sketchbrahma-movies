import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../Store/movies/services";
import { useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  let params = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const moviesAction = useSelector((state) => state.movies.movieActionType);
  const [currentPage, setPage] = useState(Number(params.page) || 1);
  useEffect(() => {
    dispatch(getPopularMovies(currentPage));
    if (currentPage !== undefined) {
      window.history.pushState("page", "", `/page/${currentPage}`);
    }
  }, [currentPage, dispatch]);
  return (
    <HomeContainer
      movies={movies}
      currentPage={currentPage}
      setPage={setPage}
      moviesAction={moviesAction}
    />
  );
};

export default Home;
