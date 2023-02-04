import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  DashboardPage,
  ProfilePage,
} from "../../pages";
import { useDispatch, useSelector } from "react-redux";
import jsCookie from "js-cookie";
import { RequirementsPage } from "../../pages/Requirements/RequirementsPage";
import { UserPage } from "../../pages/Users/UserPage";
import { CenterPage } from "../../pages/DonationCenter/CenterPage";
import { TopicPage } from "../../pages/News";
import { getBooleanFromString } from "../../common/helpers";
import { DonationPage } from "../../pages/Donation/DonationPage";
import { getUserById } from "../../service/userService";
import {
  loginSuccess,
  updateRequirementsState,
} from "../../common/store/sliceUser";
import { getRequirements } from "../../service/requirementsService";
import useNotification from "../../common/hooks/useNotification";

const role = jsCookie.get("Role");
const AuthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {role === "admin" && (
        <Route path="/requirements" element={<RequirementsPage />} />
      )}
      {role === "admin" && <Route path="/users" element={<UserPage />} />}
      <Route path="/centers" element={<CenterPage />} />
      {role === "admin" && <Route path="/topics" element={<TopicPage />} />}
      <Route path="/donations" element={<DonationPage />} />
      <Route path="/*" element={<DashboardPage />} />
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);
const UnauthenticatedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export const RouterPicker = () => {
  const { sessionActive } = useSelector((state) => state.userData);
  const activeSession = jsCookie.get("Active");
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  useEffect(() => {}, [sessionActive]);

  useEffect(() => {
    const fetchData = async (userId) => {
      let response = await getUserById(userId);

      if (response.data) {
        dispatch(loginSuccess({ user: response.data }));
        jsCookie.set("Active", true, { expires: 1 });
        jsCookie.set("User", userId, { expires: 1 });
      } else {
        showNotification({
          severity: "error",
          message: "Something went wrong!",
        });
      }

      response = await getRequirements();
      if (response.data) dispatch(updateRequirementsState(response.data[0]));
    };
    jsCookie.get("Active") &&
      !!jsCookie.get("User") &&
      fetchData(jsCookie.get("User"));
  }, []);

  return getBooleanFromString(activeSession) === true &&
    !!jsCookie.get("User") ? (
    <AuthenticatedRoutes />
  ) : (
    <UnauthenticatedRoutes />
  );
};
