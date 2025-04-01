import React from 'react';
import { stylists } from '../assets/stylists/stylistAssets';

export const AllStylists = () => {
  return (
    <div className="stylists">
        {stylists.map(({stylist, title, img, desc}) => (
            <div key={stylist} className="stylist">
                <div className="name-title">
                    <h3>{stylist}</h3>
                    <p>({title})</p>    
                </div>
                <img src={img} alt={stylist} />
                <p className="desc">{desc}</p>
            </div>
        ))}
    </div>
  )
}
