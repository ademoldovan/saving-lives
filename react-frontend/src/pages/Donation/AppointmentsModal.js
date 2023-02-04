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
import { getAllAppointments } from "../../service/appointmentService";
import AppointmentTable from "../../components/Tables/AppointmentTable";
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
  justify-content: center;
  align-items: center;
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
  width: 1000,
  bgcolor: "#FFF",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

export default function AppointmentModal({
  handleClose,
  open,
  donationId,
  cityName,
}) {
  const [appointments, setAppointments] = useState([]);

  const refreshUI = async () => {
    const response = await getAllAppointments(donationId);
    response.data && setAppointments(response.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllAppointments(donationId);
      response.data && setAppointments(response.data);
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
          <h1> Appointments</h1>
        </div>
        <br />
        <br />
        <AppointmentTable
          data={appointments}
          refreshUI={refreshUI}
          cityName={cityName}
        />
      </Box>
    </StyledModal>
  );
}
