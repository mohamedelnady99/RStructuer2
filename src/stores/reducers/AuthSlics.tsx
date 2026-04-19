import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
// import { AuthInitialState } from "@/types/types";

const initialState = {
  isResetSuccessful: false,
  isVerifySuccessful: false,
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsResetSuccessful: (state) => {
      state.isResetSuccessful = true;
    },
    setIsVerifySuccessful: (state) => {
      state.isVerifySuccessful = true;
    },

    SetToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setIsResetSuccessful, setIsVerifySuccessful, SetToken } =
  AuthSlice.actions;

export default AuthSlice.reducer;

export const useAuthSelector = useSelector.withTypes<RootState>();
