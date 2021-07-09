import React from 'react';
import './Tile.css'

export default function Tile({props}) {
    // get the necessary items from the props
    const title = props.title;

    const image = props.thumbnail ? props.thumbnail : 'no image';
    let imageHeight;
    let imageWidth;
    if (image !== 'no image') {
        imageHeight = props.thumbnail_height * 1.5;
        imageWidth = props.thumbnail_width * 1.5;
    }
    
    const link = 'https://www.reddit.com' + props.permalink

    return (
        <div className="tile">
            <h6>{title}</h6>
            <a href={link}><img src={image} style={{width: imageWidth, height: imageHeight}}></img></a>
        </div>
    )
}