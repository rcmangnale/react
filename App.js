import logo from './logo.svg';
import './App.css';
import Timers from'./Timers';
import Timer from './Timer'
import React,{useState} from 'react';


const App = () => {

  const [name,setName] = useState("")
  const [name2,setName2] = useState("")

  const updateName = (n) =>{
    setName(n)
  }

  const updateName2 = (n) =>{
    setName2(n)
  }

  return (
    <>
      <div ><h1>Screen</h1></div>
      
      <Timers name ={name} updateName={(v)=>{updateName(v)}} />
      <Timer  name ={name2} updateName={(v)=>{updateName2(v)}} />
    </>
    
  )
}

export default App;
