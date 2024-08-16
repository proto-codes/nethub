import React, { useState } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';
import coverImg from '../assets/img/Cover_photo_placeholder.png';
import profileImg from '../assets/img/snack1.jpeg';
import Gallery from '../components/Gallery';
import { useNavigate } from 'react-router-dom';

function Profile() {  
  const navigateBack = useNavigate();

  const handleGoBack = () => {
    navigateBack(-1);
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };
  
  const navigate = useNavigate();

  const handleRedirection = () => {
      navigate('/profile/edit', { replace: true });
  };

  return (
    <div>
        <div className="container-fluid d-flex">
          <Nav menuBtn={handleMenuVisibility} hideNav='nav-hidden' />

          {menuVisible && (
            <Menu />
          )}
          
          <section className='profile-section bg-body p-2 overflow-auto'>
            <div className='d-flex align-items-center justify-content-between mb-2'>
              <button className="btn bi bi-arrow-left fs-4 p-0 px-1" onClick={handleGoBack}></button>

              <a href="#" className="dropdown-toggle h4 text-decoration-none" id='dropdownMenu' data-bs-toggle="dropdown" aria-expanded='false'>John Doe</a>
              <div className="dropdown-menu" aria-labelledby='dropdownMenu'>
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
              </div>

              <button className="btn bi bi-search fs-4 p-0 px-1"></button>
            </div>

            <div className="position-relative">
              <img src={coverImg} alt="" className="profile-cover-img w-100" />
              <img src={profileImg} alt="" className="profile-photo rounded-circle border" />
            </div>

            <div className="d-flex justify-content-end gap-1 mt-2">
              <button className="bi bi-search btn hover fs-3 p-0 px-2 border"></button>
              {/* <button className="bi bi-bell btn hover fs-3 p-0 px-2 border"></button>
              <button className="bi bi-chat btn hover fs-3 p-0 px-2 border"></button> */}
              <button className="bi bi-three-dots-vertical btn border hover fs-3 p-0 px-2 border"></button>
              <button type="submit" className='btn bg-custom-color' onClick={handleRedirection}>Edit Profile</button>
            </div>

            <div className="mt-2">
              <h3 className='fs-2 mb-0'>John Doe <span className='fs-4'>(Nickname)</span></h3>
              <p className='fs-5'>@johndoe</p>

              <div className='d-flex gap-3'>
                <span className='fs-4'><strong>0</strong>Followers</span>
                <span className='fs-4'><strong>0</strong>Following</span>
              </div>
              
              <p className="mb-1 fs-5 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, repellendus.</p>

              <div className='mb-3 fw-light'>
                <i className='bi bi-briefcase fs-5 me-3'><span> Computer Scientist</span></i>
                <i className='bi bi-geo-alt fs-5 me-3'><span> Nigeria</span></i>
                <i className='bi bi-heart fs-5 me-3'><span> Single</span></i>
                <i className='bi bi-cake fs-5 me-3'><span> 20th June, 2020</span></i>
                <i className='bi bi-link-45deg fs-5 me-3'><a className='text-decoration-none' href='https://www.com' target='blank'> https://www.com</a></i>
                <i className='bi bi-calendar fs-5 me-3'><span> 1st May, 1990</span></i>
              </div>

              {/* Nav tabs */}
              <ul className="nav nav-tabs nav-justified" role='tablist'>
                <li className="nav-item">
                  <a className="nav-link fs-4 text-body active" id='posts-tab' data-bs-toggle="tab" role='tab' aria-controls='posts' aria-selected='true' href="#posts">Posts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-4 text-body" id='photos-tab' data-bs-toggle="tab" role='tab' aria-controls='photos' aria-selected='false' href="#photos">Photos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-4 text-body" id='vidoes-tab' data-bs-toggle="tab" role='tab' aria-controls='vidoes' aria-selected='false' href="#vidoes">Videos</a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content overflow-auto">
                <div className="tab-pane fade show active" id="posts" role='tabpanel' aria-labelledby='posts-tab'>posts content</div>
                <div className="tab-pane fade" id="photos" role='tabpanel' aria-labelledby='photos-tab'>
                  <div className="gallery">
                    <Gallery />
                  </div>
                </div>
                <div className="tab-pane fade" id="vidoes" role='tabpanel' aria-labelledby='vidoes-tab'>vidoes content</div>
              </div>
            </div>
          </section>
          
          <Suggestions />
        </div>
    </div>
  )
}

export default Profile;
