import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeLastName, changeFirstName} from "../../../redux-store/Slice/projects/PracticWithRedux/user-slice";
import {useSelector} from "react-redux";

let UserInput = () => {
    let dispatch = useDispatch();
    let lastName = useSelector(state => state.user.lastName);
    let firstName = useSelector(state => state.user.firstName);

    return (
        <div>

            <div>
                Name <input onChange={(e) => {
                dispatch(changeLastName(e.target.value))}}/>
            </div>
            <div>
                FirstName <input onChange={(e) => {
                dispatch(changeFirstName(e.target.value))}}/>
            </div>
            <br/>
            <span>
                {lastName ? lastName : <span>name<span>       </span></span>}
                {firstName ? firstName : <span>firstName</span>}
            </span>

        </div>
    )
}

export {UserInput};
