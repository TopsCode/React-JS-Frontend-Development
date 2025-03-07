import React from 'react'

export default function CHILDExample1(propsData) 
{
  return (
    <div>
        <h3>Your name is {propsData.name}</h3>
        <h3>Your Subject is  {propsData.subject}</h3>
    </div>
  )
}
