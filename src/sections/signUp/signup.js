import React, { Component } from 'react';


class Signup extends Component {
  render() {
    return(
      <div className='row black'>
        <div className='block color display_flex'>
          <div className='center_element'>
            <p className='signed_up_sub_large'>Sign up today</p>
            <p className='signed_up_title_small'>and become a legend</p>
            <button className='sign_up_button'>SIGN UP</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Signup;
