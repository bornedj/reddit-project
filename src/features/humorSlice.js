import { createSlice } from "@reduxjs/toolkit";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    refreshPosts: false
}

//slice
const humorSlice = createSlice({
    name: 'humor',
    initialState: initialState,
    reducers: {
        setHumorPosts: (state, action) => {
            state.postsToShow = action.payload;
        },

        toggleHumorRefresh: state => {
            state.refreshPosts = state.refreshPosts ? false : true;
        }
    }
})

// await posts from the fetch, then dispatch an action to update the posts
export const getHumorPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setHumorPosts(data))
}

export const selectHumorPosts = state => state.humor.postsToShow;
export const selectHumorRefresh = state => state.humor.refreshPosts;

export const { setHumorPosts, toggleHumorRefresh } = humorSlice.actions;
export default humorSlice.reducer; 