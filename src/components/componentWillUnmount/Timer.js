import React, {useState} from "react";
import SecondDisplay from "./SecondDisplay";

const Timer = ()=> {

  const [isRemove,setIsRemove] = useState(false)

  const handleDelete = ()=>{
    setIsRemove(!isRemove)
  }

  return (
    <div className="componentWillUnmount">
      <h3>Example for ComponentWillUnmount</h3>
      {
        isRemove ? null : <SecondDisplay />
      }
      <button onClick={handleDelete}>{isRemove ? "Add Timer Back" : "Delete Timer"}</button>
    </div>
  )
}

export default Timer