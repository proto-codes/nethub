import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sitelogo from '../assets/img/android-chrome-512x512.png';

function Nav(props) {
  return (
    <div>
        <nav className={'bg-body z-3 p-2 border-end ' + props.hideNav}>  
            <div className='nav-box h-100 position-relative d-flex flex-column justify-content-center'>
                <a href='/' title="Logo" className='position-absolute top-0 d-flex gap-2 text-auto text-auto text-decoration-none'>
                    <img src={sitelogo} className='d-none d-sm-block d-lg-none' style={{width: '2rem'}} alt="Nethub" /><span className='fs-2 d-none d-lg-inline' style={{lineHeight: '30px'}}> Nethub</span>
                </a>
                
                <ul className="nav nav-pills flex-column my-5">
                    <li title='Home' className='nav-item'>
                        <Link to="/" className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.homeActive}>
                        <i className="bi bi-house fs-2"></i><span className='fs-4 d-none d-lg-inline'> Home</span>
                        </Link>
                    </li>
                    <li title="Search" className='nav-item nav-tab-hidden'>
                        <Link to='/search' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.searchActive}>
                        <i className="bi bi-search e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Search</span>
                        </Link>
                    </li>
                    <li title="Create" className='nav-item nav-tab-hidden'>
                        <Link to='#' className='nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto'>
                        <i className="bi bi-plus-square e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Create</span>
                        </Link>
                    </li>
                    <li title="Shop" className='nav-item'>
                        <Link to='/shop' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.shopActive}>
                        <i className="bi bi-bag e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Shop</span>
                        </Link>
                    </li>
                    <li title="Videos" className='nav-item'>
                        <Link to='/videos' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.videoActive}>
                        <i className="bi bi-camera-reels e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Video</span>
                        </Link>
                    </li>
                    <li title="Friends" className='nav-item'>
                        <Link to='/friends' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.friendsActive}>
                        <i className="bi bi-person-plus e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Friends</span>
                        </Link>
                    </li>
                    <li title="Messages" className='nav-item nav-tab-hidden'>
                        <Link to='/messages' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.messagesActive}>
                        <i className="bi bi-envelope e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Messages</span>
                        </Link>
                    </li>
                    <li title="Notifications" className='nav-item'>
                        <Link to='/notifications' className={'nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto ' + props.notificationsActive}>
                        <i className="bi bi-bell e fs-2"></i><span className='fs-4 d-none d-lg-inline'> Notifications</span>
                        </Link>
                    </li>
                    <li title="Menu" className='nav-item d-block d-sm-none'>
                        <Link to='#' className='nav-link d-flex gap-2 align-items-center p-0 px-1 text-auto' onClick={props.menuBtn}>
                        <i className="bi bi-list fs-2"></i><span className='fs-4 d-none d-lg-inline'> Menu</span>
                        </Link>
                    </li>
                </ul>
                            
                <li title="Menu" className='position-absolute bottom-0 d-none d-sm-flex gap-2 align-items-center'>
                    <Link to='#' className='d-flex gap-2 align-items-center p-0 px-1 text-auto text-decoration-none' onClick={props.menuBtn}>
                    <i className="bi bi-list fs-2"></i><span className='fs-4 d-none d-lg-inline'> Menu</span>
                    </Link>
                </li>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
