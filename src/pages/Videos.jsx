import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Videos() {
  return (
    <div>
      <div className="page-container container-fluid d-flex">
          {/* <Header /> */}
          <Nav />
          <section className="video-section">
            <h3>Videos</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Videos;
