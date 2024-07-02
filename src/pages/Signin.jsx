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
                                    <div className="form_group">
                                        <span>Username, Email, or Phone Number</span>
                                        <input type="text" name="verifyuser" />
                                    </div>

                                    <div className="form_group">
                                        <span>Password</span>
                                        <input type="password" name="password" />
                                        <p className="position-absolute end-0 top-50 translate-middle-y me-2" style={{cursor: 'pointer'}}>Show</p>
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
