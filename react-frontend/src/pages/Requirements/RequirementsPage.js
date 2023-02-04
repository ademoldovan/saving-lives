import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "../../common/hooks/useNotification";
import { updateRequirementsState } from "../../common/store/sliceUser";
import { CustomButton } from "../../components/Button";
import { Layout } from "../../components/Layout/Layout";
import {
  getRequirements,
  updateRequirements,
} from "../../service/requirementsService";
import "./index.css";
export const RequirementsPage = () => {
  const dispatch = useDispatch();
  const { requirements } = useSelector((state) => state.userData);
  const [state, setState] = useState(requirements);

  const { showNotification } = useNotification();

  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    const response = await updateRequirements(state);
    if (response.status === 200) {
      dispatch(updateRequirementsState(state));
      showNotification({
        severity: "success",
        message: "Requirements updated successfully!",
      });
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong updating requirements!",
      });
    }
  };
  return (
    <Layout>
      <h1>Minimum requirements</h1>
      <br />
      <br />
      <br />
      <form onSubmit={(e) => handleUpdateInfo(e)} className="">
        <div className="dada">
          <div className="divul">
            <TextField
              label="Age"
              required
              fullWidth
              value={state.age}
              onChange={(e) => setState({ ...state, age: e.target.value })}
              type="number"
            />
            <TextField
              label="Weight"
              required
              fullWidth
              value={state.weight}
              onChange={(e) => setState({ ...state, weight: e.target.value })}
              type="number"
            />
          </div>
          <div className="butonul">
            <CustomButton text="Submit" submit secondary />
          </div>
        </div>
      </form>
    </Layout>
  );
};
