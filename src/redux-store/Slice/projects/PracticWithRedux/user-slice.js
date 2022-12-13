import React from "react";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    firstName: '',
    lastName: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLastName(state, action) {
            state.lastName = action.payload;
        },
        changeFirstName(state, action) {
            state.firstName = action.payload;
        },
    }
})

export const {changeLastName, changeFirstName} = userSlice.actions;

export default userSlice.reducer;
