import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { fetchWrapper } from '../../features/fetch';
import links from '../../app/links';
import { selectPosts } from '../../features/fetch';


// function to select 32 posts from several different subreddit's json

export default function TileContainer({props}) {
    const [post, setPost] = useState(undefined)

    // testing select posts
    // selectPosts(links.sports);

    // use effect will update our posts
    useEffect(async () => {
        const data = await fetchWrapper(props);
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