import React from 'react'
import {getAllPost} from './Helpers'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import DiaryItem from './DiaryItem'
function Diaries() {
   
  const [post, setpost] = useState()


   
     
     

  
    useEffect(() => {
      
      getAllPost().then((data)=>setpost(data.post))
      console.log(post)
    }, [])
    

  return (
    <div>
    
    {post && post.map((post,i)=>{
      return(

        <DiaryItem post={post}/>
      )
    })}

    </div>
  )
}

export default Diaries