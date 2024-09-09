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
          <Nav notificationsActive="bg-custom-color active" menuBtn={handleMenuVisibility} />
          {menuVisible && (
            <Menu closeMenuBtn={handleMenuVisibility} />
          )}
          
          <section className='notifications-section p-2 bg-body'>
            <div className="d-flex justify-content-between mb-2">
                <div className='d-flex align-items-center gap-2'>
                    <button className="btn bi bi-arrow-left fs-4" onClick={handleGoBack}></button>
                    <h3 className='m-0'>Notifications</h3>
                </div>
                <button className="btn bi bi-gear fs-4"></button>
            </div>
            <div className="d-flex mb-2">
                <p className='m-0'>New</p>
            </div>

            <div className="d-flex align-items-center justify-content-between border rounded p-2">
                <div className='d-flex align-items-center gap-2'>
                    <img className="profile-img" src={profile} alt="" />
                    <div className="d-flex flex-column justify-content-center">
                        <h6 className="m-0">Mike drake</h6>
                        <p className="fw-light m-0">Commented on your photo</p>
                        <small className=" fw-lighter m-0">2 hours ago</small>
                    </div>
                </div>
                <button className='btn bi bi-three-dots fs-4'></button>
            </div>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Search
