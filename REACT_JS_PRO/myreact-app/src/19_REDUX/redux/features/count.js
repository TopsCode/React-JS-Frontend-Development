// my store 

import { createSlice } from "@reduxjs/toolkit";


const countslice = createSlice({
    name : "count",
    initialState : {countnumber : 1999},
    reducers : {
        increment : (state,action)=>{
            console.log("state :::::: ",state);
            state.countnumber++;
        },
        decrement : (state,action)=>{
            state.countnumber--;
        },
        inc_by_user : (state,action)=>{
            console.log("--->> action : ",action);
            state.countnumber += action.payload;
        }
    }
});

export default countslice.reducer;
export const {increment,decrement,inc_by_user} = countslice.actions;