import React, { useEffect ,useState,useRef} from 'react'

export default function IncreaseOrDecrease() {
    const [count, setCount] = useState(0);
    const previousCount = useRef(null);

    useEffect(() => { 
        previousCount.current = count;
    }, [count]);
  return (
    <div>
          <h1>count : {count}</h1>
          <br />
          <h1>Previouscount : {previousCount.current}</h1>
          <br />
          <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
          <br />
          <button onClick={()=>setCount(prev => prev - 1)}>Decrease</button>
          <br />
          <br />
          {previousCount.current !== null && ( previousCount.current > count ? <h1>Decreased</h1> : <h1>Increased</h1> )}
    </div>
  )
}
