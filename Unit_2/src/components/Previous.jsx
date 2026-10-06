import React, { useEffect, useRef, useState } from 'react'

export default function Previous() {
    const [count, setCount] = useState(0);
    const render = useRef(1);
     
    useEffect(() => {
        render.current++;
    }, [count]);
 
  return (
    <div>
          <h1>Current count : {count}</h1>
          <br />
          <h2>Renders :{render.current}</h2>
          <br /><br />
          <button onClick={()=>setCount(prev=>prev+1)}>Increase </button>
    </div>
  )
}
