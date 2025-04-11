/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    let name = "Networking";
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Click Here for <NavLink to={"/about"}>About us</NavLink> page</h2>
      <h3>Contact Us <button onClick={()=>navigate("/contact/software")}>Software</button></h3>
      <h3>Contact Us <button onClick={()=>navigate(`/contact/${name}`)}>H/N</button></h3>
    </div>
  )
}
