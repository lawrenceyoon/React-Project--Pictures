import React, { useState } from 'react';
import unsplash from '../apis/unsplash';

const NatureCard = () => {
  // state
  const [term] = useState("nature");

  // event handlers
  const onDivClick = async () => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    console.log(response.data.results);
  }

  // JSX
  return (
    <div className="NatureCard" style={{border: "2px solid black", width: "200px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={onDivClick}>
      {term}
    </div>
  );
};

export default NatureCard;