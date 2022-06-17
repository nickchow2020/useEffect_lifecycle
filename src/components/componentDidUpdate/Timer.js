import React, {useEffect,useState,useRef} from "react";
import Button from "./Button";

const Timer = ()=> {
  const [second,setSecond] = useState(0)
  const [startCount,setStartCount] = useState(false)
  const [isStart,setIsStart] = useState(false)

  const intervalId = useRef()

  useEffect(()=>{
    if(startCount){
      intervalId.current = setInterval(()=>{
        setSecond(second => second + 1)
      },1000)
    }else{
      clearInterval(intervalId.current)
    }
  },[startCount])


  const handleCount = (isStart)=> {
    setStartCount(isStart)
    setIsStart(isStart)
  }

  const addSecond = (second)=> {
    setSecond(current => current + second)
  }


  return (
    <div className="componentDidUpdate">
      <h3>Example for componentDidUpdate</h3>
      <h2>{second} s</h2>
      <Button handleCount={handleCount} isStart={isStart} addSecond={addSecond}/>
    </div>
  )
}

export default Timer