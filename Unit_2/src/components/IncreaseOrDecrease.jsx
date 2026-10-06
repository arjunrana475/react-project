import React, { useEffect, useState, useRef } from 'react'
import usePrevious from '../hooks/usePrevious';

export default function IncreaseOrDecrease() {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

  return (
    <div>
          <h1>count : {count}</h1>
          <br />
          <h1>Previouscount : {previousCount}</h1>
          <br />
          <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
          <br />
          <button onClick={()=>setCount(prev => prev - 1)}>Decrease</button>
          <br />
          <br />
          {previousCount !== null && ( previousCount> count ? <h1>Decreased</h1> : <h1>Increased</h1> )}
    </div>
  )
}
