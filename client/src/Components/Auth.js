import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './style.css'
function Auth() {
  return (
    <div>
      <div className='main'>
      <form >
        <Box className='form' bgcolor='inherit'>
        <Typography  sx={{
          fontSize:30,
          fontWeight:900
  }}>Login</Typography>
    
       <TextField name='name'   placeholder='name' sx={{width:400}}/>
        <TextField name='email'   type={'email'} placeholder='email' sx={{width:400}}/>
        <TextField name='password'   type={'password'} placeholder='password' sx={{width:400}}/>
        <Button type='submit' variant='contained' color='warning'>Submit</Button>
        <Button type='submit' variant='outlined' >Change to SignUP</Button>
       
      </Box>
      </form>
 
    </div>
  
    </div>
  )
}

export default Auth