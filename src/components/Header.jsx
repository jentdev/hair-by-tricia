import React from 'react';
import { assets } from '../assets/assets';

export const Header = () => {
  return (
    // <header style={{backgroundImage: `url(${assets.bg})`}}>
    <header>
      <div><img src={assets.bg} alt="" /></div>
    </header>
  )
};