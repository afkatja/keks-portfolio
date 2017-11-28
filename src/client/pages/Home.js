import React from 'react';

import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div>
      <header className="home-header">
        <figure>
          <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/23270436_1494632617301801_5597051196616039315_o.jpg?oh=a1cf12e951860f05268df962696958d9&oe=5A94CE81" alt="example of art" />
        </figure>
      </header>
      <div className="page-container">
        <Welcome />
      </div>
    </div>
  );
}
