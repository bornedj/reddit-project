import React, { useEffect, useState } from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';
import { fetchWrapper } from '../../features/fetch';
import links from '../../app/links';



// function to select 32 posts from several different subreddit's json
export const selectPosts = props => {
    const subredditsData = [];// will mutate
    const children = [];
    const postsToShow = [];

    props.forEach(async url => {
        const oneSubreddit = await fetchWrapper(url);
        //children are objects so flattening to arrays
        Object.entries(oneSubreddit.data.children).forEach(([idx, value]) => children.push(value))

        // console.log(children)
        subredditsData.push(children)
    })

    if (subredditsData) {
        // console.log(subredditsData)
        do {
            // console.log('outside the url loop')
            // console.log(subredditsData.length)
            // run the loop for each link will remove posts
            for (let i = 0; i < subredditsData.length; i++) {
                // console.log('at url loop')
                //get value from random index in array
                let idx = Math.floor(Math.random() * subredditsData[i].length);
                let dataToAdd = subredditsData[i][idx];
                subredditsData[i] = subredditsData[i].splice(idx, 1);
                postsToShow.push(dataToAdd);
            }

            postsToShow.push('safe')
        } while (postsToShow.length < 33)


    }
    // console.log(postsToShow);
    return postsToShow;
}

export default function TileContainer({props}) {
    const [post, setPost] = useState(undefined)

    // testing select posts
    selectPosts(links.sports);

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