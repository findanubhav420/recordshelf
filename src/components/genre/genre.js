import React from "react";
import './genre.css';
import Body from "../../components/body/body";

function Genre({name}) {

const IconUrl = require(`../../assets/genre-${name.toLowerCase()}.png`)
return (
    <div className="genre">
        <div className="genre-header">
            <img id="genre-img" src={IconUrl} alt="genre-img"/>
            <button className="genre-button">{name}</button>
        </div>
        <Body genre={name}/>
    </div>
);
}

export default Genre;