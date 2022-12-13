import React from "react";
import "./todo.css";
import {addToDo, removeToDo, changeToDo} from "../../../redux-store/Slice/projects/PracticWithRedux/todo-slice";
import {useDispatch} from "react-redux";


let ElementList = ({id, done, text}) => {
    let dispatch = useDispatch();

    return (
        <li className="element" key={id}>
            <input className="check" type="checkbox" onChange={()=>{
                dispatch(changeToDo({id}))
            }} checked={done}/>
            <span>{text}</span>
            <span className="delete" onClick={()=>{
                dispatch(removeToDo({id}))
            }}> &times;</span>
        </li>
    )
}

export {ElementList};
