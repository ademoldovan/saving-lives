import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { TextField } from "@mui/material";

const CenterTableRow = ({ row, refreshUI }) => {
  const [edit, setEdit] = useState(false);
  const [client, setClient] = useState({
    name: "",
    address: "",
    city: "",
  });

  const { name, address, city } = client;

  useEffect(() => {
    setClient(row);
  }, []);

  const handleEditEvent = () => {
    setEdit(!edit);
  };
  const handleInputChange = (column, newData) => {
    setClient({ ...client, [column]: newData });
  };

  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {edit ? (
          <TextField
            isRequired
            variant="standard"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        ) : (
          name
        )}
      </TableCell>

      <TableCell align="left">
        {edit ? (
          <TextField
            isRequired
            variant="standard"
            value={address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        ) : (
          address
        )}
      </TableCell>
      <TableCell align="left">
        {edit ? (
          <TextField
            isRequired
            variant="standard"
            value={city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        ) : (
          city
        )}
      </TableCell>
    </TableRow>
  );
};

CenterTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  refreshUI: PropTypes.func.isRequired,
};

export default CenterTableRow;
