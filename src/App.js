import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Homed from './Homed'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Employment from './Employment'


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
