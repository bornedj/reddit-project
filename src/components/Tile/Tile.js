import React from 'react';
import './Tile.css'

export default function Tile({props}, {key}) {
    // get the necessary items from the props
    const title = props.title;

    // all image details
    const image = props.thumbnail ? props.thumbnail : undefined;
    let imageHeight;
    let imageWidth;
    if (image) {
        imageHeight = props.thumbnail_height * 1.5;
        imageWidth = props.thumbnail_width * 1.5;
    }
    // link to post
    const link = 'https://www.reddit.com' + props.permalink
    // upvotes
    const upvotes = props.ups; 

    return (
        <div className="tile">
            <a href={link} className='linkDiv' target='_blank'>
                <h6>{title}</h6>
                {image ? <img src={image} style={{width: imageWidth, height: imageHeight}}></img> : <p></p>}
                <h5>upvotes: {new Intl.NumberFormat('en-IN').format(upvotes)}</h5>
            </a>
        </div>
    )
}