import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import DonationCallTableRow from "./DonationCallTableRow";
import AppointmentTableRow from "./AppointmentTableRow";

const AppointmentTable = ({ data, refreshUI, cityName }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Blood type</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Weight</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Birth date</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Phone number</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <AppointmentTableRow
              row={row}
              key={index}
              refreshUI={refreshUI}
              cityName={cityName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
AppointmentTable.propTypes = {
  data: PropTypes.array.isRequired,
  refreshUI: PropTypes.func.isRequired,
};
export default AppointmentTable;
