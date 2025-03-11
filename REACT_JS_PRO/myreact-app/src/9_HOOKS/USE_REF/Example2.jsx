import React, { useEffect, useRef, useState } from 'react'

export default function Example2() {

    const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);
  
    useEffect(() => {
      
        prevCountRef.current = count;

    }, [count]); // Runs after every update
  
    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h2>Previous Count: {prevCountRef.current}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
