import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import axios from '../pages/api/axios'

function Menu(props) {
  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint
      await axios.post('/logout');
      
      // Clear localStorage or any other state management related to authentication
      localStorage.removeItem('token');
      
      // Redirect the user to the login page or home page
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error (e.g., show a notification)
    }
  };

  return (
    <div>
        <div className="menu-popout overflow-x-auto border-end bg-body px-2 position-fixed top-0 bottom-0 z-3">
          <div className='d-flex align-items-center justify-content-between mb-2 border-bottom position-sticky top-0 bg-body'>
            <button className="btn bi bi-arrow-left fs-4 p-0 px-1" onClick={props.closeMenuBtn}></button>

            <div className="dropdown">
              <button className="btn fs-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">John Doe</button>
              <div className="dropdown-menu p-2">
                ...
              </div>
            </div>

            <button className="btn bi bi-search fs-4 p-0 px-1"></button>
          </div>
          <h3>Menu</h3>
          <p className='fs-4 m-0 mb-2'>All tabs</p>    
          <div className="row gap-2 m-0 mb-2">
            <ul className="nav col rounded">
              <li title="profile" className='nav-item'>
                <Link to="/profile" className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                <i className="bi bi-person fs-2"></i><span className='fs-4'> Profile</span>
                </Link>
              </li>
            </ul>
            <ul className="nav col rounded">
              <li title='Home' className='nav-item'>
                <Link to="/" className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                <i className="bi bi-house fs-2"></i><span className='fs-4'> Home</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="row gap-2 m-0 mb-2">
            <ul className="nav col rounded">
              <li title="Shop" className='nav-item'>
                  <Link to='/shop' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                  <i className="bi bi-bag fs-2"></i><span className='fs-4'> Shop</span>
                  </Link>
              </li>
            </ul>
            <ul className="nav col rounded">
              <li title="Videos" className='nav-item'>
                  <Link to='/videos' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                  <i className="bi bi-camera-reels fs-2"></i><span className='fs-4'> Video</span>
                  </Link>
              </li>
            </ul>
          </div>
          <div className="row gap-2 m-0 mb-2">
            <ul className="nav col rounded">
                <li title="Friends" className='nav-item'>
                  <Link to='/friends' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                  <i className="bi bi-person-plus fs-2"></i><span className='fs-4'> Friends</span>
                  </Link>
                </li>
            </ul>
            <ul className="nav col rounded">
                <li title="Messages" className='nav-item'>
                    <Link to='/messages' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                    <i className="bi bi-envelope fs-2"></i><span className='fs-4'> Messages</span>
                    </Link>
                </li>
            </ul>
          </div>
          <div className="row gap-2 m-0 mb-2">
            <ul className="nav col rounded">
                <li title="Wallet" className='nav-item'>
                  <Link to='#' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                  <i className="bi bi-wallet fs-2"></i><span className='fs-4'> Wallet</span>
                  </Link>
                </li>
            </ul>
            <ul className="nav col rounded">
                <li title="Bookmark" className='nav-item'>
                    <Link to='/bookmark' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                    <i className="bi bi-bookmark fs-2"></i><span className='fs-4'> Bookmark</span>
                    </Link>
                </li>
            </ul>
          </div>
          <div className="row gap-2 m-0 mb-2">
            <ul className="nav col rounded">
                <li title="Wallet" className='nav-item'>
                  <Link to='#' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                  <i className="bi bi-controller fs-2"></i><span className='fs-4'> Game</span>
                  </Link>
                </li>
            </ul>
            <ul className="nav col rounded">
                <li title="Bookmark" className='nav-item'>
                    <Link to='#' className='nav-link d-flex gap-2 align-items-center p-1 text-body'>
                    <i className="bi bi-newspaper fs-2"></i><span className='fs-4'> News</span>
                    </Link>
                </li>
            </ul>
          </div>

          <br />
          
          <div className="dropdown mb-3">
            <button className="btn border text-body dropdown-toggle d-flex align-items-center gap-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="fs-5">Settings </span>
              <i className="bi bi-gear fs-4"></i>
            </button>
            <div className="dropdown-menu p-2">
              ...
            </div>
          </div>

          <ThemeToggler />
          <br />

          <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
        </div>   
    </div>
  )
}

export default Menu
