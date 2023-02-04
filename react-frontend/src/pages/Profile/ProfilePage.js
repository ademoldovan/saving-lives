import { DateTimePicker, DesktopDatePicker } from "@mui/lab";
import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNotification from "../../common/hooks/useNotification";
import { updateUserState } from "../../common/store/sliceUser";
import { CustomButton } from "../../components/Button";
import { Layout } from "../../components/Layout/Layout";
import { CustomTextField } from "../../components/TextField";
import { updateUser } from "../../service/userService";
import "./index.css";
const bloodType = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "0+", label: "0+" },
  { value: "0-", label: "0-" },
];
export const ProfilePage = () => {
  const { user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const { showNotification } = useNotification();

  const [state, setState] = useState(user);

  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };
  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    const response = await updateUser(state);
    if (response.status === 200) {
      dispatch(updateUserState(response.data));
      showNotification({
        severity: "success",
        message: "Profile updated successfully!",
      });
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong!",
      });
    }
  };

  return (
    <Layout>
      <h1>Edit profile</h1>
      <br />
      <br />
      <br />
      <form onSubmit={(e) => handleUpdateInfo(e)}>
        <div className="dada-profile">
          <div className="formul-profile">
            <div className="divul-profile">
              <h2>Account information</h2>
              <br />

              <CustomTextField
                required
                label={"Name"}
                value={state.name}
                handleChange={(e) => handleInputChanges("name", e.target.value)}
              />
              <CustomTextField
                required
                label={"Email"}
                value={state.email}
                handleChange={(e) =>
                  handleInputChanges("email", e.target.value)
                }
              />
              <CustomTextField
                required
                label={"New password"}
                type="password"
                value={state.password}
                handleChange={(e) =>
                  handleInputChanges("password", e.target.value)
                }
              />
              <CustomTextField
                required
                label={"Phone number"}
                value={state.phoneNumber}
                handleChange={(e) =>
                  handleInputChanges("phoneNumber", e.target.value)
                }
              />
            </div>
            <div className="divul-profile">
              <h2>Personal information</h2>
              <br />
              <TextField
                select
                label="Blood Type"
                required
                fullWidth
                value={state.bloodType}
                onChange={(e) =>
                  setState({ ...state, bloodType: e.target.value })
                }
              >
                {bloodType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Weight"
                required
                fullWidth
                value={state.weight}
                onChange={(e) => setState({ ...state, weight: e.target.value })}
                type="number"
              />

              <DesktopDatePicker
                label="Birth date"
                inputFormat="dd/MM/yyyy"
                value={state.birthdate}
                fullWidth
                onChange={(newValue) =>
                  handleInputChanges("birthdate", newValue)
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
          <div className="butonul-profile">
            <CustomButton text="Submit" secondary submit />
          </div>
        </div>
      </form>
    </Layout>
  );
};
