import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router';
import { assets, navItems } from '../assets/assets';
import {MenuBtn3Bars } from './MenuBtn';
import { li } from 'framer-motion/client';

export const Navbar = () => {

  const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={assets.bg} className="w-15 h-15" alt="" />
      </div>     

      {/* nav items */}
      <ul>
        {navItems.map(({label, endpoint}, index) => (
          <li key={index}>
            <NavLink to={`${endpoint}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <MenuBtn3Bars />
    </nav>
  )
};