import jsCookie from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNotification from "../../common/hooks/useNotification";
import {
  loginSuccess,
  updateRequirementsState,
} from "../../common/store/sliceUser";
import { CustomButton } from "../../components/Button";
import { CustomTextField } from "../../components/TextField";
import { getRequirements } from "../../service/requirementsService";
import { login } from "../../service/userService";
import "./index.css";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "user",
    password: "user",
  });

  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };
  const handleGoToRegister = () => {
    navigate("/register");
  };

  const handleLogin = async () => {
    let response = await login(state);

    if (response.status === 200) {
      dispatch(loginSuccess({ user: response.data }));
      jsCookie.set("Active", true, { expires: 1 });
      jsCookie.set("User", response.data.id, { expires: 1 });
      jsCookie.set("Role", response.data.role, { expires: 1 });
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong!",
      });
    }

    response = await getRequirements();
    if (response.status === 200)
      dispatch(updateRequirementsState(response.data[0]));
  };

  // useEffect(() => {
  //   dispatch(login(userToLogin));
  // }, [userToLogin]);

  return (
    <div className="flex-container-center">
      <div className="flex-container-div">
        <h1>LOGIN</h1>
        <CustomTextField
          required
          label={"Email"}
          value={state.email}
          type="email"
          handleChange={(e) => handleInputChanges("email", e.target.value)}
        />
        <CustomTextField
          required
          label={"Password"}
          value={state.password}
          handleChange={(e) => handleInputChanges("password", e.target.value)}
          type="password"
        />
        <div className="flex-container-buttons">
          <CustomButton text="Register" handleClick={handleGoToRegister} />
          <CustomButton text="Log in" secondary handleClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};
