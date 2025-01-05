import { useState } from 'react'
import abhi from './assets/abhi.jpeg'
import aashish from './assets/aashish.jpeg'
import kanchan from './assets/mom.jpeg'
import viteLogo from '/vite.svg'
import './components/UserCard'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  // const [count, setCount] = useState(0)
 

  return (
    <div className='container'>
    
    {/* <h1>hello this is Abhishek.</h1> */}
<UserCard name="Abhishek Malviya" desc="Description 1" img={abhi} style={{"border-radius":"10px"}} />
<UserCard name="Aashish Malviya" desc="Description 2" img={aashish} style={{"border-radius":"10px"}} />
<UserCard name="Kanchan Malviya" desc="Description 3" img={kanchan} style={{"border-radius":"10px"}}  />

    </div>
  )
}

export default App
