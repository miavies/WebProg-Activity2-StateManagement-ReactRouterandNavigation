import React from 'react';
import image from './img/landscape.jpg';

function Home() {
  return (
    <div className="pageOpener">
      <h1>Welcome to the Home Page!!</h1>
      <img src={image} className="homeimage" alt="landscape"/>
    </div>
  );
}

export default Home;
