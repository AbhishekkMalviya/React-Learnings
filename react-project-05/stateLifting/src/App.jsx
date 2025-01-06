import { useState } from "react"
import Card from "./components/Card"
import './App.css'
import CardG from "./components/CardG";

function App() {

  //create state 
  //manage state
  //change state
  //and then sync the state in every child.
 const[name , setName]= useState('');
  return (
    <div className="adiv">
      <p>I am inside parent component and name is: {name}</p>
  <Card name={name} setName={setName} />
  

  <CardG name={name} setName={setName}/>
    </div>

  )
}

export default App
