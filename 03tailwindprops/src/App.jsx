import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
      username: "Gautam", 
      age: 21
    }

  let newArr= [1,2,3]

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username="Gautam" btn = "click me"/* someObj = {myobj} newArr = {newArr} *//>
      <Card username= "Dheerav" btn = "visit me"/>
    </>
  )
}

export default App
