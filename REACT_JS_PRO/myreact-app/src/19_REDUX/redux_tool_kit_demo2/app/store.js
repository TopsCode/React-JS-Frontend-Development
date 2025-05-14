import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from "../features/InfoSlice";

const store = configureStore({
    reducer :{
        InfoStore : InfoReducer
    }
})

export default store;