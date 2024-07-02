import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Shop() {
  return (
    <div>
      <div className="page-contanier">
          {/* <Header /> */}
          <Nav />
          <section className="home-section">
            <h3>Shop</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Shop;
