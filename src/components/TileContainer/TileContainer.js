import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { selectPosts } from '../../features/fetch';
import links from '../../app/links';
import { getSportsPostsAsync, selectSportsPosts, selectSportsRefresh, toggleSportsRefresh } from '../../features/sportsSlice';
import { getFashionPostsAsync, selectFashionPosts, selectFashionRefresh, toggleFashionRefresh } from '../../features/fashionSlice';
import { getNewsPostsAsync, selectNewsPosts, selectNewsRefresh, toggleNewsRefresh } from '../../features/newsSlice';
import { getHumorPostsAsync, selectHumorPosts, selectHumorRefresh, toggleHumorRefresh } from '../../features/humorSlice';

export default function TileContainer({props}) {
    // will dispatch to the store to update the json based on a button
    const dispatch = useDispatch();

    // determining which slice to pull data from
    let getNewState;
    let whichToggle;
    let whichRefresh;
    switch (props) {
        case links.sports:
           getNewState = getSportsPostsAsync(links.sports);
           whichToggle = toggleSportsRefresh;
           whichRefresh = selectSportsRefresh;
           break;
        case links.fashion:
            getNewState = getFashionPostsAsync(links.fashion);
            whichToggle = toggleFashionRefresh;
            whichRefresh = selectFashionRefresh;
           break;
        case links.news:
            getNewState = getNewsPostsAsync(links.news);
            whichToggle = toggleNewsRefresh;
            whichRefresh = selectNewsRefresh;
            break; 
        case links.humor:
            getNewState = getHumorPostsAsync(links.humor);
            whichToggle = toggleHumorRefresh;
            whichRefresh = selectHumorRefresh;
            break; 
        default: 
            getNewState = 'error'
            whichToggle = 'error'
            break;
    }

    //loading posts on the switch
    const [posts, setPosts] = useState(undefined);
    const [refresh, setRefresh] = useState(useSelector(whichRefresh))

    // function to toggle refresh which will update the posts
    const toggleRefesh = () => {
        const bool = refresh ? false : true;
        setRefresh(bool)
        dispatch(whichToggle)
    }

    //using selectposts to set the state of the posts
    useEffect(async () => {
        document.querySelector('*').style.cursor = 'wait'
        const data = await selectPosts(props);
        dispatch(getNewState)
        dispatch(whichToggle)
        setPosts(data)
        document.querySelector('*').style.cursor = ''
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