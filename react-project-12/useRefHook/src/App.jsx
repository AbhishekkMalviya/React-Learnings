
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [count,setCount]=useState(0);
  let val = useRef(0);
  let btnRef=useRef();
  function handleIncrement(){
    val.current=val.current+1;
    console.log("value of val:",val);
    setCount(count+1);
  }
useEffect(()=>{
  console.log("mai(useEffect) firse render ho raha hu");
})

function changeColor(){
  btnRef.current.style.backgroundColor="red";
}
  return (
    <>
      <div>
        <button ref={btnRef}  onClick={handleIncrement}>Increment</button>
      </div>
      <br/>
      <div>count: {count} </div>
    <button onClick={changeColor}>change color of inc. button:)</button>
     
    </>
  )
}

export default App
