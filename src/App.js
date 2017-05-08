import React, { Component } from 'react';
import './App.css';

import Header from './sections/header/header';
import ProveIt from './sections/miniSections/proveit/proveit.js'


class App extends Component {
  render() {
    return (
      <div className="container overflow_hidden">
        <Header/>
        <ProveIt />

      </div>
    );
  }
}

export default App;
