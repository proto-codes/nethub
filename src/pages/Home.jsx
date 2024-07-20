import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import moment from '../assets/img/malewatches.jpeg';
import Nav from '../components/Nav';
import Menu from '../components/popouts/Menu';
import Notifications from '../components/popouts/Notifications';
import Search from '../components/popouts/Search';
// import Messages from './Messages';
import Suggestions from '../components/Suggestions';

function Home() {
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
        <div className="container-fluid d-flex p-0">
          <Header />
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
          
          <section className='home-section'>      
            {/* Moments start */}
                    <div className='d-flex flex-column'>
                        <div className="d-flex align-items-center justify-content-between">
                            <h3>Moments</h3>
                            <Link className='fs-5' to='/moments'>See All</Link>
                        </div>

                        <div className="moments">
                            <div className="my-moments">
                                <img src={moment} alt="" />
                                <p className="text-truncate text-center">mikedrake01</p>
                            </div>
                            <div className="my-moments">
                                <img src={moment} alt="" />
                                <p className="text-truncate text-center">mikedrake01</p>
                            </div>
                        </div>
                    </div>
            {/* Moments end */}

          </section>
          <Suggestions />
        </div>
    </div>
  )
}

export default Home;
