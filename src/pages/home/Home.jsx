import "./Home.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import ChangeTheme from "../../components/theme/ChangeTheme";
import useNews from "../../hooks/useNews";

const Home = () => {
    const { news, loading, theme } = useNews("", "us");

    // Provera da li theme postoji pre nego što mu pristupiš
    const darkMode = theme?.state?.darkMode ?? false;

    useEffect(() => {}, [darkMode]);

    return (
        <div className="container" style={{ backgroundColor: darkMode ? "#2b2a29" : "white" }}>
            <ChangeTheme />
            <div className="slider">
                <Slider sliderNews={news.slice(0, 3)} />
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
