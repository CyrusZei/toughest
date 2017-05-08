import React, { Component } from 'react';
import Slider from 'react-slick'
import SliderSpeed from './../../../assets/images/slider/speed1.jpg';

class HeroSlider extends Component {
  render() {
    const SliderStyle = {
      backgroundImage: 'url('+ SliderSpeed + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px'
    };

    const settings = {
      dots : true,
      infinite: true,
      speed:500,
      autoplaySpeed: 500000,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      pauseOnHover: true,
      adaptiveHeight:true

    } ;

    return (
      <Slider {...settings}>
        <div style={SliderStyle}>
          <h3 className="slider_title">Speed</h3>
          <h5>How fast are you</h5>

        </div>

        <div>
          <h3>2</h3>
        </div>

        <div>
          <h3>3</h3>
        </div>


      </Slider>

    );
  }

}


export default HeroSlider
