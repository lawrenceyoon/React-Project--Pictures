import React, { useState } from 'react';

import './App.css';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import NatureCard from './NatureCard';

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

  // JSX
  return (
    <div className="App">
      <div className="ui container">

        <SearchBar onSubmit={onFormSubmit} />

        <ImageList listOfImages={images} />

        <div className="ui segment">
          <div className="ui three cards">
            <NatureCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;