import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { fetchWrapper } from '../../features/fetch';

export default function TileContainer({props}) {
    const [post, setPost] = useState(undefined)

    useEffect(async () => {
        const data = await fetchWrapper(process.env.REACT_APP_sports_links);
        setPost(data)
    }, [post])

    console.log(post)

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