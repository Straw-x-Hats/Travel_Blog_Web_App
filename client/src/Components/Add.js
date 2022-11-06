import React from 'react'
import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { borderColor, Box, padding } from '@mui/system'
function Add() {
    
  return (
    <div className='form2'>
    <form>
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
        <TextField  name='title' sx={{
          height:100,
          width:500
        
        }}/>
        <InputLabel>Description</InputLabel>
        <TextField  name='description'sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Image_Url</InputLabel>
        <TextField  name='image' sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Location</InputLabel>
        <TextField  name='image' sx={{
          height:100,
          width:500
        }}/>
        <InputLabel>Date</InputLabel>
        <TextField  name='image' sx={{
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