import React from 'react'

const Counter = (props) => {
  return (
    <div>
      {props.children}

      <button onClick={props.handleClick}>
        {props.text}
        </button>
    </div>



  )
}

export default Counter
