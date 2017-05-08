import React, { Component } from 'react';
import './App.css';

import Header from './sections/header/header';



class App extends Component {
  render() {
    return (
      <div className="container overflow_hidden">
        <Header/>
      </div>
    );
  }
}

export default App;
