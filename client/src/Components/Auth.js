import React from 'react'
import { Button, Input, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './style.css'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function Auth() {
  const isLoggedIn  = useSelector((state)=>state.isLoggedIn)

  console.log(isLoggedIn)
  const [isSignUp, setisSignUp] = useState(false)
  const [input, setinput] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    setinput(prev=>({
     ...prev,[e.target.name]:[e.target.value]
    
    })) 
 }
 const handleSubmit =(e)=>{
  e.preventDefault()
  if(!isSignUp){
    sendRequest("signup").then((data)=>console.log(data))
    
    .catch((e)=>console.log(e))
  }
  else{
    sendRequest().then((data)=>console.log(data))
    .catch((e)=>console.log(e))
  }
 
 }
  const sendRequest=async(type="login")=>{
  const res = await axios.post(`http://localhost:5000/user/${type}`,{
    name:input.name ? input.name:'',
    email:String(input.email),
    password:String(input.password),
   }).catch((e)=>console.log(e))
   const data = res.data
   
   return data 
  }
  return (
    <div>
      <div className='main'>
      <form onSubmit={handleSubmit}>
        <Box className='form' bgcolor='inherit'>
        <Typography  sx={{
          fontSize:30,
          fontWeight:900
  }}>{isSignUp? "Login":"SignUp"}</Typography>
    
    { !isSignUp &&    <TextField onChange={handleChange} name='name' value={input.name}   placeholder='name' sx={{width:400}}/>}
        <TextField onChange={handleChange} name='email' value={input.email}   type={'email'} placeholder='email' sx={{width:400}}/>
        <TextField onChange={handleChange} name='password' value={input.password}   type={'password'} placeholder='password' sx={{width:400}}/>
        <Button type='submit' variant='contained' color='warning'>Submit</Button>
        <Button  variant='outlined' onClick={()=>{setisSignUp(!isSignUp)}} >Change to {isSignUp? "SignUp":"Login"}</Button>
       
      </Box>
      </form>
 
    </div>
  
    </div>
  )
}

export default Auth