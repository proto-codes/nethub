import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Friends() {
  return (
    <div>
      <div className="page-container container-fluid d-flex">
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
