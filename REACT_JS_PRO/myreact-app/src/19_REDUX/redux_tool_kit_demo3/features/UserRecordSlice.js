import { createSlice } from "@reduxjs/toolkit";

const UserRecordSlice = createSlice({
    name : "UserRecord",
    initialState : {
        userList : []
    },
    reducers :{
        addItem : (state,action) =>{
            state.userList.push(action.payload);
        }
    }
})

export const {addItem} = UserRecordSlice.actions;
export default UserRecordSlice.reducer;