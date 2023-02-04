import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export const CustomTextField = ({
  className,
  label,
  handleChange,
  value,
  type,
  required,
  multiline,
}) => {
  // const [showPassword, setShowPassword] = useState(!password);
  // const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      className={className}
      required={required}
      fullWidth
      type={type}
      label={label}
      value={value}
      variant="outlined"
      onChange={handleChange}
      multiline={multiline}
      maxRows={4}
    />
  );
};
// endAdornment={
//   <InputAdornment position="end">
//     <IconButton
//       aria-label="toggle password visibility"
//       onClick={handleClickShowPassword}
//       edge="end"
//     >
//       {showPassword ? <VisibilityOff /> : <Visibility />}
//     </IconButton>
//   </InputAdornment>
//}
