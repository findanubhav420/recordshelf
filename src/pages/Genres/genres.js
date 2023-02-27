import React, { useEffect, useState} from "react";
import './genres.css';
import Header from "../../components/header/header.js";
import Navbar from "../../components/navbar/navbar.js";
import genreIcon from "../../assets/icon-grid.svg";
import Genre from "../../components/genre/genre";
import makeRequest
 from "../../utils/makeRequest";
import { GET_RECORDS } from "../../constants/apiEndPoints";

function Genres() {
const [list,setList] = useState([])
const genreList=[]
useEffect(()=>{
    makeRequest(GET_RECORDS)
    .then((response)=>{
        for(let i=0; i<response.data.length; i++){
            if(genreList.indexOf(response.data[i].genre.name)===-1){
                genreList.push(response.data[i].genre.name)
            }
        }
        setList(genreList)
    })
},[])

return (
    <div className="genres">
        <Header />
        
        
        <div className="genres-body">
        <Navbar title={"genres"} route="shelf" icon={genreIcon} />
            {list.map((genre)=> <Genre name={genre}/> )}
        </div>
    
    </div>
);
}

export default Genres;