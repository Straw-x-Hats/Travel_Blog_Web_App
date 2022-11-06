import React from 'react'
import {AppBar, Toolbar,Tabs,Tab} from '@mui/material'
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
    const isLoggedIn = useSelector((state)=>state.isLoggedIn)
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar position="sticky" sx={{
           bgcolor:"transparent"
        }}>
            <Toolbar>
            <ModeOfTravelIcon sx={{
                bgcolor:"black"
            }}/>
            <Tabs value={value} onChange={(e,val)=>{
             setvalue(val)
        }} sx={{ml:"auto"}}  >
       <Tab LinkComponent={Link} to="/" label="Home"/>
           {isLoggedIn && <Tab LinkComponent={Link} to="/diary" label="Diarys"/>}
           {isLoggedIn && <Tab LinkComponent={Link} to="/add" label="Add"/>}
           {isLoggedIn && <Tab LinkComponent={Link} to="/profile" label="Profile"/>}
            {!isLoggedIn && <Tab LinkComponent={Link} to="/auth" label="Auth"/>}
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header