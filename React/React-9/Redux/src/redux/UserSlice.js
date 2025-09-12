import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    error: false,
    loading: true,
    val: "",
  },
  reducers: {
    userLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    stopLoading: (state) => {
      state.loading = false;
      state.error = false;
    },
    userError: (state) => {
      state.error = true;
      state.loading = false;
    },
    userData: (state, data) => {
      state.loading = false;
      state.user = data.payload;
    },
    setVal: (state, data) => {
      state.val = data.payload;
      state.error = false;
      state.loading = false;
    },
  },
});

export const { userLoading, userData, userError, setVal, stopLoading } =
  UserSlice.actions;

export default UserSlice.reducer;
