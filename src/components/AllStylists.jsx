import React from 'react';
import { stylists } from '../assets/stylists/stylistAssets';

export const AllStylists = () => {
  return (
    <div className="stylists">
        {stylists.map(({stylist, img, desc}) => (
            <div key={stylist} className="stylist">
                <h3>{stylist}</h3>
                <img src={img} alt={stylist} />
                <p>{desc}</p>
            </div>
        ))}
    </div>
  )
}
