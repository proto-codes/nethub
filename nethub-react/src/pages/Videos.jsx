import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Videos() {
  return (
    <div>
      <div className="container-fluid d-flex">
          {/* <Header /> */}
          <Nav videoActive="text-light bg-custom-color active" />
          <section className="video-section p-2">
            <h3>Videos</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Videos;
