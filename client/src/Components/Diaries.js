import React from 'react'
import {getAllPost} from './Helpers'
import { useEffect } from 'react'
function Diaries() {
  
    useEffect(() => {
      getAllPost().then((data)=>console.log(data))
    }, [])
    

  return (
    <div></div>
  )
}

export default Diaries