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
    // let whichRefresh;
    // let whichState;
    // switch (props) {
    //     case links.sports:
    //        whichRefresh = selectSportsRefresh;
    //        whichState = selectSportsPosts;
    //        getNewState = getSportsPostsAsync(links.sports);
    //        whichToggle = toggleSportsRefresh;
    //        break;
    //     case links.fashion:
    //         whichRefresh = selectFashionRefresh;
    //         whichState = selectFashionPosts;
    //         getNewState = getFashionPostsAsync(links.fashion);
    //         whichToggle = toggleFashionRefresh;
    //        break;
    //     case links.news:
    //         whichRefresh = selectNewsRefresh;
    //         whichState = selectNewsPosts;
    //         getNewState = getNewsPostsAsync(links.news);
    //         whichToggle = toggleNewsRefresh;
    //         break; 
    //     case links.humor:
    //         whichRefresh = selectHumorRefresh;
    //         whichState = selectHumorPosts;
    //         getNewState = getHumorPostsAsync(links.humor);
    //         whichToggle = toggleHumorRefresh;
    //         break; 
    //     default: 
    //         whichRefresh = 'error'
    //         whichState = 'error';
    //         getNewState = 'error'
    //         break;
    // }

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
        document.querySelector('*').style.cursor = 'wait'
        const data = await selectPosts(props);
        document.querySelector('*').style.cursor = ''
        setPosts(data)
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