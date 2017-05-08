import React, { Component } from 'react';
import Nav from './nav/nav'
import HeroSlider from './heroSlider/heroSlider';



class Header extends Component {
  render () {
    return (
      <div>
        <Nav />
        <HeroSlider/>
      </div>

    );
  }
}


export default Header;
