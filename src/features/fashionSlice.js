import { createSlice } from "@reduxjs/toolkit";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    refreshPosts: false
}

//slice
const fashionSlice = createSlice({
    name: 'fashion',
    initialState: initialState,
    reducers: {
        setFashionPosts: (state, action) => {
            state.postsToShow = action.payload
        }
    }
})

export const getFashionPostsAsync = links => async dispatch => {
    const data = await selectPosts(links);
    dispatch(setFashionPosts(data))
}

export const selectFashionPosts = state => state.fashion.postsToShow;

export const { setFashionPosts } = fashionSlice.actions;
export default fashionSlice.reducer; 