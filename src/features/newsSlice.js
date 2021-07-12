import { createSlice } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: selectPosts(links.news),
    links: links.news,
    refreshPosts: false
}

//slice
const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        getNewsPosts: (state, action) => {
            state.postsToShow = selectPosts(action.payload.links)
        },

        selectNewsPosts: state => state.sports.postsToShow

    }
})

export const { selectNewsPosts, getNewsPosts } = newsSlice.actions;
export default newsSlice.reducer; 