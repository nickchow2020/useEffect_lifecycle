import React, {useEffect,useState,useRef} from "react";
import Button from "./Button";

const Timer = ()=> {
  const [second,setSecond] = useState(0)
  const [isStop,setIsStop] = useState(false)
  const [render,setRender] = useState(false)

  const intervalId = useRef()

  useEffect(()=>{
    intervalId.current = setInterval(()=>{
      setSecond(second => second + 1)
    },1000)
    
  },[render])


  const stopTimer = ()=> {
    clearInterval(intervalId.current)
    setIsStop(!isStop)
  }

  const reset = ()=> {
    setSecond(0)
    setIsStop(!isStop)
    setRender(!render)
  }


  return (
    <div className="componentDidmount">
      <h3>Example for ComponentDidmount</h3>
      <h2>{second} s</h2>
      <Button stopTimer={stopTimer} reset={reset} isStop={isStop}/>
    </div>
  )
}

export default Timer