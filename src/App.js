import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const arr=[
     {
    name:"jenish",
    age:12,
    },
     {
    name:"aktilek",
    age:14,
    },
     {
    name:"erlan",
    age:15,
    },
     {
    name:"veko",
    age:17,
    },
  ]
  const[state,setState]=useState(" ")
  const inputvalue=(el)=>{
   setState(el.target.value)
  }
  const[state11,setState11]=useState(" ")
  const inputvalue11=(el)=>{
   setState11(el.target.value)
  }
  const[arres,setArres]=useState(arr)
  const fun=()=>{
    const obj={
      name:state,
      age:state11
    }
    console.log(obj);
setArres((prev)=>[... prev,obj])
  }
  return (
    <div className="App">
  
     {arres.map((el)=>{
      return(
      <Form keys={el.name} key1={el.age}/>)
     })}
 
     <input onChange={inputvalue}></input>
     <input onChange={inputvalue11}></input>
     <button onClick={fun}>add</button>
    </div>
  );
}

export default App;
