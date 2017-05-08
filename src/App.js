import React, { Component } from 'react';
import './App.css';

import Header from './sections/header/header';
import ProveIt from './sections/miniSections/proveit/proveit';
import ObsMap from './sections/obsMap/obsMap';
import BeaLegend from './sections/miniSections/beaLegend/beaLegend';
import Gallery from './sections/gallery/gallery';
import SignedUp from './sections/miniSections/signedup/signedup';
import Competitors from './sections/competitors/competitors';
import NeverGiveUp from './sections/miniSections/neverGiveUp/nevergiveup';
import SignUp from './sections/signUp/signup';


class App extends Component {
  render() {
    return (
      <div className="container overflow_hidden">
        <Header/>
        <ProveIt />
        <ObsMap />
        <BeaLegend />
        <Gallery />
        <SignedUp />
        <Competitors />
        <NeverGiveUp />
        <SignUp />
      </div>
    );
  }
}

export default App;
