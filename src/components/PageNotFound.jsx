import React from 'react';

const PageNotFound = () => (
  <div>
    <ul>
      <li className="not-found">
        <img
          src={require('../images/not-found.png')}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            margin: 'center',
            position: 'relative'
          }}
          alt=""
        />
        <h2>Page Not Found</h2>
      </li>
    </ul>
  </div>
);

export default PageNotFound;