import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, getMovie, search } from "./services";
import { MOVIE_ACTIONS } from "./types";

// Define the initial state using that type
const initialState = {
  movieActionType: "",
  movies: {},
  currentMovie: {},
  search: {},
  searchActionType: "",
  searchbar: true,
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSearch: (state) => {
      return {
        ...state,
        search: {},
      };
    },
    SearchBarStatus: (state, action) => {
      return {
        ...state,
        searchbar: action.payload,
      };
    },
  },
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
    movies.addCase(search.pending, (state) => {
      return {
        ...state,
        search: {},
        searchActionType: MOVIE_ACTIONS.SEARCH_IN_PROGRESS,
      };
    });
    movies.addCase(search.fulfilled, (state, { payload: data }) => {
      return {
        ...state,
        search: data,
        searchActionType: MOVIE_ACTIONS.SEARCH_SUCCESS,
      };
    });
    movies.addCase(search.rejected, (state) => {
      return {
        ...state,
        search: {},
        searchActionType: MOVIE_ACTIONS.SEARCH_FAILED,
      };
    });
  },
});

export const { clearSearch, SearchBarStatus } = MovieSlice.actions;
export default MovieSlice.reducer;
