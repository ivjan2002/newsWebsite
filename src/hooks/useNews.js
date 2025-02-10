import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

const useNews = (initialCategory = "", initialCountry = "us") => {
    const [news, setNews] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const [category, setCategory] = useState(initialCategory);
    const [country, setCountry] = useState(initialCountry);

    const apiKey = "b73497ce3347473d9f12fb64cd0b4210";
    const { state } = useContext(ThemeContext); // Ispravljeno!

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=${apiKey}`;
    const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apikey=${apiKey}`;

    const handleSubmit = (e) => {
        e.preventDefault();
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
    }, [category, state.darkMode]); // Ispravljeno!

    useEffect(() => {
        setCategory(initialCategory);
        setCountry(initialCountry);
    }, [initialCountry, initialCategory]);

    return {
        news,
        loading,
        filter,
        setFilter,
        setCountry,
        country,
        state, // Promenjeno iz `theme` u `state`
        category,
        setCategory,
        handleSubmit,
    };
};

export default useNews;
