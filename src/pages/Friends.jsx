import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Friends() {
  return (
    <div>
      <div className="page-contanier">
          {/* <Header /> */}
          <Nav />
          <section className="home-section">
            <h3>Friends</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Friends;
