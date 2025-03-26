import axios from 'axios';
import React, { useState } from 'react'
import ViewProducts from './ViewProducts';
import CategoryWiseProducts from './CategoryWiseProducts';

export default function GetUser() {
    const [users,setUsers] = useState([]);
    const [details,setDetails] = useState({email : "",password:""});

    const handleLogin=async(e)=>{
        e.preventDefault();
        const {email,password} = details;
        try {
            const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`)
            setUsers(response.data);
            
            console.log("---->>> users",response.data);

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        {users.length > 0  
            ?
            <div style={{margin:"30px"}}>
                <h1>Welcome {users[0].name}</h1>

                <CategoryWiseProducts/>
            </div>
            
            :
        
            <form onSubmit={handleLogin}>
                
                <label>email : </label>

                <input 
                value={details.email}
                onChange={(e)=>setDetails({...details,email:e?.target?.value})}
                required
                />
                <label>password : </label>

                <input 
                value={details.password}
                onChange={(e)=>setDetails({...details,password:e?.target?.value})}
                required
                />
                <button type='submit'>Submit</button>
            </form>
        }
    </div>
  )
}
