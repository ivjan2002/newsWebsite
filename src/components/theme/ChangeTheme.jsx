import { useContext } from "react";
import "./Theme.css"
import  {ThemeContext}  from "../../context/ThemeContext";
import sun from "../../assets/img/sun.jpg";
import MOON from "../../assets/img/MOON.png";

const ChangeTheme=()=>{
    const theme=useContext(ThemeContext);
    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"})

    }
    return(
        <div className="toggle">
            <img src={sun} alt="sun" className="icon"></img>
            <img src={MOON} alt="moon" className="icon"></img>
            <div className="button" onClick={handleClick} style={{left:theme.state.darkMode?0:25}}></div>
        </div>
    );

}

export default ChangeTheme;