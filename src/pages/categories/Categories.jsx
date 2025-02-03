import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import "./Categories.css";

const Categories = () => {
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(false);

    const { state } = useLocation();
    console.log("State:", state);

    const category = state?.category || "general"; 
    const apiKey =;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=${apiKey}`;

    const getNews = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(url); 
            setNews(data.articles || []);  
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, [category]);

    return (
        <div className="container2">
            <div className="left2">
                <form className="form2">
                    <input type="text" placeholder="ex:us,jp,tr,mx.."></input>
                    <button type="submit">Filter Country</button>
                </form>
            </div>
            <div className="right2">  
                {loading && <Spinner />}  
                {news.map((item, index) => (<NewsCard key={index} {...item} />))}
            </div>
        </div>
    );
}

export default Categories;
