import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios, { fetchCsrfToken } from '../api/axios';

function Register() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            // Fetch CSRF token before making the request
            await fetchCsrfToken();

            // Perform register
            const response = await axios.post('/register', userData);

            console.log('Register success', response.data);
            setUserData({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            });

            // Redirect to login page
            navigate('/login');
        } catch (error) {
            if (error.response) {
                // Handle specific error responses
                console.error('Error Response Data:', error.response.data);
                console.error('Error Response Status:', error.response.status);
                setError('Registration failed. Please check your input and try again.');
            } else if (error.request) {
                // Handle no response
                console.error('Error Request:', error.request);
                setError('Network error. Please try again later.');
            } else {
                // Handle other errors
                console.error('Error Message:', error.message);
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    const handleGoBack = () => {
        navigate('/login', { replace: true });
    };

    const [PasswordVisible, setPasswordVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisible(!PasswordVisible);
    };

    const [PasswordConfirmationVisible, setPasswordConfirmationVisible] = useState(false);

    const handlePasswordConfirmationVisibility = () => {
        setPasswordConfirmationVisible(!PasswordConfirmationVisible);
    };
    
    const [BirthInputType, setBirthInputType] = useState('text');

    const handleBirthInputFocus = () => {
        setBirthInputType('date');
    };

    const handleBirthInputBlur = () => {
        setBirthInputType('text');
    };

  return (
    <div>      
      <div className="modal d-block bg-gradient">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Register</h4>
                    <button type="button" className="btn-close" onClick={handleGoBack}></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleRegister}>
                        <div className="row">
                            <div className="col-md-6">
                                {/* <div className="form-floating mt-3">
                                    <input type="text" id='firstname' className='form-control' name="firstname" placeholder='First Name' />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                <span className="text-danger">Error</span>
                                
                                <div className="form-floating mt-3">
                                    <input type="text" id='lastname' className='form-control' name="lastname" placeholder='Last Name' />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                                <span className="text-danger">Error</span>
                                
                                <div className="form-floating mt-3">
                                    <input type="text" id='username' className='form-control text-lowercase' name="username" autoComplete="username" placeholder='Username' />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <span className="text-danger">Error</span> */}
                                
                                <div className="form-floating mt-3">
                                    <input type="text" id='name' className='form-control' name="name" autoComplete='name' placeholder='Name' 
                                    value={userData.name}
                                    onChange={handleInputChange} />
                                    <label htmlFor="name">Name</label>
                                </div>
                                
                                <div className="form-floating mt-3">
                                    <input type="emal" id='email' className='form-control' name="email" autoComplete='email' placeholder='Email'
                                    value={userData.email}
                                    onChange={handleInputChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                {/* <span className="text-danger">Error</span> */}
                            </div>

                            <div className="col-md-6">
                                {/* <div className="form-floating mt-3 dropdown">
                                    <input type="tel" id='pnumber' className='form-control' name="pnumber" autoComplete="off" placeholder='Phone Number' />
                                    <label htmlFor="pnumber">Phone Number</label>
                                </div>
                                <span className="text-danger">Error</span>
                                
                                <div className="form-floating mt-3">
                                    <input type={BirthInputType} id='birthday' className='form-control' name="birthday" placeholder='Birthday' onFocus={handleBirthInputFocus} onBlur={handleBirthInputBlur} />
                                    <label htmlFor="birthday">Birthday</label>
                                </div>
                                <span className="text-danger">Error</span> */}
                                
                                <div className="form-floating mt-3">
                                    <input type={PasswordVisible ? 'text' : 'password'} id='password' className='form-control' name="password" placeholder='Password' 
                                    value={userData.password}
                                    onChange={handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                    <span onClick={handlePasswordVisibility} className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 cursor-pointer button">{PasswordVisible ? 'Hide' : 'Show'}</span>
                                </div>
                                {/* <span className="text-danger">Error</span> */}
                                
                                <div className="form-floating mt-3">
                                    <input type={PasswordConfirmationVisible ? 'text' : 'password'} id='Password_confirmation' className='form-control' name="Password_confirmation" placeholder='Confirm Password'
                                    value={userData.Password_confirmation}
                                    onChange={handleInputChange} />
                                    <label htmlFor="Password_confirmation">Confirm Password</label>
                                    <span onClick={handlePasswordConfirmationVisibility} className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 cursor-pointer">{PasswordConfirmationVisible ? 'Hide' : 'Show'}</span>
                                </div>
                                {/* <span className="text-danger">Error</span> */}
                            </div>
                        </div>

                        <div className="form-group my-3 form-check">
                            <input type="checkbox" className="form-check-input" name="checkbox" id='checkbox' />
                            <label className="form-check-label" htmlFor="checkbox">I agree to the terms of service</label>
                        </div>

                        {error && <p className="text-danger">{error}</p>}

                        <button type="submit" className="btn bg-custom-color shadow-sm">Register</button>
                    </form>
                </div>
                <div className="modal-footer justify-content-start">
                    <p>Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link> </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
