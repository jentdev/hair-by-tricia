import React from 'react'

export const Location = () => {
  return (
    <div>

      <div className="our-location">
        <h2>our location</h2>
        <p><span>Hair by Tricia</span> is conveniently located and ready to help you look and feel your best.</p>
      </div>

      <div className="address">
        <h1>address</h1>
        <p>Hair by Tricia</p>
        <p>698 Dodecanese Blvd</p>
        <p>Tarpon Springs, FL 34689</p>
      </div>

      <div className="hours">
        <h1>business hours</h1>
        <ul>
          <li><span>monday - friday:</span> <span>9:00am - 6:00pm</span></li>
          <li><span>Saturday:</span> <span>9:00am - 7:00pm</span></li>
          <li><span>sunday:</span> <span>closed</span></li>
        </ul>
      </div>

      <div className="map">
        <p>find us on the map below:</p>
        <div className="leaflet-map"></div>
      </div>

    </div>
  )
}