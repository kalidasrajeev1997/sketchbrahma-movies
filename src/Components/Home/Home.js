import React, { useEffect } from "react";
import HomeContainer from "./HomeContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../Store/movies/services";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchBarStatus } from "../../Store/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);
  const moviesAction = useSelector((state) => state.movies.movieActionType);
  const currentPage = Number(params.page) || 1;

  useEffect(() => {
    dispatch(getPopularMovies(currentPage));
    dispatch(SearchBarStatus(true));
  }, [currentPage, dispatch]);

  const setPage = (page) => {
    navigate(`/page/${page}`);
  };

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
