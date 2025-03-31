import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../assets/assets';
import { NavLink } from 'react-router';
import { AppContext } from '../context/AppContext';
import { MobileBtn } from './MobileBtn';

const MobileMenu = () => {
    const { menuOpen } = useContext(AppContext);
    
  return (
    <div className="mobile-menu">
        {/* <button onClick={() => setMenuOpen(prev => !prev)}>mobile menu</button> */}
        <MobileBtn />
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="items"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6, type: 'spring'}}
                >
                    <ul>
                        {navItems.map(({label, endpoint}) => (
                            <li key={label}>
                                <NavLink to={endpoint}>{label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
};

export default MobileMenu;