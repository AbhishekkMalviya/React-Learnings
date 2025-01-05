import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (


    <div>
      <Counter handleClick={handleClick} text="click here">
        {count}
      </Counter>
    </div>
  )

  
}

export default App
