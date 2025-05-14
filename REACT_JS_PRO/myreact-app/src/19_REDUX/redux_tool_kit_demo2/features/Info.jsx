import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { setName, setSubject } from './InfoSlice';

export default function Info() {
    const dispatch = useDispatch();
    const {name,subject} = useSelector((state) => state.InfoStore);

    const [inputName, setInputName] = useState('');
    const [inputSubject, setInputSubject] = useState('');

    const handleSubmit = () => {
        dispatch(setName(inputName));
        dispatch(setSubject(inputSubject));
    };


  return (
    <div>
        <input 
            type='text'
            placeholder='Enter name '
            value={inputName}
            onChange={(e)=>setInputName(e.target.value)}
            />

        <input 
            type='text'
            placeholder='Enter subject'
            value={inputSubject}
            onChange={(e)=> setInputSubject(e.target.value)}
            />

         <button onClick={handleSubmit}>Submit</button>
        <h1>Name : {name}</h1>
        <h1>Subject : {subject}</h1>

    </div>
  )
}
