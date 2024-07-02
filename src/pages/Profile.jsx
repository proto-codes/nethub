import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Profile() {
  return (
    <div>
      <div className="page-contanier">
          {/* <Header /> */}
          <Nav />
          <section className="home-section">
            <h3>Profile</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Profile;
