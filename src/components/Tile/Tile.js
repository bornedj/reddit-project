import React from 'react';
import './Tile.css'

export default function Tile({props}) {
    // get the necessary items from the props
    const title = props.title;

    // all image details
    const image = props.thumbnail ? props.thumbnail : 'no image';
    let imageHeight;
    let imageWidth;
    if (image !== 'no image') {
        imageHeight = props.thumbnail_height * 1.5;
        imageWidth = props.thumbnail_width * 1.5;
    }
    // link to post
    const link = 'https://www.reddit.com' + props.permalink
    // upvotes
    const upvotes = props.ups; 

    return (
        <div className="tile">
            <h6>{title}</h6>
            <a href={link} target='_blank'><img src={image} style={{width: imageWidth, height: imageHeight}}></img></a>
            <h5>upvotes: {new Intl.NumberFormat('en-IN').format(upvotes)}</h5>
        </div>
    )
}