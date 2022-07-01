import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, getMovie } from "./services";
import { MOVIE_ACTIONS } from "./types";

// Define the initial state using that type
const initialState = {
  movieActionType: "",
  movies: {},
  currentMovie: {},
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (movies) => {
    movies.addCase(getPopularMovies.pending, (state) => {
      return {
        ...state,
        movies: {},
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIES_IN_PROGRESS,
      };
    });
    movies.addCase(getPopularMovies.fulfilled, (state, { payload: data }) => {
      return {
        ...state,
        movies: data,
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIES_SUCCESS,
      };
    });
    movies.addCase(getPopularMovies.rejected, (state) => {
      return {
        ...state,
        movies: {},
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIES_FAILED,
      };
    });
    movies.addCase(getMovie.pending, (state) => {
      return {
        ...state,
        currentMovie: {},
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIE_DETAILS_IN_PROGRESS,
      };
    });
    movies.addCase(getMovie.fulfilled, (state, { payload: data }) => {
      return {
        ...state,
        currentMovie: data,
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIE_DETAILS_SUCCESS,
      };
    });
    movies.addCase(getMovie.rejected, (state) => {
      return {
        ...state,
        currentMovie: {},
        movieActionType: MOVIE_ACTIONS.FETCHING_MOVIE_DETAILS_FAILED,
      };
    });
  },
});

export default MovieSlice.reducer;
