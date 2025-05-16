import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
    name:"Students",
    initialState : {
        studentsList : []
    },
    reducers : {
        addStudent :(state,action)=>{

        },
        updateStudent : (state,action)=>{

        },
        deleteStudent : (state,action)=>{

        }
    }
})
export const {addStudent,updateStudent,deleteStudent} = StudentSlice.actions;
export default StudentSlice.reducer;