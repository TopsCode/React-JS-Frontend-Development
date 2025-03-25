import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GET_USER_2() 
{
    const [users,setUsers] = useState([]);
    
    const fetchData=async()=>{
        try {
            const response =await axios.get("http://localhost:5000/users");
            setUsers(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
            <div style={{margin:"30px"}}>
            ALL USERS : 
                <ul>
                    {
                        users.map((user,index)=>{
                            return <li key={user.id}>{user.name} | {user.subject}</li>
                        })
                    }   
                </ul>
            </div>
  )
}
