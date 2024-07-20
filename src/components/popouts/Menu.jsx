import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
        <div className="menu-popout">
          <h3>Menu</h3>
          <p>All tabs</p>    
          <div className="row">
            <div className="col">
              <li title='Profile' className='hover rounded'>
                <Link to="/profile" className='d-flex gap-2 align-items-center p-1 px-2'>
                <i className="bi bi-person fs-2"></i><span className='fs-4'> Profile</span>
                </Link>
              </li>
            </div>
            <div className="col">
              <li title='Home' className='hover rounded'>
                <Link to="/" className='d-flex gap-2 align-items-center p-1 px-2'>
                <i className="bi bi-house fs-2"></i><span className='fs-4'> Home</span>
                </Link>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <li title="Shop" className='hover rounded'>
                  <Link to='/shop' className='d-flex gap-2 align-items-center p-1 px-2'>
                  <i className="bi bi-bag fs-2"></i><span className='fs-4'> Shop</span>
                  </Link>
              </li>
            </div>
            <div className="col">
              <li title="Videos" className='hover rounded'>
                  <Link to='/videos' className='d-flex gap-2 align-items-center p-1 px-2'>
                  <i className="bi bi-camera-reels fs-2"></i><span className='fs-4'> Video</span>
                  </Link>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <li title="Friends" className='hover rounded'>
                  <Link to='/friends' className='d-flex gap-2 align-items-center p-1 px-2'>
                  <i className="bi bi-person-plus fs-2"></i><span className='fs-4'> Friends</span>
                  </Link>
                </li>
            </div>
            <div className="col">
                <li title="Messages" className='hover rounded'>
                    <Link to='/messages' className='d-flex gap-2 align-items-center p-1 px-2'>
                    <i className="bi bi-envelope fs-2"></i><span className='fs-4'> Messages</span>
                    </Link>
                </li>
            </div>
          </div>
          <br />

          <Link to='/signin' className='btn btn-danger'>Sign Out</Link>
        </div>   
    </div>
  )
}

export default Menu
