import React, { Component } from 'react';
import sponsors01 from './../../assets/images/sponsors/exported/01.png';
import sponsors02 from './../../assets/images/sponsors/exported/02.png';
import sponsors03 from './../../assets/images/sponsors/exported/03.png';

import sponsors04 from './../../assets/images/sponsors/exported/04.png';
import sponsors05 from './../../assets/images/sponsors/exported/05.png';
import sponsors06 from './../../assets/images/sponsors/exported/06.png';


class Sponsors extends Component {
  render() {
    return(
      <div>
        <div className='row'>
          <div className='block display_flex'>
            <div>
              <p className='signed_up_sub_large'>Thanks to</p>
              <p className='signed_up_title_small'>our sponsors</p>
            </div>
          </div>
        </div>

        <div className='row align_sponsors_baseline'>
          <div className='block _33'>
            <img src={sponsors01} alt='Sponsors' />
          </div>
          <div className='block _33'>
            <img src={sponsors02} alt='Sponsors' />
          </div>
          <div className='block _33'>
            <img src={sponsors03} alt='Sponsors' />
          </div>
        </div>

        <div className='row align_sponsors_baseline'>
          <div className='block _33'>
            <img src={sponsors04} alt='Sponsors' />
          </div>
          <div className='block _33'>
            <img src={sponsors05} alt='Sponsors' />
          </div>
          <div className='block _33'>
            <img src={sponsors06} alt='Sponsors' />
          </div>
        </div>
      </div>


    );
  }
}

export default Sponsors;
