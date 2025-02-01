import "./Home.css";
import { useContext, useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import ChangeTheme from "../../components/theme/ChangeTheme";
import axios from "axios";
import {ThemeContext} from "../../context/ThemeContext";

const Home = () => {
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(false);

    const theme=useContext(ThemeContext);

    const darkMode=theme.state.darkMode;

    const apiKey = ;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

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
    }, []);

    const sliderNews = news.slice(0, 3);


    return (
        <div className="container" style={{backgroundColor:darkMode?"#2b2a29":"white"}}>
            <ChangeTheme/>
            <div className="slider">
                <Slider sliderNews={sliderNews} />
            </div>
            <div className="news">
                {loading && <Spinner />}
                {news.length > 0 ? (
                    news.map((item, index) => <NewsCard key={index} {...item} />)
                ) : (
                    !loading && <p>Nema dostupnih vesti.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
