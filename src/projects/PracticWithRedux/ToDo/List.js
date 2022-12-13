import React from "react";
import {ElementList} from "./ElementList";
import {useSelector} from "react-redux";

let List = () => {
    let todos = useSelector(state => state.todo.arrayOfToDos);

    return (
        <ul>
            {todos.length > 0 &&
                <>
                    {todos.map(t => {
                        return <ElementList id={t.id} text={t.text} done={t.done}/>
                    })}
                </>
            }
        </ul>
    )
}

export {List};
