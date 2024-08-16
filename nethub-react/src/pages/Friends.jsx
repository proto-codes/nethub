import React from 'react';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Friends() {
  return (
    <div>
      <div className="container-fluid d-flex">
          {/* <Header /> */}
          <Nav friendsActive="text-light bg-custom-color active" />
          <section className="friends-section p-2">
            <h3>Friends</h3>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Friends;
