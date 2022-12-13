import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: 'blue'
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = state.theme === 'blue'? state.theme = 'red': state.theme = 'blue';
        }
    }
})

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
