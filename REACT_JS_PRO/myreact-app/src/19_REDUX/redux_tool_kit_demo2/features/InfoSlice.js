import { createSlice } from "@reduxjs/toolkit";


const InfoSlice = createSlice({
    name : "UserInfo",
    initialState : {
        name : "",
        subject : ""
    },
    reducers :{
        setName : (state,action) =>{
            state.name = action.payload;
        },
        setSubject : (state,action) =>{
            state.subject = action.payload;
        }
    }
})

export const {setName,setSubject} = InfoSlice.actions;
export default InfoSlice.reducer;