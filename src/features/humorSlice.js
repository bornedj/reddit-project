import { createSlice } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: selectPosts(links.humor),
    links: links.humor,
    refreshPosts: false
}

//slice
const humorSlice = createSlice({
    name: 'humor',
    initialState: initialState,
    reducers: {
        getHumorPosts: (state, action) => {
            state.postsToShow = selectPosts(action.payload.links)
        },

        selectHumorPosts: state => state.humor.postsToShow

    }
})

export const { selectHumorPosts, getHumorPosts } = humorSlice.actions;
export default humorSlice.reducer; 