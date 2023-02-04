import { Button } from "@mui/material";
import React from "react";

export const CustomButton = ({ secondary, text, submit, handleClick }) => {
  return (
    <Button
      variant={secondary ? "contained" : "outlined"}
      onClick={handleClick}
      type={submit && "submit"}
    >
      {text}
    </Button>
  );
};
