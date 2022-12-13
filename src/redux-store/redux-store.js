import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./Slice/projects/PracticWithRedux/user-slice";
import todoReducer from "./Slice/projects/PracticWithRedux/todo-slice";
import postReducer from "./Slice/projects/PracticWithRedux/post-slice";
import themeReducer from "./Slice/projects/PracticWithRedux/theme-slice";
import diagramReducer from "./Slice/projects/Diagram/diagram-slice";

export default configureStore({
    reducer: {
        user: userReducer,
        todo: todoReducer,
        post: postReducer,
        theme: themeReducer,
        diagram: diagramReducer,
    }
})


