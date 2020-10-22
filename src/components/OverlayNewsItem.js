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
                <div className="overlay-back">
                    <button  onClick = {()=>{setOverlay(false)}}>Back &gt;&gt;</button>
                </div>
                <div className = "hzntal">
                    <div className = "h-image">
                        <img src = {item.urlToImage} alt=""/>
                    </div>
                    <div className = "vrtcal">
                        <h1>{item.title}</h1>
                        <p id = "p1">{dateConvertor(item.publishedAt)}</p>
                        <p id = "p2">{item.author}</p>
                        <p id = "p3">{splitContent(item.content)}</p>
                        <div className="overlay-source"><a href={item.url}><button >Click here to read more...</button></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverlayNewsItem
