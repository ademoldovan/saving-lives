import { Button } from "@mui/material";
import React from "react";
import "./index.css";

export const SideMenuButton = ({ children, label, onClick }) => {
  return (
    <>
      <Button size="large" variant="outlined" onClick={onClick}>
        <div className="side-menu-button">
          {children}
          {label}
        </div>
      </Button>
    </>
  );
};
