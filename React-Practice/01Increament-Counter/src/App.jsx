import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [start,setStart]=useState(false);
  const timerIdRef = useRef(null);


  useEffect(()=>{
    if(start){
      timerIdRef.current = setTimeout(()=>{
        setCount(count +1)
      },1000)
    }

    ()=>{
      clearTimeout(timerIdRef.current)
    }
  },[count,start])

  const onStart = ()=>{
    setStart(true)
  }

  const onStop = ()=>{
    clearTimeout(timerIdRef.current);
    setStart(false)
  }
  
  return (
    <>
    <p>Count:{count}</p>
    <button onClick={onStart}>Start</button>
    <button onClick={onStop}>Stop</button>
    </>
  )
}

export default App
