import React from 'react'
import './CardG.css'
const CardG = (props) => {
  return (
    
      <div className='cGdiv'>
      {/* <input  type='text' onChange={(e) =>{
        props.setName(e.target.value);
      }}></input> */}
      <p> name set variable inside  cardG is: {props.name} </p>
    </div>
   
  )
}

export default CardG

