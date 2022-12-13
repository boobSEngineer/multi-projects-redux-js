import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunkCreate} from "../../../redux-store/Slice/projects/PracticWithRedux/post-slice";
import {ElementPost} from "./ElementPost";
import p from "./ElementPost.module.css";
import {Settings} from "./Settings";


let Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const {status, error} = useSelector(state => state.post);

    return (
        <div className={p.wrapper}>
            <button className={p.button} onClick={() => {
                dispatch(getPostsThunkCreate())
            }}>getPosts
            </button>
            <Settings/>
            {status === 'pending' && <div className={p.error}><p>Loading....</p></div>}
            {error && <div>Ошибка типа: {error}</div>}
            {posts.length > 0 && posts.map(p => {
                return <>
                    <ElementPost p={p}/>
                </>
            })}
        </div>
    )
}

export {Posts};
