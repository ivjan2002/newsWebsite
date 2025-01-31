import "./Navbar.css";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <ul className="topUl">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/search">SEARCH</Link></li>
                <li><p>Categories:</p>
                <ul className="bottomUl">
                    <li onClick={()=>navigate("/categories",{state:{category:"business"}})}>Bussiness</li>
                    <li onClick={()=>navigate("/categories",{state:{category:"general"}})}>General</li>
                    <li onClick={()=>navigate("/categories",{state:{category:"health"}})}>Health</li>
                    <li onClick={()=>navigate("/categories",{state:{category:"science"}})}>Science</li>
                    <li onClick={()=>navigate("/categories",{state:{category:"sports"}})}>Sports</li>
                </ul>
                </li>
            </ul>
        </div>
    );

}

export default Navbar;