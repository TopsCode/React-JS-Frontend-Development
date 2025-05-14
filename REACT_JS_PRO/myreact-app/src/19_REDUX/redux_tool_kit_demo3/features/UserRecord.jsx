import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from './UserRecordSlice';
import { useSelector } from 'react-redux';

export default function UserRecord() 
{

 const allRecords = useSelector((state) => state.UserRecord.userList )

 const dispatch = useDispatch();

 const [input,setInput] = useState("");

 const handleAdd=()=>{
        dispatch(addItem(input));
        setInput("");
 }
 return (
    <div>
        UserRecord
        
        <input 
            type='text'
            value={input}
            placeholder='Enter value'
            onChange={(e)=>setInput(e.target.value)}
            />

        <button onClick={handleAdd}>Add Value</button>

        {allRecords.length > 0 
            ?
               allRecords.map((e,i)=>{
                    return <li key={i}>
                        {e}
                    </li>
               })
               : <h1>No Records Found</h1>}
    </div>
  )
}
