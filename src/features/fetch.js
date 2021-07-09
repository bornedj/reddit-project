import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const code = "AoiSxUgawz_dlQzcyeps7i8sa6soqQ#_"//hard coded for now
const redirectUri = 'http://localhost:3000/'
let userCode = code;
export const fetchCode = () => {
    console.log(userCode)
    if (userCode) return userCode;//guardian clause to check if one exists

    //check to see if there is a token in the browser
    const userTokenMatch = window.location.href.match(/code=([^&]*)/)
    if (userTokenMatch) {
        userCode = userTokenMatch;
        console.log(userCode)

        window.setTimeout(() => userCode = '', 1000*3600);//reset the token in an hour
        window.history.pushState('Access Token', null, '/')
        return userCode;
    } else {
        window.location = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_reddit_clientId}&response_type=code&state=${generateRandomString()}&redirect_uri=http://localhost:3000/&duration=temporary&scope=read`
    }

}

export const generateRandomString = () => {
    const stringArray =[];
    for (let i = 0; i <10; i++) {
       stringArray.push(Math.floor(Math.random() * 10)) 
    }
    return stringArray.join('');
}

export const getToken = async (userCode) => {
    const response = await fetch(`https://www.reddit.com/api/v1/authorization_token`, {
        method: 'POST',
        headers: {
            'grant_type': 'authorization_code',
            'code': userCode,
            'redirect_uri': redirectUri
        }
    })
    const responseJSON = await response.json();
    console.log(responseJSON)
    return responseJSON
}