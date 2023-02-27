import React from "react";
import './home.css';
import Header from '../../components/header/header.js';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    <Header/>
    <div className="sync">
      <p>: &#40; &#40;</p>
      <h1>seems a bit empty in here...</h1>
     <Link to='/shelf'> <button id="syncButton">sync</button></Link>
    </div>
    </div>
  );
}

export default Home;