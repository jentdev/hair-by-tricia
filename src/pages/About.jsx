import React from 'react';
import { AllStylists } from '../components/AllStylists';

export const About = () => {
  return (
    <div className="about">
      <div>
        <h2>meet our team</h2>
        <div className="about-intro">
          <p>At Hair by Tricia, our expert stylists are passionate about helping you look and feel your best.</p>
          <p>With years of experience and a dedication to the latest trends and techniques, each member of our team offers something special.</p>
          <p>Whether you're here for a bold transformation or a subtle refresh, you can trust our stylists to give you the attention and care you deserve.</p>
          <p>Get to know the professionals behind your next great look!</p>
        </div>
      </div>
      <AllStylists />
    </div>
  )
};