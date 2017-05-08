import React , { Component } from 'react';
import axios from 'axios';


class Competitors extends Component {

  componentWillMount() {



    axios({
      method:'get',
      url:'http://api.notified.com/Channel/66bbc5cf-0030-e711-80d6-a0d3c1f2861f?key=ab07bd54-7766-46dd-8480-2daa14035af0&format=basic&limit=50',
      headers: ''

    })
    .then((snap) => {
      console.log(snap.headers);
    });


  }

  render() {
  return(
    <div>

      <div className='row grey'>
        <div className='block color display_flex'>
          <div>
            <p className='big_title'>Competitors</p>
            <p className='big_title_sub'>What they say</p>
          </div>
        </div>
      </div>

      <div className='row grey'>
        <div className='block _50 color display_flex'>
          <div>
            <p className='big_title'>Competitors</p>
            <p className='big_title_sub'>What they say</p>
          </div>
        </div>
        <div className='block _50 color display_flex'>
          <div>
            <p className='big_title'>Competitors</p>
            <p className='big_title_sub'>What they say</p>
          </div>
        </div>
      </div>

      <div className='row grey'>
        <div className='block _50 color display_flex'>
          <div>
            <p className='big_title'>Competitors</p>
            <p className='big_title_sub'>What they say</p>
          </div>
        </div>
        <div className='block _50 color display_flex'>
          <div>
            <p className='big_title'>Competitors</p>
            <p className='big_title_sub'>What they say</p>
          </div>
        </div>
      </div>

    </div>
  );
}

}

export default Competitors;
