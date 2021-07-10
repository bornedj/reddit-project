import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { fetchWrapper } from '../../features/fetch';

// function to select 32 posts from several different subreddit's json
export const selectPosts = props => {
    const subredditsData = [];
    console.log(typeof(props))
    props.forEach(async url => {
        const oneSubreddit = await fetchWrapper(url);
        subredditsData.push(oneSubreddit.data.children)
    })
    console.log(subredditsData)
}

export default function TileContainer({props}) {
    const [post, setPost] = useState(undefined)

    // testing select posts
    selectPosts(props);

    // use effect will update our posts
    useEffect(async () => {
        const data = await fetchWrapper(props[0]);
        setPost(data)
    }, [post])

    const postData = [];
    //old logic    
    if (post) {
        Object.entries(post.data.children).forEach(([idx, value]) => postData.push(value))
    }

    return (
        <div className= 'TileContainer'>
            {postData.map(item => {
                return <Tile props={item.data} />
            })}
        </div>
    )
}