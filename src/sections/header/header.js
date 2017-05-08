import React, { Component } from 'react';
import Nav from './nav/nav'
import HeroSlider from './heroSlider/heroSlider';



class Header extends Component {
  render () {
    return (
      <div>
        <Nav />
        <HeroSlider/>
        <br></br>
        <div>it works</div>
      </div>

    );
  }
}


export default Header;
