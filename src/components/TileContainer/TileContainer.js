import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { fetchWrapper } from '../../features/fetch';
import links from '../../app/links';
import { selectPosts } from '../../features/fetch';


// function to select 32 posts from several different subreddit's json

export default function TileContainer({props}) {
    const [posts, setPosts] = useState(undefined);
    const [refreshPosts, setRefreshPosts] = useState(false);

    //using selectposts to set the state of the posts
    useEffect(async () => {
        const data = await selectPosts(props);
        console.log(data)
        setPosts(data)
    }, [refreshPosts])
    console.log(posts)

    if (posts) {
        return (
            <div className= 'TileContainer'>
                {posts.map(item => {
                    return <Tile props={item.data} />
                })}
            </div>
        )

    } 
}