"use client";
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Navbar = () => {
  const { user, isLoading, error } = useUser();


  return (
    <div>
      <AppBar>
        <Toolbar className="justify-between">
          <div className="flex flex-row px-2">
            <Button color="inherit" href="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" className="px-6">
              About
            </Button>
            <Button color="inherit">List</Button>
          </div>

          {user ? (
            <div className="flex flex-row justify-between">
              <a href="/profile">
                <img
                  src={user.picture}
                  width={40}
                  height={40}
                  alt="user picture"
                  className="rounded-full mr-4"
                />
              </a>

              <Button sx={{ marginLeft: "auto" }} color="inherit">
                <Link href="/api/auth/logout">Logout</Link>
              </Button>
            </div>
          ) : (
            <Button sx={{ marginLeft: "auto" }} color="inherit">
              <Link href="/api/auth/login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
