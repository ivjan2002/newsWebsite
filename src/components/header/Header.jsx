//import styles from "./Header.modules.css";
import "./Header.css"; 
import Navbar from "../navbar/Navbar";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Header=()=>{
    const[search,setSearch]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/search",{state:search});
        setSearch("")
    }
    return(
        <div className="container">
            <div className="top">
                <h1>OAK NEWS</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="search" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                    <button type="submit">SEARCH</button>
                </form>
            </div>
            <Navbar/>
        </div>
    );

}

export default Header;