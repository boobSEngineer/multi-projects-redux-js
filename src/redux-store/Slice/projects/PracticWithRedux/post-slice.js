import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

let initialState = {
    posts: [],
    postsCopy: [],
    status: '',
    error: null,

}

export const getPostsThunkCreate = createAsyncThunk(
    'post/getPostsThunkCreate',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30');
            if (response.status !== 200) {
                throw new Error('server get post error!');
            }
            dispatch(setPosts(response.data));
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const deletePostThunkCreate = createAsyncThunk(
    'post/deletePostThunkCreate',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (response.status !== 200) {
                throw new Error('server delete post error!');
            }
            dispatch(deletePost(id));
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getPostByIdThunkCreate = createAsyncThunk(
    'post/findPostByIdThunkCreate',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (response.status !== 200) {
                throw new Error('server delete post error!');
            }
            dispatch(setPosts([response.data]))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
            state.postsCopy = action.payload;
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(p => {
                return p.id !== action.payload;
            })
        },
        filterPostsByAscending(state, action) {
            state.posts = state.posts.sort((a, b) => a.userId - b.userId);
        },
        filterPostsByDescending(state, action) {
            state.posts = state.posts.sort((a, b) => b.userId - a.userId);
        },
        searchPostByString(state, action) {
            let findPosts = [];
            state.postsCopy.forEach(p => {
                if (p.title.indexOf(action.payload) !== -1 || p.body.indexOf(action.payload) !== -1) {
                    findPosts.push(p);
                }
            })
            state.posts = findPosts;
        }

    },
    extraReducers: {
        [getPostsThunkCreate.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
            console.log('GetPost: pending')
        },
        [getPostsThunkCreate.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            console.log('GetPost: fulfilled')
        },
        [getPostsThunkCreate.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            console.log('GetPost: rejected')
        },

        [deletePostThunkCreate.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
            console.log('delete: pending')
        },
        [deletePostThunkCreate.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            console.log('delete: fulfilled')
        },
        [deletePostThunkCreate.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            console.log('delete: rejected')
        },
    }
})

export const {setPosts, deletePost, filterPostsByAscending, filterPostsByDescending, searchPostByString} = PostSlice.actions;
export default PostSlice.reducer;
