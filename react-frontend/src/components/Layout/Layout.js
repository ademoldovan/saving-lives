import React from "react";
import { SideMenu } from "../SideMenu/SideMenu";
import "./index.css";
export const Layout = ({ children }) => {
  return (
    <div className="window">
      <div className="sideMenu">
        <SideMenu />
      </div>
      <div className="pages">{children}</div>
    </div>
  );
};
