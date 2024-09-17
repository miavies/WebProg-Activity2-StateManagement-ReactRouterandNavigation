import React from 'react';
import image from './img/sadxiao.png';

function NotFound() {
  return (
    <div className="pageOpener">
      <h1>404 - Page Not Found</h1>
      <img src={image} className="missingimage" alt="404"/>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
