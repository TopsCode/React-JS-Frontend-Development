import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const PostSlice = createSlice({
    name : "Post",
    initialState : {
        posts : [],
        status : "nothing",
        error : null,
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase(fetchPosts.pending,(state)=>{
                state.status = "Loading";
            })
            .addCase(fetchPosts.fulfilled,(state,action)=>{
                state.status = "Success";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.payload;
            })
    }
})
export default PostSlice.reducer;