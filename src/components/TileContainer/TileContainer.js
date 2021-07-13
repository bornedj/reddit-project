import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { selectPosts } from '../../features/fetch';


// function to select 32 posts from several different subreddit's json

export default function TileContainer({props}) {
    //loading posts on the switch
    const [posts, setPosts] = useState(undefined);
    const [refresh, setRefresh] = useState(false)

    // function to toggle refresh which will update the posts
    const toggleRefesh = () => {
        const bool = refresh ? false : true;
        setRefresh(bool)
    }

    //using selectposts to set the state of the posts
    useEffect(async () => {
        document.querySelector('html').style.cursor = 'wait'
        const data = await selectPosts(props);
        document.querySelector('html').style.cursor = ''
        setPosts(data)

        console.log(document.querySelector('body').style.cursor)
    }, [props, refresh])


    if (posts) {
        return (
            <div className = 'genreContainer'>
                <button onClick={() => toggleRefesh()}>refresh posts</button>
                <div className= 'TileContainer'>
                    {posts.map((item, idx) => {
                        return <Tile props={item.data} key={idx}/>
                    })}
                </div>
            </div>
        )

    } else {
        return null;
    } 
}