import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./MovieSlice";
import PaginationSlice from "./PaginationSlice";

const store = configureStore({
  reducer: {
    movie: MoviesSlice,
    pagination: PaginationSlice,
  },
});

export default store;
