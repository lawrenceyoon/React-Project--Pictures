import React from 'react';
import './SunsetCard.css';

const SunsetCard = (props) => {

  const onDivClick = (term) => {
    props.onCardClick(term);
  };

  return (
    <div className="SunsetCard card" onClick={() => onDivClick("sunset")}>
      Sunset
    </div>
  );
};

export default SunsetCard;