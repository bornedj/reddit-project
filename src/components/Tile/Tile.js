import React from 'react';
import './Tile.css'

export default function Tile({props}) {
    const title = props.title;
    const image = props.thumbnail ? props.thumbnail : 'no image';
    
    return (
        <div className="tile">
            <h6>{title}</h6>
            <img src={image}></img>
        </div>
    )
}