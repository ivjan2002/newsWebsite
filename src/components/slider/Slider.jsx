import { FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";
import {useState} from 'react';
import {FaArrowAltCircleRight} from "react-icons/fa";

const Slider=({sliderNews})=>{
    const[current,setCurrent]=useState(0);
    const length=sliderNews.length;

    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    }

    const preSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }

    if(!Array.isArray(sliderNews) || sliderNews.length<=0){
        return null;
    }

    return(
        <div className="slider">
            <FaArrowAltCircleLeft className="left" onClick={preSlide}/>
            <FaArrowAltCircleRight className="right" onClick={nextSlide}/>
            {sliderNews.map((item,index)=>{
                return(
                    <div key={index}>
                        {index==current && (<div className="container">
                            <img src={item.urlToImage} alt="img" className="image"></img>
                            <h3>{item.title}</h3>
                            <div className="link">
                                <a href={item.url} target="_blank" rel="noreferrer">Detail</a>
                            </div>
                        </div>)}

                    </div>
                    
                )
            })}
        </div>
    );
 
}

export default Slider;