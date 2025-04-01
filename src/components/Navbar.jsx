import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

import MobileMenu from "./MobileMenu";
import { assets, navItems } from "../assets/assets";

export const Navbar = () => {

  const [scrolledPast, setScrolledPast ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (scrollY > 50) {
            setScrolledPast(true);
        }
        else {
            setScrolledPast(false);
        }
    });
}, []);

  return (
    <nav className={`${scrolledPast ? 'bg-dark' : ''}`}>      
        <div className="logo-nav">
          <div className="logo">
            <img src={assets.logo} alt="" />
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
        </div>

    </nav>
  );
};
