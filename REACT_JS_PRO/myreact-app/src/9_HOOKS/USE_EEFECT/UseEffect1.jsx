import React, { useEffect } from 'react'

export default function UseEffect1() {
    useEffect(() => {
        console.log("Component rendered or re-rendered");
    });
      
  return (
    <div>UseEffect1</div>
  )
}
