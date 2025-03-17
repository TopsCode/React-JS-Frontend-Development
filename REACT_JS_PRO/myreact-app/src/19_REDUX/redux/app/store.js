import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count"
import pointreducer from '../features/point'
import userData from "../features/userData";
import todoreducer from "../features/todo";
import ApiProducts from "../features/ApiProducts";

export const store = configureStore({
    reducer :{
        countKey: countReducer,
        pointreducer : pointreducer,
        userKey : userData,
        todokey : todoreducer,
        productkey : ApiProducts,
    }
})