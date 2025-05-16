import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../features/StudentSlice";

export const store = configureStore({
    reducer :{
        Students : StudentReducer
    }
})
