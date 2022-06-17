import React from "react";

const Button = ({stopTimer,isStop,reset})=> {
  return (
    <>
    {
      isStop 
      ? <button onClick={reset}>Reset</button>
      : <button onClick={stopTimer}>Stop</button> 
    }
    </>
    
  )
}

export default Button