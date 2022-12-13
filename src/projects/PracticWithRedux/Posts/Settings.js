import React, {useState} from "react";
import s from "./Settings.module.css";
import {motion, AnimatePresence} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {
    getPostByIdThunkCreate,
    getPostsThunkCreate,
    filterPostsByAscending,
    filterPostsByDescending, searchPostByString,
} from "../../../redux-store/Slice/projects/PracticWithRedux/post-slice";

const variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: ({
            type: "spring",
            stiffness: 30,
        })
    },

    closed: {
        x: "100%",
        opacity: 0,
        transition: ({
            type: "spring",
            stiffness: 400,
            damping: 40
        })
    },
};

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const switchSort = (variant) => {
        switch (variant) {
            case "asc":
                return dispatch(filterPostsByAscending());
            case "desc":
                return dispatch(filterPostsByDescending());
        }
    }

    return (
        <div className={s.wrapper}>

            <p className={s.list_close} onClick={() => {
                setIsOpen(!isOpen)
            }}>-></p>
            <motion.div className={s.list}
                        animate={isOpen ? "open" : "closed"} variants={variants}>
                <div className={s.list_item}>
                    <p>Filter by user</p>
                    <select onChange={(e) => {
                        switchSort(e.target.value)
                    }}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>

                <div className={s.list_item}>
                    <p>Search post by id</p>
                    <input onChange={(e) => {
                        if (e.target.value.trim().length > 0) {
                            dispatch(getPostByIdThunkCreate(e.target.value))
                        } else {
                            dispatch(getPostsThunkCreate())
                        }
                    }} type={"number"} placeholder={"id"}/>
                </div>
                <div className={s.list_item}>
                    <p>Search post by string</p>
                    <input onChange={(e) => {
                        if (e.target.value.trim().length > 0) {
                            dispatch(searchPostByString(e.target.value))
                        } else {
                            dispatch(getPostsThunkCreate())
                        }
                    }} placeholder={"string"}/>
                </div>
            </motion.div>

        </div>

    )
}

export {Settings};
