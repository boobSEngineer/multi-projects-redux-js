import React from "react";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    arrayOfToDos: []
}

const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo(state, action) {
            state.arrayOfToDos.push({
                text: action.payload.text,
                id: Math.floor(Math.random() * 100),
                done: false,
            })
        },
        removeToDo(state, action) {
            state.arrayOfToDos = state.arrayOfToDos.filter(t => {
                return t.id !== action.payload.id;
            })
        },
        changeToDo(state, action) {
            console.log(action);
            state.arrayOfToDos.forEach(t => {
                if (t.id === action.payload.id) {
                    t.done = !t.done;
                }
            })
        },
    }
})

export const {addToDo, removeToDo, changeToDo} = ToDoSlice.actions;

export default ToDoSlice.reducer;
