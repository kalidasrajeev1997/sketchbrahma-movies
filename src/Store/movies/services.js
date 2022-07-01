import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL, apiKey } from "../../config/config";
import apiCaller from "../../apiCaller/fetch";

export const getPopularMovies = createAsyncThunk(
  "getPopularMovies",
  async (page, { rejectWithValue }) => {
    try {
      const apiConfig = {
        pathname: `movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
      };
      const url = apiURL + apiConfig.pathname;
      const asyncRes = await apiCaller(url);
      return asyncRes;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getMovie = createAsyncThunk(
  "getMovie",
  async (id, { rejectWithValue }) => {
    try {
      const apiConfig = {
        pathname: `/movie/${id}?api_key=${apiKey}&language=en-US`,
      };
      const url = apiURL + apiConfig.pathname;
      const asyncRes = await apiCaller(url);
      return asyncRes;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
