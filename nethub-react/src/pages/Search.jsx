import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';
import profile from '../assets/img/malewatches.jpeg';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="container-fluid d-flex">
          <Nav searchActive="bg-custom-color active" hideNav='nav-hidden' menuBtn={handleMenuVisibility} />
          {menuVisible && (
            <Menu closeMenuBtn={handleMenuVisibility} />
          )}
          
          <section className='profile-section p-2 bg-body'>
            <div className="d-flex gap-3 mb-2">
                <button className="bi bi-arrow-left btn fs-4" onClick={handleGoBack}></button>
                <form method="get" className='input-group'>
                    <div className="input-group-prepend">
                        <i className="bi bi-search fs-4 input-group-text d-block"></i>
                    </div>
                    <input type="search" className="form-control" placeholder="Search..." />
                </form>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <p className='m-0 p-0'>Recent Search</p>
                <button className='btn p-0'>Clear All</button>
            </div>

            <div className="d-flex align-items-center justify-content-between border rounded p-2">
                <div className='d-flex align-items-center gap-2'>
                    <img className="profile-img" src={profile} alt="" />
                    <div className="d-flex flex-column justify-content-center">
                        <h5 className="m-0 p-0">Mike drake</h5>
                        <p className="fw-light fs-5 m-0 p-0">@mikedrake</p>
                    </div>
                </div>
                <button className='bi btn-close btn'></button>
            </div>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Search
