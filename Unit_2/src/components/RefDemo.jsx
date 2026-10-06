import React, { useState ,useRef} from 'react'

export default function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  function handleClear() {
    inputRef.current.value="";
  }

  return (
    <div>
      <input type="text" ref={inputRef}  />
      <button onClick={handleFocus}> Focus Input</button>
      <button onClick={handleClear}> Clear</button>
          
    </div>
  )
}
