import React from 'react'
import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { borderColor, Box, padding } from '@mui/system'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Add() {
  const navigate = useNavigate()
  const [input, setinput] = useState({
    title:'',
    description:'',
    image:'',
    location:'',
    date:''
  })

  const handleChange=(e)=>{
    setinput(prev=>({
     ...prev,[e.target.name]:[e.target.value]
    
    })) 
 }

 const handleSubmit=(e)=>{
  e.preventDefault()
  sendRequest().then((data)=>console.log(data)).then(()=>navigate("/diary"))
 }
 const sendRequest=async()=>{
  const res = await axios.post('http://localhost:5000/post/add',{
    title:String(input.title),
     description:String(input.description),
     image:String(input.image),
     location:String(input.location),
     date:String(input.date),
     user:localStorage.getItem("userId")
   }).catch((e)=>console.log(e))
   const data = res.data
   
   return data 
  }
  return (
    <div className='form2'>
    <form onSubmit={handleSubmit}>
      <Box clasName='formBox' sx={{
       display:'flex',
       justifyContent:"center",
       alignItems:'center',
       flexDirection:"column",
       height:600,
       width:600,
       marginTop:10,
       boxShadow:"10px 10px 5px  #c7c7e6",
      
      }}>
        <Typography variant='h3'>Add Your Travel Diary</Typography>
        <InputLabel >Title</InputLabel>
        <TextField onChange={handleChange} value={input.title}  name='title' sx={{
          height:100,
          width:500
        
        }}/>
        <InputLabel>Description</InputLabel>
        <TextField onChange={handleChange} value={input.description}  name='description'sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Image_Url</InputLabel>
        <TextField onChange={handleChange} value={input.image}  name='image' sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Location</InputLabel>
        <TextField onChange={handleChange} value={input.location}  name='location' sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Date</InputLabel>
        <TextField onChange={handleChange}  value={input.date} name='date' sx={{
          height:100,
          width:500
        }}/>
        <Button type='submit' variant="contained">Submit</Button>
      </Box>
    </form>
  </div>
)
  
}

export default Add