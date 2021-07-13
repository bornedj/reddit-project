import { createSlice } from "@reduxjs/toolkit";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    refreshPosts: false
}

//slice
const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        setNewsPosts: (state, action) => {
            state.postsToShow = action.payload
        },

        toggleNewsRefresh: state => {
            state.refreshPosts = state.refreshPosts ? false : true;
        }
    }
})

// await posts from the fetch, then dispatch an action to update the posts
export const getNewsPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setNewsPosts(data))
}

export const selectNewsPosts = state => state.news.postsToShow;
export const selectNewsRefresh = state => state.news.refreshPosts;

export const { setNewsPosts, toggleNewsRefresh } = newsSlice.actions;
export default newsSlice.reducer; 