import React from 'react';



const ImageCard = (props) => {
  return (
    <div className="ImageCard">
      <div className="ui fluid image">
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
      />
      </div>
    </div>
  );
};

export default ImageCard;