"use client";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/material";
import AirplayIcon from "@mui/icons-material/Airplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import React from "react";

import "./sidebar.scss";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const SideBar = () => {
  const { user, isLoading, error } = useUser();
  return (
    <div className="containar" style={{ marginTop: "100px" }}>
      <CssBaseline />
      <Drawer variant="persistent" open={true} className="drawer">
        <Toolbar />
        <List className="ListBar">
          {user ? (
            <>
              <div className="imgDiv">
                <ListItem>
                  <img
                    src={user.picture}
                    alt="user picture"
                    className="bar-img"
                  />
                </ListItem>
              </div>
              <ListItemText className="text-center">UX/UI Desiner</ListItemText>
            </>
          ) : (
            <div className="imgDiv">
              <ListItem>
                <img
                  src="avatar-48.png"
                  alt="user picture"
                  className="bar-img"
                />
              </ListItem>
            </div>
          )}
          <ListItem>
            <ListItemButton>
              <AirplayIcon className="mr-2" />
              <a href="/dashboard">
                <ListItemText>Dashboard</ListItemText>
              </a>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <AccountCircleOutlinedIcon className="mr-2" />
              <ListItemText>Page</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <CalendarMonthIcon className="mr-2" />
              <ListItemText>Calender</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <BallotOutlinedIcon className="mr-2" />

              <ListItemText>Table</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <AccountCircleOutlinedIcon className="mr-2" />
              <ListItemText>Page</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <CalendarMonthIcon className="mr-2" />
              <ListItemText>Calender</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
