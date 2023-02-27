import {React, useState, useEffect} from "react";
import "./body.css";
import Card from "../card/card.js";
import makeRequest from "../../utils/makeRequest";
import { GET_RECORDS } from "../../constants/apiEndPoints";


function Body({genre}) {
    let [record, setRecord] = useState([]);

    const [error, setError] = useState();

    useEffect(() => {
    makeRequest(GET_RECORDS)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((e) => {
        setError(e.message);
      });    
  }, []);

  const genreRecords = record.filter((dataRecord) => dataRecord.genre.name === genre)

  if(genre){
    record = [...genreRecords]
  }

  if (error) {
    return (
      <div className="blogDataError">
        <p data-testid="Error">{error}</p>
      </div>
    );
  }

    return (
        <div className="shelf-content">
                    {record.map((dataRecord, index)=> <Card key={index} index={index} data={dataRecord} /> )}
        </div>
    );
}

export default Body;