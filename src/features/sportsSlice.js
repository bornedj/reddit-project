import { createSlice, createReducer  } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: selectPosts(links.sports),
    links: links.sports,
    refreshPosts: false
}

//slice
const sportsSlice = createSlice({
    name: 'sports',
    initialState: initialState,
    reducers: {
        getSportsPosts: (state, action) => {
            state.postsToShow = selectPosts(action.payload.links)
        },

        selectSportsPosts: state => state.sports.postsToShow

    }
})

export const { selectSportsPosts, getSportsPosts } = sportsSlice.actions;
export default sportsSlice.reducer; 