import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/PostSlice";

export const store = configureStore({
    reducer : {
        posts : PostReducer
    }
})