import React from 'react';

const ImageList = (props) => {
  const images = props.listOfImages.map((image) => {
    return <img src={image.urls.regular} alt="Ok" />
  });

  // JSX
  return (
    <div className="ImageList">
      {images}
    </div>
  );
};

export default ImageList;