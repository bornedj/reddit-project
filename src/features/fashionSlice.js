import { createSlice } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: selectPosts(links.fashion),
    links: links.fashion,
    refreshPosts: false
}

//slice
const fashionSlice = createSlice({
    name: 'fashion',
    initialState: initialState,
    reducers: {
        getFashionPosts: (state, action) => {
            state.postsToShow = selectPosts(action.payload.links)
        },

        selectFashionPosts: state => state.fashion.postsToShow

    }
})

export const { selectFashionPosts, getFashionPosts } = fashionSlice.actions;
export default fashionSlice.reducer; 