import React from 'react'

export default function JSXExample1() {
    const subject = "React js";
    const score = 89;

  return (
    <div>
        <h1>Hello your subject is {subject} </h1>
        <h3>Your score is {score}</h3>

        <button onClick={()=> alert("Hello jsx")}>Click Here</button>
    </div>
  )
}
