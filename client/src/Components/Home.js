import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Auth from './Auth'
function Home() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  return (
    <div className='home'>
        <img src="./travel.jpg"></img>
        <div class="text">The way to get started is to quit talking and begin doing</div>
        <p>Share your travel diaries with us</p>
        <div className='btn'>
        { isLoggedIn && <>    <Button variant='outlined' >SHARE</Button>
            <Button LinkComponent={Link} to='diary' variant='contained'>VIEW DIARIES</Button>
            </>
         }
         { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained'>SignUp</Button>
         
         </>
         }
        </div>
   </div>
  )
}

export default Home