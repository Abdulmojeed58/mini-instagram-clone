import React from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <Bio />
      </section>
        <Gallery />
    </div>
  );
}

export default App;
