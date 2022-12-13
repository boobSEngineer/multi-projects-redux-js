import React from "react";
import {useDispatch} from "react-redux";
import {deletePostThunkCreate} from "../../../redux-store/Slice/projects/PracticWithRedux/post-slice";
import e from "./ElementPost.module.css";
import {motion, AnimatePresence} from "framer-motion";

const variantsPost = {
    hidden: {
        y: -1000,
        opacity: 0
    },

    visible: {
        y: 0,
        opacity: 1,
        transition: ({
            delay: 0.2,
            duration: 1,
            type: 'tween'
        })
    },
};

let ElementPost = ({p}) => {
    const dispatch = useDispatch();

    return (
        <motion.li className={e.item} onDoubleClick={() => {
            dispatch(deletePostThunkCreate(p.id))
        }} initial={'hidden'} animate={'visible'} variants={variantsPost}>
            <h1>{p.title}</h1>
            <h2>POST: {p.id}</h2>
            <h2>User: {p.userId}</h2>
            <p>{p.body}</p>
        </motion.li>
    )
}

export {ElementPost};
