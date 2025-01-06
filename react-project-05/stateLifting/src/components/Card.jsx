import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='cdiv'>
      <input  type='text' onChange={(e) =>{
        props.setName(e.target.value);
      }}></input>
      <p> name set variable inside  card is: {props.name} </p>
    </div>
  )
}

export default Card
