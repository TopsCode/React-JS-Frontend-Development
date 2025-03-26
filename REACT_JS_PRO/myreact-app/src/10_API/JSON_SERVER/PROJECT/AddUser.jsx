import axios from 'axios';
import React, { useState } from 'react'

export default function AddUser() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    /*
            in db.json 

            {
                "users" : []
            }

            for endpoint execute same location below command 
            #npx json-server --watch db.json --port 5000
    */
    const handleSubmitForm=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users",{
                name,email
            })
            alert("Successfully record added")
        } catch (error) {
            
        }
    }

  return (
    <div>
          <form onSubmit={handleSubmitForm}>
            <label>Name : </label>
            <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e)=>setName(e?.target?.value)}
            required
            />
            
            <label>email : </label>

            <input 
            value={email}
            onChange={(e)=>setEmail(e?.target?.value)}
            required
            />
            <label>password : </label>

            <input 
            value={password}
            onChange={(e)=>setPassword(e?.target?.value)}
            required
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
