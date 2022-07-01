import React, { useEffect } from "react";
import MovieContainer from "./MovieContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Store/movies/services";
const Movie = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movies.currentMovie);
  const moviesAction = useSelector((state) => state.movies.movieActionType);
  useEffect(() => {
    dispatch(getMovie(params.id));
  }, [dispatch, params.id]);
  return (
    <MovieContainer currentMovie={currentMovie} moviesAction={moviesAction} />
  );
};

export default Movie;
