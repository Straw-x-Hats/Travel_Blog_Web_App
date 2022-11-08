import React from 'react'
import './style.css'
import EditIcon from '@mui/icons-material/Edit';
import { Alert, AlertTitle, Icon, IconButton, Snackbar } from '@mui/material';
import { Link,  useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';
function DiaryItem(props) {
  
  const [open, setopen] = useState(false)
  const navigate = useNavigate()
  const{title,description,image,location,date,user,_id}=props.post
  const handleDelete=async()=>{
    const res = await axios.delete(`http://localhost:5000/post/${_id}`)
    .catch((e)=>console.log(e))
  
    .then(()=>navigate("/"))
    .then(()=>navigate("/diary"))
    setopen(true)
    
    const data = res.data;
    console.log(data);
  }

 

  return (
    <div>
     
      
        <div className='cards'>
          <h2>{title}</h2>
          <img className='img' src={image} ></img>
          <h2>{description}</h2>
          <h3> {user.name}</h3>
          <h3>{location}</h3>
          <p>{date}</p>
          <div className='icon'>
          <IconButton LinkComponent={Link} to={`/post/${_id}`}>
             <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
             <DeleteIcon />
          </IconButton>   
          </div>      

      </div>
       
    
      <Snackbar open={open} autoHideDuration={6000} onClose={()=>setopen(false)}>
        <Alert onClose={()=>setopen(false)} severity="success" sx={{ width: '100%' }}>
         Deleted!!!!!!
        </Alert>
     </Snackbar>

          
    </div>
    
  )
}

export default DiaryItem