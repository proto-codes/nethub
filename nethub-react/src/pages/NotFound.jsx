import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div className="container-fluid d-flex">
        <Nav />
        <section className='d-flex align-items-center justify-content-center p-2'>
          <div className='text-center'>
            <h1 className='fw-bolder display-1'>404</h1>
            <h4>Sorry we couldn't find the page.</h4>
            <p>But don't worry, you can find plenty of other things on our hompage</p>
            <Link to='/' className='btn btn-primary'>Back to homepage</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
export default NotFound;
