import React, { useState } from 'react';
import axios from 'axios';

const NatureCard = () => {
  const [term] = useState("nature");


  const onDivClick = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 75068bb46a637ea5e0ce385d5a5c0f8237f59c6e11df77508ce84496112d51de"
      },
      params: {
        query: term
      }
    });

    console.log(response.data.results);
  }

  return (
    <div className="NatureCard" style={{border: "2px solid black", width: "200px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={onDivClick}>
      {term}
    </div>
  );
};

export default NatureCard;