import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;
  let [counter,setCounter] = useState(15)

  const addValue = () =>{
    console.log("clicked",counter)
    if(counter>=20)
      return;
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = () =>{
    if(counter<=0)
      return;
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter Project !</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
