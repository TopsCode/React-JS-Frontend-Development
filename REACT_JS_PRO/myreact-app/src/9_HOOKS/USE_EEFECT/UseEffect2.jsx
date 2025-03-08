import React, { useEffect } from 'react'

export default function UseEffect2() {
    useEffect(() => {
        console.log("Component mounted");
      
        return () => {
          console.log("Component unmounted");
        };
    }, []);

  return (
    <div>UseEffect2</div>
  )
}
