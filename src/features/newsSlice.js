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
        }
    }
})

export const getNewsPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setNewsPosts(data))
}

export const selectNewsPosts = state => state.news.postsToShow;

export const { setNewsPosts } = newsSlice.actions;
export default newsSlice.reducer; 