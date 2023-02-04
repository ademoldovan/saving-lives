import React, { useState } from "react";
import PropTypes from "prop-types";

import useNotification from "../../common/hooks/useNotification";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Toaster.css";

const Toaster = ({ open, severity, text }) => {
  const [state] = useState({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;
  const { hideNotification } = useNotification();

  const handleClose = () => {
    hideNotification();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      key={"vertical + horizontal"}
      action={
        <IconButton color="inherit" size="small" aria-label="close">
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert
        variant="outlined"
        severity={severity}
        className="toaster"
        id={`${severity}_toaster`}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

Toaster.propTypes = {
  severity: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Toaster;
