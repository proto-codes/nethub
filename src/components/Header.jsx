import React from 'react';

function Header() {
  return (
    <div>
        <header className='d-flex d-sm-none'>
            <div className="site-name">
                <a href="/" title="Logo">
                    <span className='fs-1 ms-2'> Nethub</span>
                </a>
            </div>
            <div className="d-flex gap-2">
                <li title="Search" className='hover rounded'>
                    <button className='btn border'>
                    <i className="bi bi-search fs-2"></i>
                    </button>
                </li>
                <li title="Create" className='hover rounded'>
                    <button className='btn border'>
                    <i className="bi bi-plus-square fs-2"></i>
                    </button>
                </li>
                <li title="Messages" className='hover rounded'>
                    <button className='btn border'>
                    <i className="bi bi-envelope fs-2"></i>
                    </button>
                </li>
            </div>
        </header>
    </div>
  )
}

export default Header;
