import React , { Component } from 'react';


class SignedUp extends Component {
  render() {
    return (
      <div className='row black'>
        <div className='block _33  color display_flex'>
          <div>
            <p className='signed_up_title'>Signed Up</p>
            <p className='signed_up_sub'>2345</p>
          </div>
        </div>

        <div className='block _33  color display_flex'>
          <div>
            <p className='signed_up_title'>Best Time</p>
            <p className='signed_up_sub'>4H : 13min</p>
          </div>
        </div>

        <div className='block _33  color display_flex'>
          <div>
            <p className='signed_up_title'>Average Age</p>
            <p className='signed_up_sub'>32 Years</p>
          </div>
        </div>


      </div>
    );
  }
}

export default SignedUp;
