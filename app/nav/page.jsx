"use client";
import React from "react";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import BiSearchAlt from "react-icons";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import "./nav.scss";
import SideBar from "../sidebar/page";

const Navbar = () => {
  const { user, isLoading, error } = useUser();

  return (
    <div>
      <div>
        <AppBar position="static" className="navbar">
          <Toolbar className="toolbar">
            <div className="left-navdiv">
              <img className="logo1" src="logo-light.png" />
              <div className="searchDiv">
                <SearchOutlinedIcon className="text-gray-200 p-  2" />
                <input placeholder="Search..." className="searchInp" />
              </div>
              {/* <Button color="inherit" className="px-6">
              About
            </Button>
            <Button color="inherit">List</Button> */}
            </div>

            {user ? (
              <div className="profile-div">
                <Badge badgeContent={17} color="error" className="mr-8">
                  <NotificationsNoneOutlinedIcon />
                </Badge>

                <IconButton href="/profile">
                  {/* <Menu> */}
                  <img
                    src={user.picture}
                    width={40}
                    height={40}
                    alt="user picture"
                    className="rounded-full mr-4"
                  />
                </IconButton>

                <Button sx={{ marginLeft: "auto" }} color="inherit">
                  <a href="/api/auth/logout">Logout</a>
                </Button>
              </div>
            ) : (
              <div>
                <Badge badgeContent={0} color="error" className="mr-8">
                  <NotificationsNoneOutlinedIcon />
                </Badge>
                <Button sx={{ marginLeft: "auto" }} color="inherit">
                  <a href="/api/auth/login">Login</a>
                </Button>
                {/* <Button sx={{ marginLeft: "auto" }} color="inherit">
                  <a href="https://dev-dln121zygrcco352.us.auth0.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBBUW9XNF8zcUdIYkctSWpwVDFsaGZmWDRjcDF4c2NSR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGUtemlfMDVwSTd0T2NOdVlySUhCNWNJN1ZUSGRtMkxmo2NpZNkgWlBTaGw3R2dLMGkxakc3MHJBVFhZWnZMUERBYWU3RVI">
                    forgot password
                  </a>
                </Button> */}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />
      <div className="dash-bottom-div">
        <h1>DASHBOARD</h1>
        <p>Welcome to Qovex Dashboard</p>
      </div>
      <br />
      <br />
      {/* <SideBar /> */}
    </div>
  );
};

export default Navbar;
