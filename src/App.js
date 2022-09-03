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

      <footer>
        © {new Date().getFullYear()} Instagram <a href='https://github.com/Abdulmojeed58' target='_blank'>Ayoola Abdulmojeed</a>
      </footer>
    </div>
  );
}

export default App;
