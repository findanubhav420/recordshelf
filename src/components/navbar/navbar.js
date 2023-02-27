import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
    const page = props.title === 'all songs'? '/genres' : '/shelf';
    return (
        <div className="navbar">
        <div className="navbar-text">
            <h1>{props.title}</h1>
        </div>
        <div className="navbar__buttons">
            <Link to={page}><button className="nav-button"><img src={props.icon} alt="icon"/></button></Link>
        </div>
        </div>
    );
}

export default Navbar;