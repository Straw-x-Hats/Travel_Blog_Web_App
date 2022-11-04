import React from 'react'
import {getAllPost} from './Helpers'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import DiaryItem from './DiaryItem'
import './style.css'

function Diaries() {
   
  const [post, setpost] = useState()


   
     
     

  
    useEffect(() => {
      
      getAllPost().then((data)=>setpost(data.post))
      console.log(post)
    }, [])
    

  return (
    <div className='main'>
    <ul>
    {post && post.map((post,i)=>{
      return(

        <DiaryItem post={post}/>
      )
    })}
</ul>
    </div>
  )
}

export default Diaries