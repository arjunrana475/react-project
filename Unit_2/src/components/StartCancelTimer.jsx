import React ,{useRef} from 'react'

export default function StartCancelTimer() {
    const timerRef = useRef(null);

    function StartTimer() {
        if (timerRef.current !== null) return;
        timerRef.current = setInterval(() => {
            console.log("TICK");
        },5000)
    }
    function EndTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
    
  return (
      <div>
          <button onClick={StartTimer}>Start </button>
          <br />
          <button onClick={EndTimer}>End</button>
    </div>
  )
}
