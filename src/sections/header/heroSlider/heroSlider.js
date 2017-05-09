import React, { Component } from 'react';
import Slider from 'react-slick'
import SliderSpeed from './../../../assets/images/slider/speed1a.jpg';
import SliderFigther from './../../../assets/images/slider/figther1a.jpg';
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
      autoplaySpeed: 500000,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      pauseOnHover: true,
      adaptiveHeight:true

    } ;

    return (
      <Slider {...settings}>
        <div style={SliderSpeedImage}>
          <div>
            <h3 className="slider_title white">Speed</h3>
            <h5 className="slider_sub white">How fast are you</h5>
          </div>


        </div>

        <div style={SliderFigtherImage}>
          <div className='align_right'>
            <h3 className="slider_title white">Figther</h3>
            <h5 className="slider_sub white">Do you give up</h5>
          </div>
        </div>

        <div style={SliderStaminaImage}>
          <div className='align_right'>
            <h3 className="slider_title white">Stamina</h3>
            <h5 className="slider_sub white">How far can you go</h5>
          </div>
        </div>
        <div style={SliderTeamworkImage}>
          <div className='align_right'>
            <h3 className="slider_title white">Teamwork</h3>
            <h5 className="slider_sub white">Are you a teamplayer</h5>
          </div>
        </div>


      </Slider>

    );
  }

}


export default HeroSlider
