import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
