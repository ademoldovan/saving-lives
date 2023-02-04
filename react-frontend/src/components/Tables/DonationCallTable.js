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

const DonationCallTable = ({ data, openAppModal, donationTime }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Blood type</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Registered at</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Available until</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Donation center</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <DonationCallTableRow
              row={row}
              key={index}
              openAppModal={openAppModal}
              donationTime={donationTime}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
DonationCallTable.propTypes = {
  data: PropTypes.array.isRequired,
  refreshUI: PropTypes.func.isRequired,
  openAppModal: PropTypes.func.isRequired,
};
export default DonationCallTable;
