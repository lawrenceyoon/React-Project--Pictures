import React from 'react';
import './NatureCard.css';

const ClickCard = (props) => {

  const onDivClick = (term) => {
    props.onCardClick(term);
  };
  
  return (
    <div className="NatureCard card" onClick={() => onDivClick("nature")}>
      Nature
    </div>
  );
};

export default ClickCard;