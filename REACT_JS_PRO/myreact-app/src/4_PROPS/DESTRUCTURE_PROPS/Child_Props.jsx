import React from 'react'

export default function Child_Props({name,subject,city}) {
  return (
    <div>
        <p>Name : {name}</p>
        <p>Subject : {subject}</p>
        <p>City : {city}</p>
    </div>
  )
}
