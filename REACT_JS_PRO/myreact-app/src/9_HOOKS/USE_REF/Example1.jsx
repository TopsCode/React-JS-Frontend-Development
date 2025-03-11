import React, { useRef } from 'react'

export default function Example1() {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Type something" />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    );
}