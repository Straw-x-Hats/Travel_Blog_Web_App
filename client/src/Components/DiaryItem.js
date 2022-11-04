import React from 'react'
import './style.css'
function DiaryItem(props) {
  const{title,description,image,location,date,user}=props.post
  return (
    <div>
      <div className='blog'>
        <div className='cards'>
          <h2>{title}</h2>
          <img className='img' src={image} ></img>
          <h2>{description}</h2>
          <h3> {user.name}</h3>
          <h3>{location}</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default DiaryItem