import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
        <div className="container-fluid">
        <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6 bg-light">
                <div className="vh-100 d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <p className="text-success"></p>

                                <h3 className="display-4">Nethub</h3>
                                <p className="text-muted mb-4">Sign in to Nethub</p>
                                <form method="post">
                                    <div className="form-floating mb-3">
                                        <input type="text" id='verifyUser' className='form-control' placeholder='Username, Email, or Phone Number' name="verifyUser" />
                                        <label htmlFor="verifyUser">Username, Email, or Phone Number</label>
                                    </div>

                                    <div className="form-floating">
                                        <input type="password" id='password' className='form-control' name="password" placeholder='Password' />
                                        <label htmlFor="password">Password</label>
                                        <span className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 hover">Show</span>
                                    </div>

                                    <p className="text-danger"></p>

                                    <button type="submit" className="btn btn-primary btn-block mb-2 shadow-sm">Sign In</button>
                                  
                                    <div className="text-right mb-3">
                                        <Link to='/' className="text-muted">Forgot Password?</Link>
                                    </div>

                                    <div className="text-center d-flex justify-content-between mt-4">
                                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Signin;
