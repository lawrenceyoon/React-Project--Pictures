import React from 'react';
import './BeachCard.css';

const BeachCard = (props) => {

  const onDivClick = (term) => {
    props.onCardClick(term);
  };
  
  return (
    <div id="BeachCard" className="card" onClick={() => onDivClick("beach")}>
      Beach
    </div>
  );
};

export default BeachCard;