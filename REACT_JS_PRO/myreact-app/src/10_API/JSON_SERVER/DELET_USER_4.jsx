import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.css";

export default function DELET_USER_4() {
    const [users,setUsers]  = useState([]);

    const fetchData=async()=>{
        try {
            const response =await axios.get("http://localhost:5000/users");
            console.log("----->>>>",response.data);
            setUsers(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const handleDelete = async(user)=>{
        try {
            await axios.delete(`http://localhost:5000/users/${user.id}`)
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>

        <div style={{margin:"30px"}}>
            ALL USERS : 
                <table border={2}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SUBJECT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user,i) =>{
                            return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.subject}</td>
                                    <td><button onClick={()=>handleDelete(user)}>DELETE</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </div>
    </div>
  )
}
