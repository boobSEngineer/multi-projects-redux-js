import React, {useState} from "react";
import {List} from "./List";
import {useDispatch} from "react-redux";
import {addToDo} from "../../../redux-store/Slice/projects/PracticWithRedux/todo-slice";


let ToDo = () => {
    let [text, setText] = useState('');
    let dispatch = useDispatch();

    // let doneToDo = (id) => {
    //     setTodos(todos.map(t => {
    //         if(t.id === id) return {...t, done: !t.done}
    //         return t
    //     }))
    // }
    //
    // let deleteToDo = (id) => {
    //     setTodos(todos.filter(t => {
    //         return t.id !== id;
    //     }))
    // }
    //
    // let addToDo = () => {
    //     if (text.trim().length > 0) {
    //         setTodos(
    //             [...todos, {
    //                 text: text,
    //                 id: Math.floor(Math.random() * 100),
    //                 done: false,
    //             }]
    //         )
    //     }
    // }


    return (
        <div>
            <input placeholder='task' value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <div>
                <button onClick={() => {
                    if (text.trim().length > 0) {
                        dispatch(addToDo({text}));
                        setText('');
                    }
                }}>Submit
                </button>
            </div>
            <List/>
        </div>
    )
};

export {ToDo};
