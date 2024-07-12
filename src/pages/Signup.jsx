import React from 'react';
import Signin from './Signin';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/signin', { replace: true });
    };

  return (
    <div>
      <Signin />
      
      <div className="modal d-block">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
            <div className="modal-content bg-light">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up</h4>
                    <button type="button" className="btn-close" onClick={handleGoBack}></button>
                </div>
                <div className="modal-body">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="text" id='firstname' className='form-control' name="firstname" placeholder='First Name' />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="text" id='lastname' className='form-control' name="lastname" placeholder='Last Name' />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="text" id='username' className='form-control text-lowercase' name="username" autocomplete="username" placeholder='Username' />
                                    <label htmlFor="username">Username</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="text" id='email' className='form-control' name="email" autocomplete="email" placeholder='Email' />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating mb-3 dropdown">
                                    <input type="tel" id='pnumber' className='form-control' name="pnumber" autocomplete="off" placeholder='Phone Number' />
                                    <label htmlFor="pnumber">Phone Number</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="text" id='birthday' className='form-control' name="birthday" placeholder='Birthday' />
                                    <label htmlFor="birthday">Birthday</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="password" id='password' className='form-control' name="password" placeholder='Password' />
                                    <label htmlFor="password">Password</label>
                                    <p className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 hover">Show</p>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input type="password" id='cpassword' className='form-control' name="cpassword" placeholder='Confirm Password' />
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <p className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 hover">Show</p>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-3 form-check">
                            <input type="checkbox" className="form-check-input" name="checkbox" />
                            <label className="form-check-label" for="checkbox">I agree to the terms of service</label>
                        </div>

                        {/* Display error message if any */}
                        <p className="text-danger"></p>

                        <button type="submit" className="btn btn-primary btn-block mb-2 shadow-sm">Sign Up</button>
                    </form>
                </div>
                <div className="modal-footer justify-content-start">
                    <p>Already have an account? <Link to='/signin'>Sign In</Link> </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
