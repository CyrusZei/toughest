import React, { Component } from 'react';

import a01 from './../../assets/images/gallery/01.jpg';
import a02 from './../../assets/images/gallery/02.jpg';
import a03 from './../../assets/images/gallery/03.jpg';

import b01 from './../../assets/images/gallery/04.jpg';
import b02 from './../../assets/images/gallery/05.jpg';
import b03 from './../../assets/images/gallery/06.jpg';

import c01 from './../../assets/images/gallery/07.jpg';
import c02 from './../../assets/images/gallery/08.jpg';
import c03 from './../../assets/images/gallery/09.jpg';

import d01 from './../../assets/images/gallery/10.jpg';
import d02 from './../../assets/images/gallery/11.jpg';
import d03 from './../../assets/images/gallery/12.jpg';

import e01 from './../../assets/images/gallery/13.jpg';
import e02 from './../../assets/images/gallery/14.jpg';
import e03 from './../../assets/images/gallery/15.jpg';








class Gallery extends Component {
  render() {
    return (
      <div>
        <div className='row black'>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={a01} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={a02} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={a03} />
          </div>
        </div>
        <div className='row black'>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={b01} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={b02} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={b03} />
          </div>
        </div>
        <div className='row black'>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={c01} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={c02} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={c03} />
          </div>
        </div>
        <div className='row black'>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={d01} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={d02} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={d03} />
          </div>
        </div>
        <div className='row black'>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={e01} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={e02} />
          </div>
          <div className='block _33 no_padding'>
            <img className='bigmap' src={e03} />
          </div>
        </div>

      </div>

    );
  }

}

export default Gallery;
