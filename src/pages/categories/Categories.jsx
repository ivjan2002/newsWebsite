import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import "./Categories.css";
import useNews from "../../hooks/useNews";

const Categories = () => {
    const{state}=useLocation();
    const{news,loading,filter,setFilter,handleSubmit}=useNews(state.category);
    


    return (
        <div className="container2">
            <div className="left2">
                <form className="form2" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="ex:us,jp,tr,mx.." 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <button type="submit">Filter Country</button>
                </form>
            </div>
            <div className="right2">  
                {loading && <Spinner />}  
                {news.map((item, index) => (<NewsCard key={index} {...item} />))}
            </div>
        </div>
    );
};

export default Categories;
