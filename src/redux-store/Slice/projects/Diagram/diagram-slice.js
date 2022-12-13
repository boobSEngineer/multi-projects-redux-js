import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    nextId: 0,
    values: [],
    canvas: {
        width: 600,
        height: 300
    }
}

const DiagramSlice = createSlice({
    name: 'diagram',
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.values.push(
                {
                    id: state.nextId++,
                    number: 0,
                    string: "0",
                }
            )
        },
        removeAllValues: (state, action) => {
            state.nextId = 0;
            state.values = [];

        },
        editNumber: (state, action) => {
            state.values.find(v => {
                if (v.id === action.payload.id) {
                    if (isNaN(parseInt(action.payload.string))) {
                        v.number = v.number;
                        v.string = action.payload.string;
                        return true
                    }
                    v.number = parseInt(action.payload.string);
                    v.string = action.payload.string;
                    return true
                }
            })
        },
    }
})

export const {addValue, removeAllValues, editNumber} = DiagramSlice.actions;
export default DiagramSlice.reducer;
