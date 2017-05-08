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
        <div className='row black'>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title'>About</p>
              <p className='big_title_sub'>Sign up</p>
            </div>
          </div>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title'>Information</p>
              <p className='big_title_sub'>Sign up</p>
            </div>
          </div>
          <div className='block _33 color display_flex'>
            <div>
              <p className='big_title'>Contact</p>
              <p className='big_title_sub'>Sign up</p>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Footer;
