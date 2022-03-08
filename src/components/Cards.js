import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="123" className='cards'>
      <h1>Check out these Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/foto1.jpg'
              text='Explore more doors'
              label='Doors'
              path='/dyer'
            />
            <CardItem
             src='images/dr6.jpg'
              text='Explore more windows' 
              label='House windows'
              path='/windows'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rt5.jpg'
              text='See our job                                          '
              label='Shutters'
              path='/shutters'
            />
            <CardItem
              src='images/lm1.jpg'
              text='See our job'
              label='Laminate'
              path='/laminate'
            />
            <CardItem
              src='images/dyer1.jpg'
              text='See our job'
              label='Outside doors'
              path='/outdoors'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;