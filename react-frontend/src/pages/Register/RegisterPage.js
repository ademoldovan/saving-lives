import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../common/hooks/useNotification";
import { CustomButton } from "../../components/Button";
import { CustomTextField } from "../../components/TextField";
import { addUser } from "../../service/userService";
import "../Login/index.css";
export const RegisterPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };
  const handleGoToLogin = () => {
    navigate("/login");
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (state.password === state.confirmPassword) {
      const response = await addUser(state);
      if (response.status >= 200 && response.status < 300) {
        showNotification({
          severity: "success",
          message: "Register successfully!",
        });
      } else {
        showNotification({
          severity: "error",
          message: "Register failed!",
        });
      }
    } else {
      showNotification({
        severity: "error",
        message: "Password do not match!",
      });
    }
  };
  return (
    <div className="flex-container-center">
      <div className="flex-container-div">
        <h1>REGISTER</h1>
        <form onSubmit={(e) => handleRegister(e)} className="">
          <div className="flex-container-form">
            <CustomTextField
              required
              label={"Name"}
              value={state.name}
              handleChange={(e) => handleInputChanges("name", e.target.value)}
            />
            <CustomTextField
              required
              label={"Email"}
              type="email"
              value={state.email}
              handleChange={(e) => handleInputChanges("email", e.target.value)}
            />
            <CustomTextField
              required
              label={"Password"}
              type="password"
              value={state.password}
              handleChange={(e) =>
                handleInputChanges("password", e.target.value)
              }
            />
            <CustomTextField
              required
              label={"Confirm password"}
              value={state.confirmPassword}
              handleChange={(e) =>
                handleInputChanges("confirmPassword", e.target.value)
              }
              type="password"
            />
            <div className="flex-container-buttons">
              <CustomButton text="Log in" handleClick={handleGoToLogin} />
              <CustomButton
                text="Submit"
                submit
                secondary
                handleClick={handleRegister}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
