import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
        <header className='w-100 position-fixed top-0 start-0 end-0 d-flex align-items-center justify-content-between border-bottom bg-body d-sm-none z-1' style={{height: '3.5rem'}}>
            <div>
                <a href="/" title="Logo" className='fs-1 ms-2 text-body text-decoration-none'>Nethub</a>
            </div>
            <ul className="nav nav-pills gap-2">
                <li title="Search" className='nav-item'>
                    <Link to='/search' className='nav-link text-body'>
                    <i className="bi bi-search fs-1"></i>
                    </Link>
                </li>
                <li title="Create" className='nav-item'>
                    <Link to='#' className='nav-link text-body' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    <i className="bi bi-plus-square fs-1"></i>
                    </Link>
                    <ul className="dropdown-menu">
                        <li><a href="#" className="dropdown-item"><i className="bi bi-pencil-square"></i> Post</a></li>
                        <li><a href="#" className="dropdown-item"><i className="bi bi-clock"></i> Moment</a></li>
                        <li><a href="#" className="dropdown-item"><i className="bi bi-play-btn"></i> Live</a></li>
                    </ul>
                </li>                
                <li title="Messages" className='nav-item'>
                    <Link to='/messages' className='nav-link text-body'>
                    <i className="bi bi-envelope fs-1"></i>
                    </Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header;
