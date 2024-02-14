import { useState } from "react";

export const Apps=()=>{
    const[Value,setValue]=useState(20);
    return(
      <div>
        <p>{Value}</p>
        <button onClick={()=>{Value>=25 ? setValue(Value+"Maximum limit reached"):setValue(Value+1)}}>increment value</button>
        <button onClick={()=>{setValue(Value-1)}}>decrement value</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
      </div>
    )
  }
