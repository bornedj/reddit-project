import { createSlice,createReducer  } from "@reduxjs/toolkit";

export const initialState = {
    postsToShow: [],
    refreshPosts: false
}

//slice
const slice = createSlice({
    name: 'library',
    initialState: initialState,
    reducers: {

    }
})


// example selector for the array of json
const selectGenre = state => state.genre.postsToShow;