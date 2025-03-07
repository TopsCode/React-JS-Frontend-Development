import React, { useState } from 'react'

export default function State_example() {
    const [count,setCount] = useState(0); // default value 0 

    const handlerIncrement=()=>{
        setCount(count+1);
    }
    const handlerDecrement=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <button onClick={()=> handlerIncrement()}>Increment</button>
            <h3>{count}</h3>
            <button onClick={()=> handlerDecrement()}>Decrement</button>
        </div>
    )
}
