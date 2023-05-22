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
    <>
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
                  {/* <MenuItem>Profile</MenuItem>
                  <MenuItem>Logout</MenuItem> */}
                  {/* </Menu> */}
                </IconButton>

                <Button sx={{ marginLeft: "auto" }} color="inherit">
                  <Link href="/api/auth/logout">Logout</Link>
                </Button>
              </div>
            ) : (
              <div>
                <Badge badgeContent={0} color="error" className="mr-8">
                  <NotificationsNoneOutlinedIcon />
                </Badge>
                <Button sx={{ marginLeft: "auto" }} color="inherit">
                  <Link href="/api/auth/login">Login</Link>
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <SideBar />
    </>
  );
};

export default Navbar;
