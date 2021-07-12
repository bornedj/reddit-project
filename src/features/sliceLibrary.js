import { createSlice,createReducer  } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: selectPosts(links.sports),
    refreshPosts: false
}


//slice
const slice = createSlice({
    name: 'library',
    initialState: initialState,
    reducers: {
        getPosts: (state, action) => {
            state.postsToShow = selectPosts(action.payload.links)
        },

        selectPosts: selectGenre(state)

    }
})


// example selector for the array of json
const selectGenre = state => state.genre.postsToShow;