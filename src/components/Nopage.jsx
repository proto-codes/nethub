import React from 'react';
import Nav from '../components/Nav';

function Nopage() {
  return (
    <div>
      <div className="page-contanier">
          {/* <Header /> */}
          <Nav />
          <section>
            <h3>Error 404: Page Not Found</h3>
          </section>
        </div>
    </div>
  )
}

export default Nopage;
