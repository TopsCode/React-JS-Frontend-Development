import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from "../features/UserRecordSlice";

export const store = configureStore({
    reducer : {
        UserRecord : UserInfoReducer
    }
})