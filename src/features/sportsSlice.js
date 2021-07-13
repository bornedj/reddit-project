import { createSlice, createReducer  } from "@reduxjs/toolkit";
import { selectPosts } from "./fetch";

export const initialState = {
    postsToShow: [{}],
    refreshPosts: false
}


//slice
const sportsSlice = createSlice({
    name: 'sports',
    initialState: initialState,
    reducers: {
        setSportsPosts: (state, action) => {
            state.sports.postsToShow = action.payload;
        }
    }
})

// await posts from the fetch, then dispatch an action to update the posts
export const getSportsPostsAsync = links => async dispatch => {
    const data = await selectPosts(links.sports);
    dispatch(setSportsPosts(data));
}

export const selectSportsPosts = state => state.sports.postsToShow;

export const { selectSportsPosts, getSportsPosts } = sportsSlice.actions;
export default sportsSlice.reducer; 