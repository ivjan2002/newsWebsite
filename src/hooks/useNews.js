import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {ThemeContext} from "../context/ThemeContext";

const useNews=(initialCategory="",initialCountry="us")=>{
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const[category,setCategory]=useState(initialCategory);
    const[country,setCountry]=useState(initialCountry);

    const apiKey = ;
    const theme=useContext(ThemeContext);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=${apiKey}`;
    const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apikey=${apiKey}`;

    const handleSubmit = (e) => {
        e.preventDefault(); // Ispravljeno preventDefault
        getNews(filterUrl);
        setFilter("");
    };

    const getNews = async (url) => {
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
        getNews(url);
    }, [category,theme.state.darkMode]);
    useEffect(() => {
        setCategory(initialCategory)
        setCountry(initialCountry)
    }, [initialCountry,initialCategory]);

    return{
        news,
        loading,
        filter,
        setFilter,
        setCountry,
        country,
        theme,
        category,
        setCategory,
        handleSubmit
    };


};

export default useNews;