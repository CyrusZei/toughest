import React, { Component } from 'react';
import Slider from 'react-slick'
import SliderSpeed from './../../../assets/images/slider/speed1.jpg';
import SliderFigther from './../../../assets/images/slider/figther1.jpg';
import SliderStamina from './../../../assets/images/slider/stamina1.jpg';
import SliderTeamwork from './../../../assets/images/slider/teamwork1.jpg';






class HeroSlider extends Component {
  render() {
    const SliderSpeedImage = {
      backgroundImage: 'url('+ SliderSpeed + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px'
    };
    const SliderFigtherImage = {
      backgroundImage: 'url('+ SliderFigther + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px'
    };
    const SliderStaminaImage = {
      backgroundImage: 'url('+ SliderStamina + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px'
    };
    const SliderTeamworkImage = {
      backgroundImage: 'url('+ SliderTeamwork + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '500px'
    };


    const settings = {
      dots : true,
      infinite: true,
      speed:500,
      autoplaySpeed: 5000,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      pauseOnHover: true,
      adaptiveHeight:true

    } ;

    return (
      <Slider {...settings}>
        <div style={SliderSpeedImage}>
          <h3 className="slider_title">Speed</h3>
          <h5 className="slider_sub">How fast are you</h5>

        </div>

        <div style={SliderFigtherImage}>
          <h3 className="slider_title">Figther</h3>
          <h5 className="slider_sub">Do you give up</h5>

        </div>

        <div style={SliderStaminaImage}>
          <h3 className="slider_title">Stamina</h3>
          <h5 className="slider_sub">How far can you go</h5>

        </div>
        <div style={SliderTeamworkImage}>
          <h3 className="slider_title">Teamwork</h3>
          <h5 className="slider_sub">Are you a teamplayer</h5>

        </div>


      </Slider>

    );
  }

}


export default HeroSlider
