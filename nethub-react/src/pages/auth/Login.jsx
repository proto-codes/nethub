import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    
    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await axios.post('/login', {email, password});
    //         setEmail('');
    //         setPassword('');
    //         navigate('/');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    
    const handleLogin = async () => {
        try {
          // Get the CSRF cookie
          await axios.get('http://localhost:8000/sanctum/csrf-cookie');
          
          // Perform login
          const response = await axios.post('http://localhost:8000/login', {
            email: 'user@example.com',
            password: 'password123'
          });
      
          console.log(response.data);
        } catch (error) {
          console.error('Login error', error);
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Username, Email, or Phone Number</label>
                                </div>
                                {/* <span className="text-danger">Error</span> */}

                                <div className="form-floating mt-3">
                                    <input type={isPasswordVisible ? 'text' : 'password'} id='password-auth' className='form-control' name="password-auth" placeholder='Password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password-auth">Password</label>
                                    <span onClick={handlePasswordVisibility} className="position-absolute end-0 top-50 translate-middle-y py-2 me-2 cursor-pointer button">{isPasswordVisible ? 'Hide' : 'Show'}</span>
                                </div>
                                {/* <span className="text-danger">Error</span> */}

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
