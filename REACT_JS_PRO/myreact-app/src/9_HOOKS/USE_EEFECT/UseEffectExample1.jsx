import React from 'react'
import { useState, useEffect } from "react";

export default function UseEffectExample1() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array = run only once (on mount)
  
    return <p>Seconds: {seconds}</p>;
}

