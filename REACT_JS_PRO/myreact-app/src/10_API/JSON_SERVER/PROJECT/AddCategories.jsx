import axios from 'axios';
import React, { useState } from 'react'

export default function AddCategories() {

    const [name,setName] = useState("");
    

    /*
            in db.json 

            {
                "categories" : []
            }

            for endpoint execute same location below command 
            #npx json-server --watch db.json --port 5000
    */
    const handleSubmitForm=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/categories",{
                name
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
            
           
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
