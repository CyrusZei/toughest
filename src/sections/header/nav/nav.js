import React, { Component } from 'react';
import Logo from './../../../assets/images/toughest-logo.png'

class Nav extends Component {
  render() {
    return (
      <div className='row black nav'>
        <div className='block _25'>
          <img src={Logo} alt='Toughest'/>
        </div>
        <div className='block _75'>
          <ul className='nav_ul'>
            <li><a href="#">SIGN UP</a></li>
            <li><a href="#">RACE</a></li>
            <li><a href="#">INFO</a></li>
            <li><a href="#">MEDIA</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">CONTACT</a></li>

          </ul>
        </div>


      </div>
    );
  }
}

export default Nav;
