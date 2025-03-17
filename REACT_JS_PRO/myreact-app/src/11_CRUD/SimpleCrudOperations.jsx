/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function SimpleCrudOperations() {

    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [records,setRecords] = useState([]);
    const [editIndex,setEditIndex] = useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(editIndex!==null)
        {
            
            const updateRecords = [...records];
            updateRecords[editIndex] = {name,subject};
            setRecords(updateRecords);
            setEditIndex(null);
        }
        else
        {
            // for new records 
            setRecords([...records,{name,subject}])
        }

        setName("")
        setSubject("")        
    }

    const handleEdit=(index)=>{
        console.log(index);
        setEditIndex(index);
        setName(records[index].name);
        setSubject(records[index].subject);
    }

    const handleDelete=(index)=>{
        console.log(index);

        let result = records.filter((records,i) => i!== index)
        console.log(result);

        setRecords([...result])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    placeholder='Enter name'
                    onChange={(e)=>setName(e?.target?.value)}
                />
                <input
                    type='text'
                    value={subject}
                    placeholder='Enter subject'
                    onChange={(e)=>setSubject(e?.target?.value)}
                />
                {editIndex!==null ?  <button type='submit'>update</button> : <button type='submit'>Submit</button>}
                
            </form>
            

            <table style={{borderCollapse:"collapse",border:"2px solid black",padding:"50px",width:"400px"}}>
                
                <tbody>
                    {
                        records.map((e,i)=>{
                            return <tr key={i} >
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td><button onClick={()=>handleEdit(i)}>Edit</button></td>
                                    <td><button onClick={()=>handleDelete(i)}>Delete</button></td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}