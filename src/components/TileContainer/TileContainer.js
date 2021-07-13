import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { selectPosts } from '../../features/fetch';
import links from '../../app/links'; 
import { useDispatch, useSelector } from 'react-redux'
import { selectSportsPosts, selectSportsRefresh } from '../../features/sportsSlice';
import { selectHumorPosts, selectHumorRefresh } from '../../features/humorSlice';
import { selectNewsRefresh } from '../../features/newsSlice';
import { selectFashionRefresh } from '../../features/fashionSlice';


// function to select 32 posts from several different subreddit's json

export default function TileContainer({props}) {
    const dispatch = useDispatch
    // switch statement to determine which slices to retrieve data from
    let whichState;
    switch (props) {
        case links.sports:
            whichState = selectSportsRefresh 
            break;
        case links.humor:
            whichState = selectHumorRefresh
            break;
        case links.news:
            whichState = selectNewsRefresh
            break;
        case links.fashion:
            whichState = selectFashionRefresh;
            break;
        default:
            whichState = 'error';
            break; 
    }

    //loading posts on the switch
    const [posts, setPosts] = useState(undefined);
    const [refresh, setRefresh] = useState(useSelector(whichState))

    //using selectposts to set the state of the posts
    useEffect(async () => {
        const data = await selectPosts(props);
        setPosts(data)

        return function cleanup() {
            setPosts(undefined)
            const newRefresh = refresh ? false : true;
            setRefresh(newRefresh)
        }
    }, [refresh])

    if (posts) {
        return (
            <div className= 'TileContainer'>
                {posts.map((item, idx) => {
                    return <Tile props={item.data} key={idx}/>
                })}
            </div>
        )

    } else {
        return null;
    } 
}