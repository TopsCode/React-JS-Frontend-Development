/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    /* Get value from url using of useParams */

    let data = useParams();
    // we can also destructure it like 
    // let {name} = useParams(); 
  return (
    <div>
      <h1>Contact</h1>
      <h2>{data.subject}</h2>
    </div>
  )
}
