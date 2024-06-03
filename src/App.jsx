import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   const interval= setInterval(()=>{
      setCount(prevCount=>prevCount+1);
    },1000);

    return()=> clearInterval(interval);
  }, [])


  

  return (
    <>
      <p>count is {count}</p>
      <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
      </div>
    </>
  )
}

export default App
