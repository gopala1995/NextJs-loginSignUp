import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AirplayIcon from '@mui/icons-material/Airplay';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div>
      <Drawer anchor="left" variant="persistent" open={open} className="drawer">
        <List>
          <AirplayIcon />
          <ListItem>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          <AccountCircleOutlinedIcon />
          <ListItem>
            {" "}
            <ListItemText>Page</ListItemText>
          </ListItem>

          <CalendarMonthIcon />
          <ListItem>
            {" "}
            <ListItemText>Calender</ListItemText>
          </ListItem>
          <BallotOutlinedIcon />
          <ListItem>
            {" "}
            <ListItemText>Table</ListItemText>
          </ListItem>
        </List>

        <div>
          <IconButton></IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
