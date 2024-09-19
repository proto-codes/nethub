import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import moment from '../assets/img/malewatches.jpeg';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Suggestions from '../components/Suggestions';

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
        <div className="container-fluid d-flex">
          <Header />
          <Nav homeActive="bg-custom-color active" menuBtn={handleMenuVisibility} />
          {menuVisible && (
            <Menu closeMenuBtn={handleMenuVisibility} />
          )}
          
          <section className='home-section p-2'>      
            {/* Moments start */}
            <div className='d-flex flex-column'>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Moments</h3>
                    <Link className='fs-5 text-decoration-none text-custom-color' to='/moments'>See All</Link>
                </div>

                <div className="moments d-flex align-items-center gap-2 overflow-auto">
                    <div className="border rounded">
                      <div className="position-relative">
                        <img src={moment} alt="" className='rounded-top object-fit-cover' style={{width: '8rem', height: '10rem'}} />

                        <div className="w-100 position-absolute start-0 end-0 bottom-0 d-flex justify-content-center align-items-center m-0 p-1 bg-body bg-opacity-75">
                          <button className="btn bg-custom-color bi bi-plus-circle fs-3"></button>
                        </div>
                      </div>

                      <p className="text-truncate text-center m-auto" style={{width: '7rem'}} >Your moment</p>
                    </div>

                    <div className="border rounded">
                      <img src={moment} alt="" className='rounded-top object-fit-cover' style={{width: '8rem', height: '10rem'}} />
                      <p className="text-truncate text-center m-auto" style={{width: '7rem'}} >Mike Drake</p>
                    </div>
                    <div className="border rounded">
                      <img src={moment} alt="" className='rounded-top object-fit-cover' style={{width: '8rem', height: '10rem'}} />
                      <p className="text-truncate text-center m-auto" style={{width: '7rem'}} >John Doe</p>
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
