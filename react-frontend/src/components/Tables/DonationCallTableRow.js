import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useSelector } from "react-redux";
import { addDonationAppointment } from "../../service/donationService";
import { Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import jsCookie from "js-cookie";
const DonationCallTableRow = ({ row, openAppModal, donationTime }) => {
  const role = jsCookie.get("Role");
  const { user } = useSelector((state) => state.userData);
  const [userAlreadySubscribed, setUserAlreadySubscribed] = useState(false);
  const [donationCall, setDonationCall] = useState({
    bloodType: "",
    registerDate: "",
    visibleUntil: "",
    city: "",
  });
  const id = row.id;
  const { bloodType, registerDate, visibleUntil, city } = donationCall;

  useEffect(() => {
    setDonationCall(row);
  }, []);

  const handleEditEvent = async () => {
    const appointment = {
      idUser: user.id,
      idDonationCall: id,
    };

    const response = await addDonationAppointment(appointment);
    response.data == true && setUserAlreadySubscribed(true);
  };

  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {bloodType}
      </TableCell>

      <TableCell align="left">{registerDate}</TableCell>
      <TableCell align="left">{visibleUntil}</TableCell>
      <TableCell align="left">{city}</TableCell>

      <TableCell align="right" width="150px">
        <Tooltip title="Create appointment">
          <IconButton
            disabled={userAlreadySubscribed || donationTime > 0}
            onClick={() => handleEditEvent()}
          >
            <HowToRegIcon />
          </IconButton>
        </Tooltip>
        {role !== "user" && (
          <Tooltip title="View appointments">
            <IconButton onClick={() => openAppModal(id, city)}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        )}
      </TableCell>
    </TableRow>
  );
};

DonationCallTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  refreshUI: PropTypes.func.isRequired,
};

export default DonationCallTableRow;
