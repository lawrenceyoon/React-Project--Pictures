import React, { useState } from 'react';

import './App.css';
import unsplash from '../../apis/unsplash';

import SearchBar from '../SearchBar';
import ImageList from '../ImageList';
import NatureCard from '../cards/NatureCard';
import SunsetCard from '../cards/SunsetCard';
import BeachCard from '../cards/BeachCard';

const App = () => {
  // state
  const [images, setImages] = useState([]);

  // event handlers
  const onFormSubmit = async (searchTerm) => { 
    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm
      }
    });

    setImages(response.data.results);
  };

  const onDivClick = (name) => {
    onFormSubmit(name);
  };

  // JSX
  return (
    <div className="App">
      <div className="ui container">

        <SearchBar onSubmit={onFormSubmit} />

        <div className="ui segment">
          <div className="ui three cards">
            <NatureCard onCardClick={onDivClick} />

            <SunsetCard onCardClick={onDivClick} />

            <BeachCard onCardClick={onDivClick} />
          </div>
        </div>
        
        <ImageList listOfImages={images} />

      </div>
    </div>
  );
};

            // <div onClick={()=> onDivClick("nature")} className="Nature card">
            //   Nature
            // </div>

export default App;