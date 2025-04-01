import React from 'react';
import { priceList } from '../assets/priceListAssets';

export const Services = () => {

  return (
    <div className="services">
      <div className="container">
        {priceList.map(({type, prices}) => (
          <div className="service" key={type}>
            <h3>{type}</h3>
            <div className="type">
              {prices.map(({style, min, max}) => (
                <div className="price" key={style}>
                  <div className="style">{style}</div>
                  <div className="range">${min} { max === 999 ? 'and up' : `- $${max}`}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
};

// Hair Color
// Hair Treatments
// Extensions & Add-Ons
// Special Services