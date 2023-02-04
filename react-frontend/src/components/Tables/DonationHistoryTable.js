import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import DonationHistoryTableRow from "./DonationHistoryTableRow";

const DonationHistoryTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Donation center</strong>
            </TableCell>

            <TableCell align="center">
              <strong>City</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <DonationHistoryTableRow row={row} key={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
DonationHistoryTable.propTypes = {
  data: PropTypes.array.isRequired,
  refreshUI: PropTypes.func.isRequired,
};
export default DonationHistoryTable;
