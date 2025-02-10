import { useState,useEffect } from "react";
import "./Search.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";

//process.env.REACT_APP_API_KEY

const Search=()=>{
    const[news,setNews]=useState("");
    const {state}=useLocation();

    const apiKey="b73497ce3347473d9f12fb64cd0b4210";
    const url=`https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setNews(data.articles)).catch((error)=>console.error(error));

    },[url]

    )
    return(
        <div className="searchPage">
            <h1>News about: <span>{}</span></h1>
            <div className="searchNews">
                {!news && <h1>The search word did not match</h1>}

                {news && news.map((item,index)=><NewsCard key={index} {...item}/>) }

            </div>
        </div>
    );

}

export default Search;