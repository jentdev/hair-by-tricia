import React from "react";
import { NavLink } from "react-router";

import MobileMenu from "./MobileMenu";
import { assets, navItems } from "../assets/assets";
// import { assets, navItems } from '../assets/assets';

export const Navbar = () => {
  return (
    <nav>      
        <div className="logo">
          logo
          {/* <img src={assets.bg} className="w-15 h-15" alt="" /> */}
        </div>

        <div className="navlinks">
          {/* nav items */}
          <ul>
            {navItems.map(({ label, endpoint }) => (
              <li key={label}>
                <NavLink to={endpoint}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* hamburger menu */}
          <MobileMenu />
        </div>

    </nav>
  );
};
