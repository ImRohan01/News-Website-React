import React,{useState} from 'react'
import Spinner from './Spinner.js'
import NewsItem from './NewsItem.js'
import OverlayNewsItem from './OverlayNewsItem.js'

function Body({items,isLoading,category,search,setSearch}){
    const [overlay,setOverlay] = useState(false)
    const [text,setText] = useState("")
    const [item,setItem] = useState(null)

    return isLoading?<Spinner />: overlay?<OverlayNewsItem item = {item} overlay = {overlay} setOverlay={setOverlay}/>:
    <div>
        <div className="cards-title">
            <h1>{search === "" ? category: "Search: \"" + search + "\""}</h1>
            <form>
            <input placeholder="Search"
                   type = "text"
                   value = {text}
                   onChange={(e)=>{setText(e.target.value)}}/>
            <button type="submit" onClick = {()=>{setSearch(text);setText("")}}>GO</button>
            </form>
        </div>
        <div className="cards">
            {items.map((item)=>(
                <NewsItem key = {item.char_id} item={item} setItem = {setItem} setOverlay = {setOverlay}/>
            ))}
        </div>
    </div>
}

export default Body
