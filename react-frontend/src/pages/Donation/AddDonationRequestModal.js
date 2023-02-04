import React, { useEffect, useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Button, MenuItem, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/lab";

import { useSelector } from "react-redux";
import { CustomButton } from "../../components/Button";
import "./index.css";
import {
  addDonationCall,
  getDonationCenters,
} from "../../service/donationService";
import { parseDate } from "../../common/helpers";
import useNotification from "../../common/hooks/useNotification";
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

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#FFF",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const mapToComboBoxType = (array) => {
  return array.map((i) => ({ value: i.city, label: i.name }));
};

export default function ModalAddRequest({ handleClose, open }) {
  const { user } = useSelector((state) => state.userData);
  const [state, setState] = useState({
    bloodType: "",
    registerDate: new Date(),
    visibleUntil: new Date(),
    city: "",
    idUser: user.id,
  });
  const { showNotification } = useNotification();
  const [donationCenters, setDonationCenters] = useState([]);
  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const handleCreateDonationCall = async (e) => {
    e.preventDefault();
    const newState = {
      ...state,
      registerDate: parseDate(state.registerDate),
      visibleUntil: parseDate(state.visibleUntil),
    };
    const response = await addDonationCall(newState);
    if (response.status >= 200 && response.status < 300) {
      showNotification({
        severity: "success",
        message: "Donation call created successfully!",
      });
      handleClose();
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong creating a new donation call!",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDonationCenters();
      response.data && setDonationCenters(mapToComboBoxType(response.data));
    };
    fetchData();
  }, []);

  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <div className="centruuuu">
          <h1> Create donation call</h1>
        </div>
        <br />
        <br />
        <form onSubmit={(e) => handleCreateDonationCall(e)} className="">
          <div className="dada">
            <div className="divul">
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
              <DesktopDatePicker
                label="End date"
                inputFormat="dd/MM/yyyy"
                value={state.visibleUntil}
                fullWidth
                disablePast
                onChange={(newValue) =>
                  handleInputChanges("visibleUntil", newValue)
                }
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                select
                label="Donation center"
                required
                fullWidth
                value={state.city}
                onChange={(e) => setState({ ...state, city: e.target.value })}
              >
                {donationCenters.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="butonul">
              <CustomButton text="Submit" submit secondary />
            </div>
          </div>
        </form>
      </Box>
    </StyledModal>
  );
}
