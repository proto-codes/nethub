import React from 'react';
import { Link } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sitelogo from '../assets/img/android-chrome-512x512.png';

// library.add(fas);

function Nav(props) {
  return (
    <div>
        <nav>
            <div className='nav-container'>
                <a href='/' title="Logo" className='nav-logo position-absolute top-0 d-flex gap-2 p-1 px-2'>
                    <img src={sitelogo} className='d-none d-sm-block d-lg-none' style={{width: '2rem'}} alt="Nethub" /><span className='fs-2 d-none d-lg-inline' style={{lineHeight: '30px'}}> Nethub</span>
                </a>
                
                <div className="nav-links d-flex d-sm-block">
                    <li title='Home' className='hover rounded'>
                        <Link to="/" className='d-flex gap-2 align-items-center p-1 px-2'>
                        {/* <FontAwesomeIcon icon="home" /> */}
                        <i className="bi bi-house fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Home</span>
                        </Link>
                    </li>
                    <li title="Search" className='hover rounded d-none d-sm-flex'>
                        <Link to='#' className='d-flex gap-2 align-items-center p-1 px-2' onClick={props.searchBtn}>
                        <i className="bi bi-search e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Search</span>
                        </Link>
                    </li>
                    <li title="Create" className='hover rounded d-none d-sm-flex'>
                        <Link to='#' className='d-flex gap-2 align-items-center p-1 px-2'>
                        {/* <FontAwesomeIcon icon="square-plus" /> */}
                        <i className="bi bi-plus-square e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Create</span>
                        </Link>
                    </li>
                    <li title="Shop" className='hover rounded'>
                        <Link to='/shop' className='d-flex gap-2 align-items-center p-1 px-2'>
                        <i className="bi bi-bag e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Shop</span>
                        </Link>
                    </li>
                    <li title="Videos" className='hover rounded'>
                        <Link to='/videos' className='d-flex gap-2 align-items-center p-1 px-2'>
                        <i className="bi bi-film e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Video</span>
                        </Link>
                    </li>
                    <li title="Friends" className='hover rounded'>
                        <Link to='/friends' className='d-flex gap-2 align-items-center p-1 px-2'>
                        <i className="bi bi-person-plus e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Friends</span>
                        </Link>
                    </li>
                    <li title="Messages" className='hover rounded d-none d-sm-flex' onClick={props.messagesBtn}>
                        <Link to='/messages' className='d-flex gap-2 align-items-center p-1 px-2'>
                        <i className="bi bi-envelope e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Messages</span>
                        </Link>
                    </li>
                    <li title="Notifications" className='hover rounded'>
                        <Link to='#' className='d-flex gap-2 align-items-center p-1 px-2' onClick={props.notificationsBtn}>
                        <i className="bi bi-bell e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Notifications</span>
                        </Link>
                    </li>
                    <li title="Menu" className='hover rounded d-flex d-sm-none gap-2 align-items-center p-1 px-2' onClick={props.menuBtn}>
                    <i className="bi bi-list e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Menu</span>
                </li>
                </div>
            
                <li title="Menu" className='hover rounded position-absolute bottom-0 d-none d-sm-flex gap-2 align-items-center p-1 px-2' onClick={props.menuBtn}>
                    <i className="bi bi-list e fs-2 px-1"></i><span className='fs-4 d-none d-lg-inline'> Menu</span>
                </li>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
