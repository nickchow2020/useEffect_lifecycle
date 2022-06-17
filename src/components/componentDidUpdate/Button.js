import React from "react";

const Button = ({handleCount,isStart,addSecond})=> {
  return (
    <>
    {
      isStart 
      ? <button onClick={()=>handleCount(false)}>Stop</button>
      : <button onClick={()=>handleCount(true)}>Start</button> 
    }

    <button onClick={()=>addSecond(10)}>add 10s</button> 
    <button onClick={()=>addSecond(20)}>add 20s</button> 
    </>
    
  )
}

export default Button