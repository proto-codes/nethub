import React from 'react';
import Signin from './Signin';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <Signin />
      
      <div className="modal d-block">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-light">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up</h4>
                    <button type="button" class="btn-close"></button>
                </div>
                <div className="modal-body">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form_group">
                                    <span>First Name</span>
                                    <input type="text" name="firstname" />
                                </div>
                                
                                <div className="form_group">
                                    <span>Last Name</span>
                                    <input type="text" name="lastname" />
                                </div>
                                
                                <div className="form_group">
                                    <span>Username</span>
                                    <input type="text" className="text-lowercase" name="username" autocomplete="username" />
                                </div>
                                
                                <div className="form_group">
                                    <span>Email</span>
                                    <input type="text" name="email" autocomplete="email" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form_group dropdown">
                                    <span>Phone Number</span>
                                    <input type="tel" name="phone_number" autocomplete="off" />
                                </div>
                                
                                <div className="form_group">
                                    <span>Birthday</span>
                                    <input type="text" name="birthday" />
                                </div>
                                
                                <div className="form_group">
                                    <span>Password</span>
                                    <input type="password" name="password" />
                                    <p className="position-absolute end-0 top-50 translate-middle-y me-2" style={{cursor: 'pointer'}}>Show</p>
                                </div>
                                
                                <div className="form_group">
                                    <span>Confirm Password</span>
                                    <input type="password" name="confirm_password" />
                                    <p className="position-absolute end-0 top-50 translate-middle-y me-2" style={{cursor: 'pointer'}}>Show</p>
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
