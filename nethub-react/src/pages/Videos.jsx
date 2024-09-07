import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';

function Videos() {  
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="container-fluid d-flex">
        <Nav videoActive="text-light bg-custom-color active" menuBtn={handleMenuVisibility} />
        {menuVisible && (
          <Menu closeMenuBtn={handleMenuVisibility} />
        )}

        <section className="video-section p-2">
          <h3>Videos</h3>
        </section>
        <Suggestions />
      </div>
    </div>
  )
}

export default Videos;
