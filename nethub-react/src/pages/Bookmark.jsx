import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';

function Bookmark() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="container-fluid d-flex">
        <Nav menuBtn={handleMenuVisibility} />
        {menuVisible && (
          <Menu closeMenuBtn={handleMenuVisibility} />
        )}

        <section className="Bookmark-section p-2">
          <h3>Bookmark</h3>
        </section>
        <Suggestions />
      </div>
    </div>
  )
}

export default Bookmark;
