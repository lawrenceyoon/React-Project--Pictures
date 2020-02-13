import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import NatureCard from './NatureCard';
import unsplash from '../apis/unsplash';

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
    console.log(response.data.results); // delete later, just making sure I get lists
  };

  // JSX
  return (
    <div className="App">
      <div className="ui container">
        <SearchBar onSubmit={onFormSubmit} />
        Found: {images.length}

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