import React from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const DonationHistoryTableRow = ({ row }) => {
  const { date, donationCenter, city } = row;

  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {date}
      </TableCell>

      <TableCell align="left">{donationCenter}</TableCell>
      <TableCell align="left">{city}</TableCell>
    </TableRow>
  );
};

DonationHistoryTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  refreshUI: PropTypes.func.isRequired,
};

export default DonationHistoryTableRow;
