import React from 'react';

export default function Sports() {
    const data = fetch('https://www.reddit.com/api/v1/me').then(response => response.json())
    console.log(data)
    return <h1>{data}</h1>
}