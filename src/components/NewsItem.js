import React from 'react'

const NewsItem = ({item, setItem, setOverlay}) => {
    return (
        <div className='card'>
            <div className='card-image'><a href={item.url}><img src={item.urlToImage} alt='' /></a></div>
            <div className='card-title'><h1>{item.title}</h1></div>
            <div className='card-button'><button onClick = {()=>{setOverlay(true); setItem(item)}}>Click here to expand...</button></div>
        </div>
    )
}

export default NewsItem
