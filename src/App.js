import React, { Component } from 'react';
import './App.css';

import Header from './sections/header/header';
import ProveIt from './sections/miniSections/proveit/proveit';
import ObsMap from './sections/obsMap/obsMap';
import BeaLegend from './sections/miniSections/beaLegend/beaLegend';
import Gallery from './sections/gallery/gallery';
import SignedUp from './sections/miniSections/signedup/signedup';



class App extends Component {
  render() {
    return (
      <div className="container overflow_hidden">
        <Header/>
        <ProveIt />
        <ObsMap />
        <BeaLegend />
        <Gallery />
      </div>
    );
  }
}

export default App;
