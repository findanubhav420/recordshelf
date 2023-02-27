import {React, useState, useEffect} from "react";
import { GET_LIKES, UPDATE_LIKE } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import "./card.css";
import redHeart from "../../assets/heart-red.svg";
import grayHeart from "../../assets/heart-gray.svg";

function Card(props) {

    const {data} = props;
    const {index} = props;

    const color = {
        light: '#DFDFDF',
        dark: '#ABABAB'
    }

    const cardColor = index%2===0 ? color.light : color.dark;

    const [count, setCount] = useState();
    const [like, setLike] = useState(false);

    useEffect(() => {
        makeRequest(GET_LIKES(data.id))
        .then((response) => {
            setCount(response.data.count);
            setLike(response.data.like);
        })

    }, []);

    const handlelike = async() => {
        like === true? setCount(count-1): setCount(count+1);
        setLike(!like)
        const response = await makeRequest(UPDATE_LIKE(data.id), {data: {like: !like}})
        console.log(response)
    }

    const heartUrl= like === true ? redHeart : grayHeart;
    return (
        <div style={{backgroundColor: `${cardColor}`}} className="card">
            <div className="card-image">
                <img id="song-image"src={data.imageUrl} alt="album art" />
            </div>
            <div className="card-content">
                <div className="card-info">
                    <div className="card-title">
                        {data.name}
                    </div>
                    <div className="card-subtitle">
                        {data.artist.name}
                    </div>
                </div>
                <div className="card-icon">
                    <button id="heart-button" onClick={handlelike}>
                    <img src={heartUrl} alt="heart icon" /> 
                    </button>
                    <div class="centered">{count}</div>
                </div>                
            </div>
        </div>
    );
}

export default Card;