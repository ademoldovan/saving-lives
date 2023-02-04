import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import CenterTableRow from "./CenterTableRow";

const CenterTable = ({ data, refreshUI }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Address</strong>
            </TableCell>
            <TableCell align="left">
              <strong>City</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <CenterTableRow row={row} key={index} refreshUI={refreshUI} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
CenterTable.propTypes = {
  data: PropTypes.array.isRequired,
  refreshUI: PropTypes.func.isRequired,
};
export default CenterTable;
