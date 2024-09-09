import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';

function Friends() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="container-fluid d-flex">
          <Nav friendsActive="bg-custom-color active" menuBtn={handleMenuVisibility} />
          {menuVisible && (
            <Menu closeMenuBtn={handleMenuVisibility} />
          )}

          <section className="friends-section p-2">
            <h3>Friends</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Friends;
