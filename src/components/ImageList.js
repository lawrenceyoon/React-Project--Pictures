import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.listOfImages.map((image) => {
    return <ImageCard image={image} key={image.id} />
  });

  // JSX
  return (
    <div className="ImageList image-columns">
      {images}
    </div>
  );
};

export default ImageList;