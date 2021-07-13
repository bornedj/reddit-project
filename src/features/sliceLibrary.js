import { createSlice,createReducer  } from "@reduxjs/toolkit";
import links from "../app/links";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    links: [],
    refreshPosts: false
}

export const getPostsAsync = links => async dispatch => {
    const  data = await selectPosts(links);
    dispatch(getPosts(data))
}

//slice
const slice = createSlice({
    name: 'library',
    initialState: initialState,
    reducers: {
        setPosts: (state, action) => {
            state.genre.postsToShow = action.payload.posts 
        },


    }
})


// example selector for the array of json
export const selectGenre = state => state.genre.postsToShow;