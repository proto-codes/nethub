import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Nav() {
  return (
    <div>
        <nav>
            <div className='nav-container'>
                <a href='/' title="Logo" className='nav-logo'>
                    <FontAwesomeIcon icon='' /><span> Nethub</span>
                </a>
                
                <div className="nav-links">
                    <li title='Home'>
                        <Link to="/">
                        <FontAwesomeIcon icon="home" /><span> Home</span>
                        </Link>
                    </li>
                    <li title="Search">
                        <Link to='#'>
                        <FontAwesomeIcon icon="search" /><span> Search</span>
                        </Link>
                    </li>
                    <li title="Create">
                        <Link to='#'>
                        <FontAwesomeIcon icon="square-plus" /><span> Create</span>
                        </Link>
                    </li>
                    <li title="Shop">
                        <Link to='/shop'>
                        <FontAwesomeIcon icon="shopping-cart" /><span> Shop</span>
                        </Link>
                    </li>
                    <li title="Videos">
                        <Link to='/videos'>
                        <FontAwesomeIcon icon="video" /><span> Video</span>
                        </Link>
                    </li>
                    <li title="Friends">
                        <Link to='/friends'>
                        <FontAwesomeIcon icon="users" /><span> Friends</span>
                        </Link>
                    </li>
                    <li title="Messages">
                        <Link to='/messages'>
                        <FontAwesomeIcon icon="envelope" /><span> Messages</span>
                        </Link>
                    </li>
                    <li title="Notifications">
                        <Link to='#'>
                        <FontAwesomeIcon icon="bell" /><span> Notifications</span>
                        </Link>
                    </li>
                </div>
            
                <li title="Menu" className='nav-menu'>
                    <FontAwesomeIcon icon="bars" /><span> Menu</span>
                </li>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
