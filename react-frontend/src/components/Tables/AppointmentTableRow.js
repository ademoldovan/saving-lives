import React from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import { Tooltip } from "@mui/material";
import { deleteAppointment } from "../../service/appointmentService";
import {
  addDonation,
  getDonationCenterIdByDonationCenterCityName,
} from "../../service/donationService";
import { useSelector } from "react-redux";
import { parseDate } from "../../common/helpers";
import useNotification from "../../common/hooks/useNotification";

const AppointmentTableRow = ({ row, refreshUI, cityName }) => {
  const { user } = useSelector((state) => state.userData);
  const { showNotification } = useNotification();
  console.log({ row });
  const handleCompleteAppointmentEvent = async () => {
    await deleteAppointment({ id: row.id });
    await refreshUI();
    let response = await getDonationCenterIdByDonationCenterCityName(cityName);
    const cityId = response.data;
    const dto = {
      userId: row.idUser,
      date: parseDate(new Date()),
      bloodType: row.bloodType,
      donationCenterId: cityId,
    };
    response = await addDonation(dto);
    if (response.status >= 200 && response.status < 300) {
      showNotification({
        severity: "success",
        message: "Donation completed successfully!",
      });
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong completing donation!",
      });
    }
  };

  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>

      <TableCell align="left">{row.bloodType}</TableCell>
      <TableCell align="left">{row.weight}</TableCell>
      <TableCell align="left">{row.birthDate}</TableCell>
      <TableCell align="left">{row.phoneNumber}</TableCell>

      <TableCell align="right" width="150px">
        <Tooltip title="Complete appointment">
          <IconButton onClick={() => handleCompleteAppointmentEvent()}>
            <DoneIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

AppointmentTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  refreshUI: PropTypes.func.isRequired,
};

export default AppointmentTableRow;
