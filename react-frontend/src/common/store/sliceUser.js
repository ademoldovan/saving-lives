import { createSlice } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";

const initialState = {
  sessionActive: false,
  user: {},
  requirements: {},
};
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { user } = action.payload;
      state.sessionActive = true;
      state.user = user;
    },
    logout(state) {
      delete state.user;
      delete state.requirements;
      state.sessionActive = false;
      jsCookie.remove("Active");
    },
    updateUserState(state, action) {
      const user = action.payload;
      state.user = user;
    },
    updateRequirementsState(state, action) {
      const user = action.payload;
      state.requirements = user;
    },
  },
});

export const {
  loginSuccess,
  logout,
  updateUserState,
  updateRequirementsState,
} = userSlice.actions;
