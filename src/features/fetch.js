import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let userToken;
export const fetchToken = () => {
    if (userToken) return userToken;//guardian clause to check if one exists

    //check to see if there is a token in the browser
    const userTokenMatch = window.location.href.match(/code=([^&]*)/)
    if (userTokenMatch) {
        userToken = userTokenMatch;
        console.log(userToken)

        window.setTimeout(() => userToken = '', 1000*3600);//reset the token in an hour
        window.history.pushState('Access Token', null, '/')
    } else {
        window.location = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_reddit_clientId}&response_type=code&state=${generateRandomString()}&redirect_uri=http://localhost:3000/&duration=temporary&scope=read`
    }

    const code = "AoiSxUgawz_dlQzcyeps7i8sa6soqQ#_"//hard coded for now
}

export const generateRandomString = () => {
    const stringArray =[];
    for (let i = 0; i <10; i++) {
       stringArray.push(Math.floor(Math.random() * 10)) 
    }
    return stringArray.join('');
}