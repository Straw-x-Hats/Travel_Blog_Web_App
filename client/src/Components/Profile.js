import axios from 'axios'
import React from 'react'
import './style.css'
import { useState,useEffect } from 'react'
import DiaryItem from './DiaryItem'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const [users, setusers] = useState()
  const id = localStorage.getItem("userId")
  const getUserById = async()=>{
    const res = await axios.get(`http://localhost:5000/post/user/${id}`)
    .catch((e)=>console.log(e))
    const data = res.data
    return data
  }
  const handleLogout = async()=>{
   dispatch(authActions.logout())
   localStorage.removeItem("userId")
   navigate("/")
  }
  useEffect(() => {
    
   getUserById().then((data)=>setusers(data.user))
  
  
  }, [])
  
  return (
   <div>
    <h1>User Profile</h1>
    <div className='profile'>
    {users &&  <>
     
     <div>
     
      <p>Name:{users.name}</p>
      <p>Email:{users.email}</p>
      <Button color='warning' onClick={handleLogout} variant='contained' sx={{}}>LogOut</Button>
      </div>
      <div className='main'>
        <ul>
        {users.posts.map((post,i)=>{
          return(
            <DiaryItem post={post}/>
          )
        })}
        </ul>
        </div>
        
        </>}
    </div>
    </div>
  )
}

export default Profile