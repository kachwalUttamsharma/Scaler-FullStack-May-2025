import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    handleNext: (state) => {
      state.pageNo = state.pageNo + 1;
    },
    handlePrevious: (state) => {
      state.pageNo = state.pageNo === 1 ? 1 : state.pageNo - 1;
    },
  },
});

export const { handleNext, handlePrevious } = PaginationSlice.actions;

export default PaginationSlice.reducer;
