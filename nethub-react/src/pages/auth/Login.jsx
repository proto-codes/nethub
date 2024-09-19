import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Perform login
            const response = await axios.post('/login', userData);

            // Store the token
            localStorage.setItem('token', response.data.token);

            console.log('Login successful');
            setUserData({
                email: '',
                password: ''
            });

            // Redirect to home
            navigate('/');
        } catch (error) {
            console.error('Login error', error);
            setError('Invalid credentials. Please try again.');
        }
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
      

  return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6">
                <div className="vh-100 d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                            <p className="text-success"></p>

                            <h3 className="display-4">Nethub</h3>
                            <p className=" mb-4">Login to Nethub</p>
                            <form onSubmit={handleLogin}>
                                <div className="form-floating">
                                    <input type="email" id='email' className='form-control' placeholder='Username, Email, or Phone Number' name="email"
                                    value={userData.email}
                                    onChange={handleInputChange} />
                                    <label htmlFor="email">Username, Email, or Phone Number</label>
                                </div>
                                {/* <span className="text-danger">Error</span> */}

                                <div className="form-floating mt-3">
                                    <input type={isPasswordVisible ? 'text' : 'password'} id='password' className='form-control' name="password" placeholder='Password' 
                                    value={userData.password}
                                    onChange={handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                    <span onClick={handlePasswordVisibility} className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 cursor-pointer button">{isPasswordVisible ? 'Hide' : 'Show'}</span>
                                </div>
                                {/* <span className="text-danger">Error</span> */}
                                {error && <p className="text-danger">{error}</p>}

                                <button type="submit" className="btn bg-custom-color d-block mt-3 mb-2 shadow-sm">Login</button>                       
                            </form>
                                <div className="mb-3">
                                    <Link to='/' className='text-decoration-none'>Forgot Password?</Link>
                                </div>

                                <div className="d-flex">
                                    <p>Don't have an account? <Link to='/register' className='text-decoration-none'>Register</Link></p>
                                </div>
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

export default Login;
