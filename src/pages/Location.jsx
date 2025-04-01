import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

import { assets } from '../assets/assets';

export const Location = () => {

  const marker = {
    geacode: [28.0868093,-82.7816883],
    popUp: 'Hair by Tricia'
  };

  const customIcon = new Icon({
    iconUrl: assets.pin,
    iconSize: [38, 38] // size of icon
  });

  return (
    <div className="location">

      <div className="our-location">
        <h1>our location</h1>
        <p><span>Hair by Tricia</span> is conveniently located and ready to help you look and feel your best.</p>
      </div>

      <div className="address">
        <h1>address</h1>
        <h3>Hair by Tricia</h3>
        <p>698 Dodecanese Blvd</p>
        <p>Tarpon Springs, FL 34689</p>
      </div>

      <div className="hours">
        <h1>business hours</h1>
        <ul>
          <li><span className="dates">monday - saturday:</span> <span>9:00am - 6:00pm</span></li>        
          <li><span className="dates">sunday:</span> <span>closed</span></li>
        </ul>
      </div>

      <div className="map">
        <p>Find us on the map below:</p>
        <div className="leaflet-map">

        <MapContainer center={[28.0868093,-82.7816883]} zoom={13}>
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          <Marker position={marker.geacode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>         
        </MapContainer>

        </div>
      </div>

    </div>
  )
}