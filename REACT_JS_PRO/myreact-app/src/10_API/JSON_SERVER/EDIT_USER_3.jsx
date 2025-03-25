import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import "./style.css"

export default function EDIT_USER_3() {
    const [users,setUsers] = useState([]);

    /* ---- for edit record  ---- */
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");

    const [editUser,setEditUser] = useState(null);
    
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


    const handleEditUser =async(user)=>{
        setName(user.name)
        setSubject(user.subject)

        setEditUser(user);
    }

    const handleUpdateUser = async(e) =>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${editUser.id}`,{
                name : name,
                subject : subject
            });
            
            fetchData();

            setName("");
            setSubject("");
        } catch (error) {
            console.log(error);
            
        }
    }

    return (

        <>
            <div style={{margin:"30px"}}>
                <form onSubmit={handleUpdateUser}>
                    <input
                        type='text'
                        placeholder='Enter name '
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        />

                    <input 
                        type='text'
                        placeholder='Enter subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        />

                    <button type='submit'>Update</button>

                </form>
            </div>

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
                                    <td><button onClick={()=>handleEditUser(user)}>Edit</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </div>
        </>
  )
}
