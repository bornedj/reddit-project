import React from 'react';
import './TileContainer.css'
import Tile from '../Tile'

export default function TileContainer({props}) {
    const postData = [];
    Object.entries(props.data.children).forEach(([idx, value]) => postData.push(value))
    postData.forEach(item => console.log(item.data.title))
    return (
        <div className= 'TileContainer'>
            <h2>Test</h2>
            {console.log(postData)}
            {postData.map(item => {
                return <h6>{item.data.title}</h6>})}
        </div>
    )
}