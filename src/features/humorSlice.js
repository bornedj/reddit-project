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
            state.humor.postsToShow = action.payload;
        }
    }
})

export const getHumorPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setHumorPosts(data))
}

export const selectHumorPosts = state => state.humor.postsToShow;

export const { setHumorPosts } = humorSlice.actions;
export default humorSlice.reducer; 