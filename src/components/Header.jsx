import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <header>
            <div class="site-name">
                <a href="/" title="Logo">
                    <i class="fas fa-n"></i><span> Nethub</span>
                </a>
            </div>
            <div class="search-bar">
                <form action="" method="get">
                    <i class="fas fa-search"></i>
                    <input type="search" placeholder="Search..." />
                </form>
            </div>
            <div class="header-icon">
                <li title="Search">
                    <Link to='/search'>
                    <i class="fas fa-search"></i>
                    </Link>
                </li>
                <li title="Create">
                    <Link to='/create'>
                    <i class="fas fa-square-plus"></i>
                    </Link>
                </li>
                <li title="Messages">
                    <Link to='/messages'>
                    <i class="fas fa-envelope"></i>
                    </Link>
                </li>
            </div>
        </header>
    </div>
  )
}

export default Header;
