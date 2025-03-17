import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchProduct",()=>{
    return axios({
        method : "get",
        url : "https://fakestoreapi.com/products",
    }).then((res)=>{
        console.log("----> data ",res.data);
        return res.data;
    })
})

const productReducer = createSlice({
    name : "product",
    initialState : {product : [],pending : false,error :""},
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            console.log("----> action ",action);
            state.product = action.payload;
            state.pending = false;
            console.log("---->>>> state",state.product);
        }).addCase(fetchData.pending,(state,action)=>{
            state.pending = true;
        }).addCase(fetchData.rejected,(state,action)=>{
            state.error = action.error.message;
        })  
    }
});

export default productReducer.reducer;
