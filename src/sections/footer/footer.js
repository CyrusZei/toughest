import React, { Component } from 'react';
import ToughestLogo from './../../assets/images/toughest-logo.png';

class Footer extends Component {
  render() {
    return(
      <div>
        <div className='row black'>
          <div className='block color display_flex'>
            <img className='toughest_logo' src={ToughestLogo} alt='Toughest' />
          </div>
        </div>
        <div className='row black footer_align_baseline'>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title footer_text_size'>About</p>
              <p className='big_title_sub footer_text_size'>We’ve all heard how crucial it is to set intentions, goals and targets. Powerful goals electrify us.
</p>
            </div>
          </div>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title footer_text_size'>Information</p>
              <p className='big_title_sub footer_text_size'>Motivation can take you far, but it can take you even further if you first find your vision. Your vision will motivate and guide you on your </p>
            </div>
          </div>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title footer_text_size'>Contact</p>
              <p className='big_title_sub footer_text_size'>info@toughest.se</p>
              <p className='big_title_sub footer_text_size'>040 - 123 45</p>
              <p className='big_title_sub footer_text_size'>Malmö</p>

            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Footer;
