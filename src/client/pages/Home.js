import React from 'react';

import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div>
      <header className="home-header">
        Logo or image here
      </header>
      <div className="page-container">
        <Welcome />
      </div>
    </div>
  );
}
