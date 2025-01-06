import React from 'react'
import abhi from '../assets/abhi.jpeg';
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.img} alt={props.name} style={props.style}></img>
      <p id='user-desc'> {props.desc} </p>
    </div>
  )
}

export default UserCard
