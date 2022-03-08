import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1 className="heading">We produce happiness</h1>
      <p><strong>ART</strong>holding</p>
      <div className='hero-btns'>
        <a href='#123'><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET STARTED
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;