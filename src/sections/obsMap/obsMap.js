import React, { Component } from 'react';
import ObsMapBig from './../../assets/images/bigmap.jpg';


class ObsMap extends Component {
  render() {
    return (
      <div className='row black'>
        <div className='block color display_flex no_padding'>
          <img className='bigmap' src={ObsMapBig} />
        </div>
      </div>
    );
  }

}

export default ObsMap;
