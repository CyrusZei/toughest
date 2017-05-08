import React, { Component } from 'react';
import Slider from 'react-slick'

class HeroSlider extends Component {
  render() {
    const settings = {
      dots : true,
      infinite: true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      pauseOnHover: true
    } ;

    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>


      </Slider>

    );
  }

}


export default HeroSlider
