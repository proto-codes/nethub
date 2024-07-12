import React from 'react';
import Nav from '../components/Nav';

function NotFound() {
  return (
    <div>
      <div className="page-container container-fluid d-flex">
          <Nav />
          <section>
            <h3>Error 404: Page Not Found</h3>
          </section>
        </div>
    </div>
  )
}

export default NotFound;
