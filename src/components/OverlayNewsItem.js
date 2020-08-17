import React from 'react'

function OverlayNewsItem({item, style, setOverlay}) {
    const dateConvertor = (str) => {
        if(str === null) return ""
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        const month = parseInt(str.substring(5,7)) - 1
        let res = ""
        res += str.substring(8,10) + " " + months[month] + " " + str.substring(0,4)
        return res
    }
    const splitContent = (str) => {
        if(str === null) return ""
        let res = str.split("[+")[0]
        console.log(res)
        return res
    }
    return (
        <div className="overlay-card" style={style}>
            <div className = "overlay-container">
                <button className="overlay-back" onClick = {()=>{setOverlay(false)}}>Back &gt;&gt;</button>
                <img src = {item.urlToImage} alt=""/>
                <h1>{item.title}</h1>
                <p style={{fontFamily: "'Merriweather', serif"}}>{dateConvertor(item.publishedAt)}</p>
                <p style={{fontFamily: "'Merriweather', serif"}}>{item.author}</p>
                <p>{splitContent(item.content)}</p>
                <a href={item.url}><button className="overlay-source">Click here to read more...</button></a>
            </div>
        </div>
    )
}

export default OverlayNewsItem
