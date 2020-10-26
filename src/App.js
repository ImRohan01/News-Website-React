import React,{useState,useEffect} from 'react';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import axios from 'axios'
import './App.css'


function App() {
  const [category,setCategory] = useState("Top Headlines")
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [country,setCountry] = useState("in")
  const [search,setSearch] = useState("")

  useEffect(() => {
    //Fetching the data from the API
    const fetchItems = async () => {
      let result
      setIsLoading(true)
      if(search !== ""){
        result = await axios(`https://rohan-news-server.herokuapp.com/everything/${search}`)
      }
      else if(category === "Top Headlines"){
        result = await axios(`https://rohan-news-server.herokuapp.com/top-headlines/${country}`)
      }
      else{
        result = await axios(`https://rohan-news-server.herokuapp.com/top-headlines/${country}/${category}`)
      }
      console.log(result.data.articles)
      setItems(result.data.articles.filter((item)=>(item.urlToImage != null && item.content != null)))
      setIsLoading(false)
    }
    fetchItems()
  },[category,country,search])

  return (
    <div className="container">
      <div>
        <Header setCountry = {setCountry} setSearch = {setSearch}/>
      </div>
      <div className="navbar">
        <button onClick = {() => {setCategory("Top Headlines");setSearch("")}}>Top Headlines</button>
        <button onClick = {() => {setCategory("Business");setSearch("")}}>Business</button>
        <button onClick = {() => {setCategory("Technology");setSearch("")}}>Technology</button>
        <button onClick = {() => {setCategory("Sports");setSearch("")}}>Sports</button>
        <button onClick = {() => {setCategory("Entertainment");setSearch("")}}>Entertainment</button>
        <button onClick = {() => {setCategory("Health");setSearch("")}}>Health</button>
        <button onClick = {() => {setCategory("Science");setSearch("")}}>Science</button>
        <button onClick = {() => {setCategory("General");setSearch("")}}>General</button>
      </div>
      <div>
        <Body isLoading = {isLoading} items = {items} category = {category} setSearch = {setSearch} search={search}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
