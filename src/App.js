import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './pages/Header'
import Homed from './pages/Homed'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Employment from './pages/Employment'


class App extends Component {
  render() {
    return (
      <div >
          <Header />
          <Homed />
          <About />
          <Skills />
          <Education />
          <Employment />
      </div>
    );
  }
}

export default App;
