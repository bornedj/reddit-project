import { createSlice } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    refreshPosts: true
}

//slice
const fashionSlice = createSlice({
    name: 'fashion',
    initialState: initialState,
    reducers: {
        setFashionPosts: (state, action) => {
            state.postsToShow = action.payload
        },

        toggleFashionRefresh: state => {
            state.refreshPosts = state.refreshPosts ? false : true;
        }
    }
})

// await posts from the fetch, then dispatch an action to update the posts
export const getFashionPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setFashionPosts(data))
}

export const selectFashionPosts = state => state.fashion.postsToShow;
export const selectFashionRefresh = state => state.fashion.refreshPosts;

export const { setFashionPosts, toggleFashionRefresh } = fashionSlice.actions;
export default fashionSlice.reducer; 