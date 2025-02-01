import "./NewsCard.css";
import random from "../../assets/img/random.png";

const NewsCard=({title,url,urlToImage,content})=>{
    return(
        <div className="card">
            <img src={urlToImage?urlToImage:random} alt="news"></img>
            <div className="cardDetail">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="a">
                <a href={url} rel="noreferrer" target="_blank" className="link">Detail</a>
            </div>
        </div>
    );

}

export default NewsCard;