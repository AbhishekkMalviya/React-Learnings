
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn';

function App() {
  
 const [isLoggedIn,setLoggedIn] = useState(true);
//---------------------------------------------------

//  //IF-ELSE CONDITIONAL RENDERING
//  if(isLoggedIn){
//   return(
//     <LogoutBtn></LogoutBtn>
//   )
//  }
//  else{
//   return(
//     <LoginBtn></LoginBtn>
//   )
//  }
//---------------------------------------------------

//TERNARY OPERATION CONDITIONAL RENDERING
// return(
//   <div>
//     {isLoggedIn? <LogoutBtn/> : <LoginBtn/>}
//   </div>
// )
//---------------------------------------------------

//LOGICAL OPERATION CONDITIONAL RENDERING
// return(
//   <div>
//     {isLoggedIn && <LogoutBtn/>}
//   </div>
//   )
//---------------------------------------------------

//EARLY RETURN CONDITIONAL RENDERING
if(!isLoggedIn)
return(
  <div>
    {<LoginBtn/>}
  </div>
)
return(
  <div>
    {isLoggedIn && <LogoutBtn/>}
  </div>
  )
//---------------------------------------------------

}

export default App
