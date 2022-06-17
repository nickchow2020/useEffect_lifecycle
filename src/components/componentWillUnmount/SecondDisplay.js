import React, {useEffect,useState,useRef} from "react";


const SecondDisplay = ()=> {
  const [second,setSecond] = useState(0)

  const intervalId = useRef()
  const currentSecond = useRef()

  useEffect(()=>{
      intervalId.current = setInterval(()=>{
        setSecond(second => second + 1)
      },1000)

      return ()=> {
        alert(`Timer unmount at ${currentSecond.current} s`)
        clearInterval(intervalId.current)
      }
  },[])

  currentSecond.current = second

  return (
    <>
      <h2>{second} s</h2>
    </>
  )
}

export default SecondDisplay