import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/Counter/CounterSlice";

export const store = configureStore({
    reducer : {
        counterStore : counterSliceReducer
    }
})