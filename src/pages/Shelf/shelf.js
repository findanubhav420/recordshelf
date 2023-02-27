import React from "react";
import "./shelf.css";
import Header from "../../components/header/header.js";
import Navbar from "../../components/navbar/navbar.js";
import gridIcon from "../../assets/icon-genre.svg";
// import Card from "../../components/card/card.js";
// import Image from "../../assets/genre-pop.png";
// import Icon from "../../assets/heart-red.svg";
import Body from "../../components/body/body";

function Shelf() {
    return (
        <div className="shelf">
            <Header />
            <div className="shelf-body">
                <Navbar title={"all songs"} icon={gridIcon} />
                <Body/>
            </div>
        </div>
    );
}

export default Shelf;