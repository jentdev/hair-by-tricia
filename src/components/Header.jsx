import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

export const Header = () => {

  const { currentPage } = useContext(AppContext);

  return (
    <header>
      {
        currentPage === ''
        ? <div><img src={assets.bg} alt="" /></div>
        : ''
      }
    </header>
  )
};