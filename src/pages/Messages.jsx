import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Messages() {
  return (
    <div>
      <div className="page-container container-fluid d-flex">
          {/* <Header /> */}
          <Nav />
          <section className="home-section">
            <h3>Messages</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Messages;
