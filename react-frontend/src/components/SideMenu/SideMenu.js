import React from "react";
import { useNavigate } from "react-router-dom";
import { SideMenuButton } from "./SideMenuButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import logo from "./logo.jpg";
import { useDispatch } from "react-redux";
import { logout } from "../../common/store/sliceUser";
import "./index.css";
import jsCookie from "js-cookie";
export const SideMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = jsCookie.get("Role");

  return (
    <div className="side-menu">
      <div className="header">
        <img src={logo} alt="Saving lives" />
      </div>
      <div className="side-menu-buttons">
        <SideMenuButton
          label="Dashboard"
          onClick={() => navigate("/dashboard")}
        >
          <DashboardIcon />
        </SideMenuButton>

        <SideMenuButton label="Profile" onClick={() => navigate("/profile")}>
          <PersonIcon />
        </SideMenuButton>
        {role === "admin" && (
          <>
            <SideMenuButton
              label="Requirements"
              onClick={() => navigate("/requirements")}
            >
              <EnhancedEncryptionIcon />
            </SideMenuButton>
            <SideMenuButton label="Users" onClick={() => navigate("/users")}>
              <PeopleAltIcon />
            </SideMenuButton>
            <SideMenuButton label="Topics" onClick={() => navigate("/topics")}>
              <AnnouncementIcon />
            </SideMenuButton>
          </>
        )}

        <SideMenuButton label="Centers" onClick={() => navigate("/centers")}>
          <DomainAddIcon />
        </SideMenuButton>

        <SideMenuButton
          label="Donations"
          onClick={() => navigate("/donations")}
        >
          <VolunteerActivismIcon />
        </SideMenuButton>
      </div>
      <div className="side-menu-logout">
        <SideMenuButton label="Logout" onClick={() => dispatch(logout())}>
          <LogoutIcon />
        </SideMenuButton>
      </div>
    </div>
  );
};
