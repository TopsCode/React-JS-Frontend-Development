import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

export default function Student() {
    const dispatch = useDispatch();
    const Allstudent = useSelector((state) => state.Students.studentsList);

    const [form,setForm] = useState(
        {
            name : "",
            subject : "",
        }
    )

    const [editId,setEditId] = useState(null);

  return (
    <div>
        <input
            type='text'
            placeholder='Enter name '
            value={form.name}
            onChange={(e) => setForm({...form, name : e.target.value})}
            />
        <input
            type='text'
            placeholder='Enter subject'
            value={form.subject}
            onChange={(e)=> setForm({...form,subject : e.target.value})}
            />

        <button>{editId ? "Update" : "Save"}</button>
    </div>
  )
}
