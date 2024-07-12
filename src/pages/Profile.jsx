import React, { useState } from 'react';
// import Header from '../components/Header';
import Nav from '../components/Nav';
import Menu from '../components/popouts/Menu';
import Notifications from '../components/popouts/Notifications';
import Search from '../components/popouts/Search';
// import Messages from './Messages';
import Suggestions from '../components/Suggestions';
import coverImg from '../assets/img/Cover_photo_placeholder.png';
import profileImg from '../assets/img/snack1.jpeg';

function Profile() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };
  const handleNotificationsVisibility = () => {
    setNotificationsVisible(!notificationsVisible);
  };
  const handleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };
  const handleMessagesVisibility = () => {
    setMessagesVisible(!messagesVisible);
  };

  return (
    <div>
        <div className="page-container container-fluid d-flex pe-0">
          {/* <Header /> */}
          <Nav menuBtn={handleMenuVisibility} searchBtn={handleSearchVisibility} notificationsBtn={handleNotificationsVisibility} messagesBtn={handleMessagesVisibility} />
          {menuVisible && (
            <Menu />
          )}
          {messagesVisible && (
            // <Messages />
            <div className="messages-popout"></div>
          )}
          {notificationsVisible && (
            <Notifications />
          )}
          {searchVisible && (
            <Search />
          )}
          
          <section>
            <div className="profile">
              <img src={coverImg} alt="" className="profile-cover-img w-100" />
              <img src={profileImg} alt="" className="profile-photo rounded-circle" />

              <div className="profile-icon-btn d-flex align-items-center justify-content-end gap-3 mt-2">
                <button className="bi bi-search btn hover fs-3 p-0 px-2 border"></button>
                <button className="bi bi-bell btn hover fs-3 p-0 px-2 border"></button>
                <button className="bi bi-chat btn hover fs-3 p-0 px-2 border"></button>
                <button className="bi bi-three-dots-vertical btn hover fs-3 p-0 px-2 border"></button>
                <button type="submit" className='btn btn-primary fs-5'>Edit Profile</button>
              </div>

              <div className="profile-user-info mt-3">
                <h3 className='fs-2 mb-0'>John Doe <span className='fs-4'>(Nickname)</span></h3>
                <p className='fs-5'>@johndoe</p>

                <div className='d-flex gap-3'>
                  <span className='fs-3'><strong>0</strong>Followers</span>
                  <span className='fs-3'><strong>0</strong>Following</span>
                </div>
                
                <p className="mb-1 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, repellendus.</p>

                <div className='mb-3'>
                  <i className='bi bi-briefcase fs-4 me-3'><span> Computer Scientist</span></i>
                  <i className='bi bi-geo-alt fs-4 me-3'><span> Nigeria</span></i>
                  <i className='bi bi-heart fs-4 me-3'><span> Single</span></i>
                  <i className='bi bi-cake fs-4 me-3'><span> 20th June, 2020</span></i>
                  <i className='bi bi-link-45deg fs-4 me-3'><a href='https://www.com' target='blank'> https://www.com</a></i>
                  <i className='bi bi-calendar fs-4 me-3'><span> 1st May, 1990</span></i>
                </div>

                <div className="row">
                  <button className="col hover text-center p-2 fs-4 border" >Posts</button>
                  <button className="col hover text-center p-2 fs-4 border" >Photos</button>
                  <button className="col hover text-center p-2 fs-4 border" >Videos</button>
                </div>
              </div>
            </div>
          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Profile;
