'use client'
import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <div>
      <AppBar className='bg-teal-500'>
        <Toolbar>
            <Typography>Dashboard</Typography>
            <Typography sx={{margin:"20px"}}>About</Typography>
            <Typography>List</Typography>
            <Button sx={{marginLeft: "auto"}} color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar