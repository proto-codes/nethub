import React from 'react'
import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import moment from '../assets/img/malewatches.jpeg';
import Nav from '../components/Nav';
import Suggestions from '../components/Suggestions';

function Home() {
  return (
    <div>
        <div className="page-contanier">
          {/* <Header /> */}
          <Nav />
          <section className="home-section">

            {/* Moments start */}
                    <div className='d-flex flex-column align-items-center'>
                        <div className="w-100 d-flex align-items-center justify-content-between">
                            <h3>Moments</h3>
                            <Link className='fs-5' to=''>See All</Link>
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
                            <div className="my-moments">
                                <img src={moment} alt="" />
                                <p className="text-truncate text-center">mikedrake01</p>
                            </div>
                            <div className="my-moments">
                                <img src={moment} alt="" />
                                <p className="text-truncate text-center">mikedrake01</p>
                            </div>
                            <div className="my-moments">
                                <img src={moment} alt="" />
                                <p className="text-truncate text-center">mikedrake01</p>
                            </div>
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
