import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./sliceUser";
import { notificationSlice } from "./sliceNotifications";

const reducer = combineReducers({
  userData: userSlice.reducer,
  notification: notificationSlice.reducer,
});

export const store = configureStore({ reducer });
