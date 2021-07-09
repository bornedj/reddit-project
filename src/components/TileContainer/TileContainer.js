import React from 'react';
import './TileContainer.css'
import Tile from '../Tile/Tile';

export default function TileContainer({props}) {
    const postData = [];
    Object.entries(props.data.children).forEach(([idx, value]) => postData.push(value))
    return (
        <div className= 'TileContainer'>
            {postData.map(item => {
                return <Tile props={item.data.title} />
            })}
        </div>
    )
}